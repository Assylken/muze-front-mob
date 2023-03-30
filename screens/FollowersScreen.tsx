import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import Button from "../components/Forms/Button";
import {
  AntDesign,
  Ionicons,
  SimpleLineIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import UserList from "../components/Forms/UserList";

const FollowersScreen = () => {
  return (
    <SafeAreaView style={tw`flex flex-1 bg-white`}>
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
        <Text style={tw`font-bold text-2xl`}>Followers</Text>
      </TouchableOpacity>
      <UserList></UserList>
    </SafeAreaView>
  );
};

export default FollowersScreen;
