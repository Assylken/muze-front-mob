import { View, Text, Image } from "react-native";
import React, { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../types";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";

type IHomeScreen = NativeStackScreenProps<AuthStackParamList, "HomeScreen">;

const HomeScreen: FC<IHomeScreen> = ({ route }) => {
  const params = route.params;

  return (
    <SafeAreaView style={tw`flex-1`}>
      <Image
        style={tw`w-64 h-64 rounded-full`}
        source={{ uri: params.userInfo.profileImage }}
      />
      <Text>{JSON.stringify(params, null, 2)}</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
