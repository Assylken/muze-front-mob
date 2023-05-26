import { InfoNavigationStack } from "../types";
import { ScrollView } from "react-native";
import * as React from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import ContactUsBody from "../components/Forms/ContactUsBody";

type IContactUsScreen = NativeStackScreenProps<
  InfoNavigationStack,
  "ContactUsScreen"
>;

const ContactUsScreen: FC<IContactUsScreen> = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex flex-1 bg-white items-center`}>
      <ScrollView style={tw`w-full`}>
        <ContactUsBody title={"Website"} iconName={"web"} />
        <ContactUsBody title={"Instagram"} iconName={"instagram"} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactUsScreen;
