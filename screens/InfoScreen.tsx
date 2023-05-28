import { InfoNavigationStack } from "../types";
import { ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import CollapsableBody from "../components/Forms/CollapsableBody";

type IInfoScreen = NativeStackScreenProps<InfoNavigationStack, "InfoScreen">;

const InfoScreen: FC<IInfoScreen> = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex flex-1 bg-white items-center`}>
      <ScrollView style={tw`w-full -mt-2`}>
        <CollapsableBody
          title={"What is Muze?"}
          mainText={
            "Muze is a smart contract-based decentralized music streaming network"
          }
        />
        <CollapsableBody
          title={"What's so special about Muze?"}
          mainText={
            "The platform provides a more equitable structure for both artists and users by resolving the issues with intermediaries and centralized platforms in the music business"
          }
        />
        <CollapsableBody
          title={"Is there a website?"}
          mainText={
            "Of course, this is the link to the web app - https://muze-seven.vercel.app/"
          }
        />
        <CollapsableBody
          title={"Can I upload my music here?"}
          mainText={
            "Yes, Muze is the community that allows you to upload and share your creativity with the world. Functionality of uploading music is available on the web app."
          }
        />
        <CollapsableBody
          title={"Who are the creators of Muze?"}
          mainText={
            "Creators are students from Astana IT University, Kazakhstan,  whos names are Assylken Tukenov and Anel Amanbekova."
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoScreen;
