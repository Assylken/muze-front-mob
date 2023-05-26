import { Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ContactUsBody = (props: any) => {
  const { title, iconName } = props;
  return (
    <TouchableOpacity
      style={tw`self-center border-2 border-[#EEEEEE] rounded-2xl bg-white w-95% h-17 p-5 mt-6`}
    >
      <Text style={tw`font-bold text-4`}>{title}</Text>
      <MaterialCommunityIcons
        name={iconName}
        size={24}
        color="#5C25F9"
        style={tw`absolute right-0 mr-6`}
      />
    </TouchableOpacity>
  );
};

export default ContactUsBody;
