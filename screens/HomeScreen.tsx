import { Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomNavigationStack, MainStackParamList } from "../types";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Forms/Button";

type IHomeScreen = NativeStackScreenProps<BottomNavigationStack, "HomeScreen">;

const HomeScreen: FC<IHomeScreen> = ({ navigation }) => {
  return (
    <SafeAreaView
      style={tw`flex flex-1 items-center justify-center px-4 bg-white`}
    >
      <View>
        <Text>This is Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
