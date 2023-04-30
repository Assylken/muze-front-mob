import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
const LibraryOptions = (props) => {
  const { optionText } = props;
  return (
    <TouchableOpacity style={tw`flex-row mt-2`}>
      <View style={tw`flex-col w-full`}>
        <View style={tw`flex-row`}>
          <View style={tw`flex-col w-80% pl-5 pb-2`}>
            <Text style={tw`text-lg font-semibold`}>{optionText}</Text>
          </View>
          <View style={tw`w-10%`}>
            <AntDesign
              name="arrowright"
              size={20}
              color="black"
              style={tw`flex-row-reverse self-center`}
            />
          </View>
        </View>
        <View style={tw`bg-[#D3D3D3] h-0.2 w-90% ml-3`}></View>
      </View>
    </TouchableOpacity>
  );
};

export default LibraryOptions;
