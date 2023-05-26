import { View, Text, TextInput } from "react-native";
import React, { FC } from "react";
import tw from "twrnc";
import { FontAwesome } from "@expo/vector-icons";
import CustomTextInput from "./CustomTextInput";

const SearchBar = (props: any) => {
  const { placeholderText } = props;
  return (
    <>
      <View
        style={tw`flex-row w-90% bg-[#f3f3f3] h-14 items-center p-2 rounded-6 border-[#5C25F9] border-2 opacity-40`}
      >
        <FontAwesome
          name="search"
          size={20}
          color="#5C25F9"
          style={tw`mr-2 ml-2`}
        />
        <TextInput
          style={tw`p-3 w-100% text-[#5C25F9] font-bold text-base`}
          placeholder={placeholderText}
          placeholderTextColor="#5C25F9"
        />
      </View>
    </>
  );
};

export default SearchBar;
