import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../types";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";

type IHomeScreen = NativeStackScreenProps<
AuthStackParamList, 
"HomeScreen"
>;

const HomeScreen: FC<IHomeScreen> = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      {/* <Image
        style={tw`w-64 h-64 rounded-full`}
        source={{ uri: params.userInfo.profileImage }}
      // /> */}
       {/* <Text>{JSON.stringify(params, null, 2)}</Text> */}

        <TouchableOpacity
          onPress={() => navigation.navigate("ProfilePage")}>
          <Text>
            This is HomeScreen.
            Press to go to ProfilePage
          </Text>
        </TouchableOpacity>

    </SafeAreaView>
  );
};

export default HomeScreen;
