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
      <ScrollView style={tw`w-full`}>
        <CollapsableBody
          title={"What is Muze?"}
          mainText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris id mollis sollicitudin. Pellentesque sed iaculis mauris. Etiam viverra."
          }
        />
        <CollapsableBody
          title={"Lorem ipsum dolor?"}
          mainText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris id mollis sollicitudin. Pellentesque sed iaculis mauris. Etiam viverra."
          }
        />
        <CollapsableBody
          title={"What is Muze?"}
          mainText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris id mollis sollicitudin. Pellentesque sed iaculis mauris. Etiam viverra."
          }
        />
        <CollapsableBody
          title={"Lorem ipsum dolor?"}
          mainText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris id mollis sollicitudin. Pellentesque sed iaculis mauris. Etiam viverra."
          }
        />
        <CollapsableBody
          title={"What is Muze?"}
          mainText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris id mollis sollicitudin. Pellentesque sed iaculis mauris. Etiam viverra."
          }
        />
        <CollapsableBody
          title={"Lorem ipsum dolor?"}
          mainText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris id mollis sollicitudin. Pellentesque sed iaculis mauris. Etiam viverra."
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoScreen;
