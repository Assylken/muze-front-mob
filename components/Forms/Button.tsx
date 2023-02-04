import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React, { FC, ReactNode } from "react";
import tw from "twrnc";

type IBUttonProps = {
  containerStyle?: string;
  textStyle?: string;
  style?: string;
  children: ReactNode;
} & Omit<TouchableOpacityProps, "style" | "children">;

const Button: FC<IBUttonProps> = ({
  children,
  containerStyle,
  textStyle,
  style,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={tw`${containerStyle ?? ""}`}
    >
      <View
        style={tw`flex justify-center items-center bg-purple-700 rounded-2xl py-4 w-full ${
          style ?? ""
        }`}
      >
        <Text style={tw`${textStyle ?? ""}`}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
