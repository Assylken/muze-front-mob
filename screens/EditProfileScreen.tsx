import { MainStackParamList } from "../types";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import CustomTextInput from "../components/Forms/CustomTextInput";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout } from "../redux/slices/auth";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import tw from "twrnc";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Toast from "react-native-toast-message";
import * as DocumentPicker from "expo-document-picker";

import {
  useGetUserQuery,
  usePostUpdateUserInfoMutation,
  useUpdateProfileImageMutation,
} from "../redux/services/authorized.service";

const EditProfileSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  bio: Yup.string(),
  username: Yup.string(),
  countryId: Yup.string(),
});

type IEditProfileScreen = NativeStackScreenProps<
  MainStackParamList,
  "EditProfileScreen"
>;

const EditProfileScreen: FC<IEditProfileScreen> = ({ navigation }) => {
  const { shadow } = styles;
  const [updateProfileInfo] = usePostUpdateUserInfoMutation();
  const [data, setData] = useState<any>([] as any[]);
  const [image, setImage] = useState<any>([] as any[]);
  const [updateProfileImage] = useUpdateProfileImageMutation();
  const [fileDataImage, setFileDataImage] = useState<any>([] as any[]);

  const { user } = useAppSelector((state: any) => state.auth);
  console.log("SAT", user);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EditProfileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      bio: "",
      countryId: "",
    },
  });
  try {
    const { data } = useGetUserQuery(user);
    useEffect(() => {
      if (data) setData(data);
    });
  } catch (error) {
    console.log(error);
  }

  const dispatch = useAppDispatch();

  const logoutFromAccount = async () => {
    dispatch(logout());
  };

  const onSubmit = async (values: any) => {
    console.log("WHAHTATA");

    if (values.firstName == "") values.firstName = data.firstName;
    if (values.lastName == "") values.lastName = data.lastName;
    if (values.bio == "") values.bio = data.bio;
    if (values.username == "") values.username = data.username;
    if (values.countryId == "") values.countryId = "" + data.countryId;

    await updateProfileInfo(values).then((val: any) => {
      console.log("pay", val);

      if (!val.data) {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Something went wrong",
        });
      } else {
        navigation.navigate("ProfileScreen");
        Toast.show({
          type: "success",
          text1: "Success",
          text2: "Profile edited",
        });
      }
    });
  };

  const pickImage = async (values: any) => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log("RESUSS", result);
    setFileDataImage(result);
  };

  const onSubmitAvatar = async (values: any) => {
    const formData = new FormData();
    console.log("file", fileDataImage);

    if (fileDataImage.length === 0) {
      Toast.show({
        type: "error",
        text1: "Warning",
        text2: "You didn't upload any picture",
      });
    } else {
      formData.append("profileImage", fileDataImage);
      console.log("FILEDATA", fileDataImage);
      await updateProfileImage(formData).then((val: any) => {
        console.log("pay", val);
        navigation.navigate("ProfileScreen");
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
            text2: "Profile avatar updated",
          });
      });

      setFileDataImage(null);
    }
  };

  return (
    <SafeAreaView style={tw`flex flex-1 flex-col bg-white`}>
      <Toast position="top" />
      <ScrollView style={tw`w-full`}>
        <TouchableOpacity
          style={tw`mt-8 ml-10 flex-row`}
          onPress={() => navigation.navigate("ProfileScreen")}
        >
          <AntDesign
            name="arrowleft"
            size={25}
            color="black"
            style={tw`mr-5 self-center`}
          />
          <Text style={tw`font-bold text-2xl`}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={pickImage} style={tw`items-center mt-4`}>
          <Image
            source={require("../assets/images/camera_placeholder.jpg")}
            style={tw`w-30 h-30 rounded-full`}
          />
          {fileDataImage ? <Text>{fileDataImage.name}</Text> : null}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onSubmitAvatar}
          style={tw`h-12 items-center justify-center self-center px-4 py-2 bg-white border-2 border-[#5C25F9] rounded-6`}
        >
          <Text style={tw`font-medium text-base text-[#5C25F9]`}>
            Change Profile photo
          </Text>
        </TouchableOpacity>
        <View style={tw`px-5`}>
          <View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomTextInput
                  placeholderValue={
                    data && data.username ? data.username : "unknown"
                  }
                  inputValue={value}
                  onBlur={onBlur}
                  func={onChange}
                />
              )}
              name="username"
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomTextInput
                  placeholderValue={
                    data && data.firstName ? data.firstName : "John"
                  }
                  inputValue={value}
                  onBlur={onBlur}
                  func={onChange}
                />
              )}
              name="firstName"
            />

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomTextInput
                  placeholderValue={
                    data && data.lastName ? data.lastName : "Doe"
                  }
                  inputValue={value}
                  onBlur={onBlur}
                  func={onChange}
                />
              )}
              name="lastName"
            />

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomTextInput
                  placeholderValue={data && data.bio ? data.bio : "unknown"}
                  inputValue={value}
                  onBlur={onBlur}
                  func={onChange}
                />
              )}
              name="bio"
            />
            <TouchableOpacity
              style={tw`h-12 w-100% justify-center bg-[#5C25F9] items-center px-4 mt-4 border-[#5C25F9] rounded-6`}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={[tw`text-white text-lg font-bold`, shadow]}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={tw`flex-col mx-8`}>
          <View style={tw`flex-row mt-5`}>
            <Feather name="info" size={24} color="#737373" />
            <Text
              style={tw`font-medium text-base text-[#737373] ml-3`}
              onPress={() => navigation.navigate("InfoScreen")}
            >
              Info
            </Text>
          </View>
          <View style={tw`flex-row mt-2`}>
            <AntDesign name="logout" size={24} color="#5C25F9" />
            <Text
              style={tw`font-medium text-base text-[#5C25F9] ml-3`}
              onPress={() => logoutFromAccount()}
            >
              Log out
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
});

export default EditProfileScreen;
