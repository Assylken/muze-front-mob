import {
  AuthStackParamList,
  BottomNavigationStack,
  MainStackParamList,
} from "../types";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { FC } from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Forms/Button";
import {
  AntDesign,
  Ionicons,
  SimpleLineIcons,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import InfoStack from "../stacks/InfoStack";

type IEditProfileScreen = NativeStackScreenProps<
  MainStackParamList,
  "EditProfileScreen"
>;

const EditProfileScreen: FC<IEditProfileScreen> = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex flex-1 flex-col bg-white`}>
      <ScrollView style={tw` w-full`}>
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
        <View style={tw`items-center mt-8`}>
          <Image
            style={tw`w-30 h-30 rounded-full`}
            source={
              require("../assets/images/profile.jpg")
              //source={{ uri: params.userInfo.profileImage }}
            }
          />
          <View style={tw`flex-row mt-2`}>
            <AntDesign name="edit" size={24} color="black" />
            <Text
              style={tw`font-medium text-base ml-3`}
              // onPress={() => navigation.navigate()}
            >
              Change Profile photo
            </Text>
          </View>
        </View>
        <View style={tw`px-8 mt-3`}>
          <View style={styles.input}>
            <TextInput
              style={styles.textInput}
              placeholder="Anel Amanbekova"
              placeholderTextColor="#737373"
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.textInput}
              placeholder="8 (707) 818 00 00"
              placeholderTextColor="#737373"
            />
          </View>
          <Button
            containerStyle="flex mr-2 mt-3 w-[100%]"
            style="bg-[#fff] border-2 border-[#5C25F9] mb-3"
            textStyle="text-[#5C25F9] font-bold text-lg"
            onPress={() => navigation.navigate("EditProfileScreen")}
          >
            Save
          </Button>
        </View>
        <View style={tw`flex-col mx-8`}>
          <View style={tw`flex-row mt-2`}>
            <Feather name="info" size={24} color="#737373" />
            <Text
              style={tw`font-medium text-base text-[#737373] ml-3`}
              onPress={() => navigation.navigate("InfoScreen")}
            >
              Info
            </Text>
          </View>
          <View style={tw`flex-row mt-2`}>
            <Ionicons name="settings-outline" size={24} color="#737373" />
            <Text
              style={tw`font-medium text-base text-[#737373] ml-3`}
              onPress={() => navigation.navigate("SettingsScreen")}
            >
              Settings
            </Text>
          </View>
          <View style={tw`flex-row mt-2`}>
            <AntDesign name="logout" size={24} color="#5C25F9" />
            <Text
              style={tw`font-medium text-base text-[#5C25F9] ml-3`}
              // onPress={() => navigation.navigate()}
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
  input: {
    height: 60,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 2,
    marginTop: 12,
    paddingHorizontal: 20,
    borderColor: "#D6D6D6",
    borderRadius: 20,
    paddingTop: 5,
  },
  textInput: {
    padding: 13,
    width: "100%",
    color: "#5C25F9",
    fontWeight: "medium",
    fontSize: 15,
  },
});

export default EditProfileScreen;
