import { View, TextInput } from "react-native";
import React from "react";
import tw from "twrnc";

const CustomTextInput = (props: any) => {
  const {
    placeholderValue,
    inputValue,
    func,
    secure,
    onBlur,
    multiline,
    numberOfLines,
  } = props;
  return (
    <View
      style={tw`h-12 w-100%  flex-col items-center rounded-6 border-[#5C25F9] border-2 opacity-40 mt-4 px-2`}
    >
      <TextInput
        style={tw`px-2 h-10 w-100% text-[#5C25F9] font-bold text-base`}
        placeholder={placeholderValue}
        secureTextEntry={secure}
        placeholderTextColor="#5C25F9"
        value={inputValue}
        onChangeText={func}
        onBlur={onBlur}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    </View>
  );
};

export default CustomTextInput;
