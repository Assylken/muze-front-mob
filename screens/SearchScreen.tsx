import { View, Text, SafeAreaView, TextInput } from "react-native";
import React from "react";
import tw from "twrnc";
import { FontAwesome } from "@expo/vector-icons";

type ISearchScreen = NativeStackScreenProps<
  BottomNavigationStack,
  "SearchScreen"
>;

const SearchScreen = () => {
  return (
    <SafeAreaView style={tw`flex flex-1 items-center px-4 py-8 bg-white`}>
      <View
        style={tw`p-2 h-12 flex-row w-90% bg-[#f3f3f3] rounded-4 items-center`}
      >
        <FontAwesome
          name="search"
          size={20}
          color="black"
          style={tw`mr-2 ml-2`}
        />
        <TextInput style={tw``} placeholder="Search" />
      </View>
      <View style={tw` items-center`}>
        <Text style={tw`mt-10`}>Type to search for songs, artists...</Text>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
