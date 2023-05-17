import { View, TextInput } from "react-native";
import React, { FC } from "react";
import tw from "twrnc";

const CustomTextInput = (props: any) => {
  const { placeholderValue, inputValue, func, secure, onBlur } = props;
  return (
    <View
      style={tw`h-16 w-100% flex-col items-center pt-2 rounded-6 border-[#5C25F9] border-2 opacity-40 mt-4 px-4 `}
    >
      <TextInput
        style={tw`p-3 w-100% text-[#5C25F9] font-bold text-base`}
        placeholder={placeholderValue}
        secureTextEntry={secure}
        placeholderTextColor="#5C25F9"
        value={inputValue}
        onChangeText={func}
        onBlur={onBlur}
      />
    </View>
  );
};

export default CustomTextInput;
