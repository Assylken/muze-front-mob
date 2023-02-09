import {
  AuthStackParamList,
  MainStackParamList,
  InfoNavigationStack,
} from "../types";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as React from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Forms/Button";
import {
  AntDesign,
  Ionicons,
  SimpleLineIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import InfoScreen from "./InfoScreen";

type IContactUsScreen = NativeStackScreenProps<
  InfoNavigationStack,
  "ContactUsScreen"
>;

const ContactUsScreen: FC<IContactUsScreen> = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex flex-1 bg-white items-center`}>
      <ScrollView style={tw`w-full`}>
        <TouchableOpacity
          style={tw`self-center border-2 border-[#EEEEEE] rounded-2xl bg-white w-95% h-17 p-5 mt-6`}
        >
          <Text style={tw`font-bold text-4`}>Website</Text>
          <MaterialCommunityIcons
            name="web"
            size={24}
            color="#5C25F9"
            style={tw`absolute right-0 mr-6`}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`self-center border-2 border-[#EEEEEE] rounded-2xl bg-white w-95% h-17 p-5 mt-6`}
        >
          <Text style={tw`font-bold text-4`}>Instagram</Text>
          <FontAwesome
            name="instagram"
            size={24}
            color="#5C25F9"
            style={tw`absolute right-0 mr-6`}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});

export default ContactUsScreen;
