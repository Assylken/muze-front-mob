import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  Modal,
  StyleSheet,
  Switch,
} from "react-native";
import React, { FC, useState } from "react";
import tw from "twrnc";
import * as Animatable from "react-native-animatable";
import SingleAlbumBody from "../components/Forms/SingleAlbumBody";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomNavigationStack, PlaylistNavigationStackList } from "../types";
import { useAppDispatch } from "../redux/hooks";
import { register } from "../redux/slices/auth";
import CustomTextInput from "../components/Forms/CustomTextInput";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Picker } from "@react-native-picker/picker";
import * as Yup from "yup";
import {
  useGetPlaylistByUserIdQuery,
  usePostPlaylistMutation,
} from "../redux/services/authorized.service";
import Toast from "react-native-toast-message";
import * as DocumentPicker from "expo-document-picker";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Warning: ..."]);

type ILibraryScreen = NativeStackScreenProps<
  PlaylistNavigationStackList,
  "LibraryScreen"
>;

const PlaylistSchema = Yup.object().shape({
  playlist_name: Yup.string().required("Required field"),
});

const LibraryScreen: FC<ILibraryScreen> = ({ navigation }) => {
  const { data } = useGetPlaylistByUserIdQuery(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [fileDataImage, setFileDataImage] = useState<any>([] as any[]);
  const [selectedValue, setSelectedValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [createPlaylist] = usePostPlaylistMutation();
  const { shadow } = styles;

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PlaylistSchema),
    defaultValues: {
      playlist_name: "",
      playlist_description: "",
      isPrivate: "",
    },
  });

  const pickImage = async (values: any) => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log("RESUSS", result);
    setFileDataImage(result);
  };

  const onSubmit = async (values: any) => {
    values.isPrivate = isEnabled ? 1 : 0;
    console.log(values);
    const formData = new FormData();
    if (values.playlist_description == undefined)
      values.playlist_description = "null";

    formData.append("playlist_name", values.playlist_name);
    formData.append("isPrivate", values.isPrivate);
    formData.append("playlist_description", values.playlist_description);

    if (!fileDataImage) {
      formData.append("playlist_avatar", "null");
    } else {
      formData.append("playlist_avatar", fileDataImage);
    }
    console.log("FILEDATA", fileDataImage);

    await createPlaylist(formData).then((val: any) => {
      console.log("pay", val);

      if (!val.data) {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Something went wrong",
        });
      } else
        Toast.show({
          type: "success",
          text1: "Success",
          text2: "Playlist created",
        });
    });
    setModalOpen(false);
    reset();
    setFileDataImage(null);
  };
  return (
    <SafeAreaView style={tw`self-center bg-white w-100% h-100% items-center`}>
      <Text style={tw`font-bold text-2xl p-5 ml-2`}>Playlists</Text>
      <Toast position="top" />
      <TouchableOpacity
        style={tw`mr-8 self-end border-2 border-[#5C25F9] rounded-6 px-4 py-2`}
        onPress={() => setModalOpen(true)}
      >
        <Text style={tw`text-[#5C25F9]`}>Create Playlist</Text>
      </TouchableOpacity>
      <FlatList
        style={{ paddingTop: 24 }}
        data={data}
        numColumns={2}
        renderItem={({ item, index }) => (
          <View key={index} style={tw`flex bg-white self-center px-1 py-6`}>
            <Animatable.View
              animation="fadeInUp"
              duration={900}
              delay={index * 90}
            >
              <SingleAlbumBody
                myKey={index}
                navigation={navigation}
                cover={item.playlist_avatar}
                name={item.playlist_name}
                description={item.playlist_description}
                id={item.id}
              />
            </Animatable.View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.container}>
        <Modal animationType="slide" transparent={true} visible={modalOpen}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Create playlist</Text>
              <View style={tw`flex-1 w-85%`}>
                <View>
                  <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <View style={tw`flex flex-row ml-2 items-center`}>
                        <Switch
                          style={tw`w-8 h-8 rounded`}
                          trackColor={{ false: "#767577", true: "#5C25F9" }}
                          thumbColor={isEnabled ? "white" : "#f4f3f4"}
                          onValueChange={toggleSwitch}
                          value={isEnabled}
                        ></Switch>
                        <Text
                          style={tw`ml-6 font-semibold text-lg text-[#5C25F9] `}
                        >
                          Is Private?
                        </Text>
                      </View>
                    )}
                    name="isPrivate"
                  />
                  <View>
                    <Controller
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <CustomTextInput
                          placeholderValue="Name"
                          inputValue={value}
                          onBlur={onBlur}
                          func={onChange}
                        />
                      )}
                      name="playlist_name"
                    />
                    {errors.playlist_name ? (
                      <Text>{errors.playlist_name?.message}</Text>
                    ) : null}
                    <Controller
                      control={control}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <CustomTextInput
                          placeholderValue="Description"
                          inputValue={value}
                          onBlur={onBlur}
                          func={onChange}
                        />
                      )}
                      name="playlist_description"
                    />
                    <View style={tw`flex-row justify-center`}>
                      <TouchableOpacity
                        style={tw`h-12 w-1/2 justify-center bg-white items-center px-4 mt-4 border-[#5C25F9] border-2 rounded-6`}
                        onPress={pickImage}
                      >
                        <Text
                          style={tw`text-[#5C25F9] text-base font-semibold`}
                        >
                          Pick image
                        </Text>
                      </TouchableOpacity>
                      <View style={tw`self-center mt-4 ml-4`}>
                        {fileDataImage ? (
                          <Text>{fileDataImage.name}</Text>
                        ) : null}
                      </View>
                    </View>
                    <View style={tw`flex-col`}>
                      <TouchableOpacity
                        style={tw`h-12 w-full justify-center bg-[#5C25F9] items-center px-4 mt-4 border-[#5C25F9] rounded-6`}
                        onPress={handleSubmit(onSubmit)}
                      >
                        <Text
                          style={[tw`text-white text-lg font-bold`, shadow]}
                        >
                          Create
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={tw`h-12 w-full justify-center bg-white items-center px-4 mt-4 border-gray-400 border-2 rounded-6`}
                        onPress={() => setModalOpen(false)}
                      >
                        <Text style={tw`text-gray-400 text-lg font-bold`}>
                          Cancel
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "90%",
    height: "50%",
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  modalText: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 10,
    marginBottom: 15,
    textAlign: "center",
  },
  shadow: {
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
});

export default LibraryScreen;
