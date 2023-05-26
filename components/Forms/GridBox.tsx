import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { SimpleLineIcons } from "@expo/vector-icons";
const GridBox = (props: any) => {
  const { iconName, iconColor, value, unit, func } = props;
  return (
    <TouchableOpacity
      style={tw`flex-1 flex-row h-90% items-center m-2 rounded-5 bg-[#F9F9F9]`}
      onPress={func}
    >
      <View>
        <SimpleLineIcons
          style={tw`text-3xl font-bold px-3`}
          name={iconName}
          size={24}
          color={iconColor}
        />
      </View>
      <View>
        <Text style={tw`font-bold text-lg`}>{value}</Text>
        <Text style={tw`font-medium text-[#9098A3]`}>{unit}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GridBox;
