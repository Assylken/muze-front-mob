import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import SearchBar from "../components/Forms/SearchBar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomNavigationStack } from "../types";

type ISearchScreen = NativeStackScreenProps<
  BottomNavigationStack,
  "SearchScreen"
>;

const SearchScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <TouchableOpacity
        style={tw`mt-8 ml-10 flex-row`}
        //   onPress={() => navigation.navigate("ProfileScreen")}
      >
        <AntDesign
          name="arrowleft"
          size={25}
          color="black"
          style={tw`mr-5 self-center`}
        />
        <Text style={tw`font-bold text-2xl pb-2`}>Search</Text>
      </TouchableOpacity>
      <View style={tw`flex flex-1 items-center px-4 py-3`}>
        <SearchBar placeholderText="Search..." />
        <View style={tw`items-center`}>
          <Text style={tw`mt-8`}>Type to search for songs, artists...</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
