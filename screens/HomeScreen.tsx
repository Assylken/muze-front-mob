import { Text, View, ScrollView } from "react-native";
import React, { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomNavigationStack } from "../types";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Forms/Button";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";
import {
  AntDesign,
  Ionicons,
  SimpleLineIcons,
  FontAwesome,
} from "@expo/vector-icons";

type IHomeScreen = NativeStackScreenProps<BottomNavigationStack, "HomeScreen">;

const HomeScreen: FC<IHomeScreen> = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex flex-1 bg-white p-5 items-center`}>
      <ScrollView style={tw` w-full`}>
        <Text>HomeScreen</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
