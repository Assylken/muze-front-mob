import { Text, View } from "react-native";
import React, { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomNavigationStack } from "../types";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";

type IHomeScreen = NativeStackScreenProps<BottomNavigationStack, "HomeScreen">;

const HomeScreen: FC<IHomeScreen> = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex flex-1 bg-white`}>
      <Text>Hello</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
