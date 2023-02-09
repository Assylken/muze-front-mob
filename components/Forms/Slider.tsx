import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomNavigationStack } from "../types";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Forms/Button";

const Slider: FC<ISlider> = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex flex-1 bg-white p-5`}>
      <Text>Slider</Text>
    </SafeAreaView>
  );
};

export default Slider;
