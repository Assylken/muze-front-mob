import {
  AuthStackParamList,
  MainStackParamList,
  InfoNavigationStack,
} from "../types";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import * as React from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import InfoScreen from "./InfoScreen";
import { DarkModeSwitch } from "react-toggle-dark-mode";

type ISettingsScreen = NativeStackScreenProps<
  MainStackParamList,
  "SettingsScreen"
>;

const SettingsScreen: FC<ISettingsScreen> = ({ navigation }) => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  return (
    <SafeAreaView style={tw`flex flex-1 bg-white`}>
      <TouchableOpacity
        style={tw`mt-8 ml-10 flex-row`}
        onPress={() => navigation.navigate("ProfileScreen")}
      >
        <AntDesign
          name="arrowleft"
          size={25}
          color="black"
          style={tw`mr-5 self-center`}
        />
        <Text style={tw`font-bold text-2xl`}>Settings</Text>
      </TouchableOpacity>

      <ScrollView style={tw`w-full`}>
        <Text style={tw`uppercase p-8 pb-2 font-medium text-[#959595]`}>
          display
        </Text>
        <TouchableOpacity
          style={tw`self-center flex-row border-2 border-[#EEEEEE] rounded-2xl bg-white w-85% h-17 p-5`}
        >
          <Text style={tw`font-bold text-4`}>Color theme</Text>
          <View style={tw`absolute right-0 mr-6`}>
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              sunColor={"#5C25F9"}
              moonColor={"#959595"}
              size={28}
            />
          </View>
        </TouchableOpacity>

        <Text style={tw`uppercase p-8 pb-2 font-medium text-[#959595]`}>
          advanced
        </Text>
        <TouchableOpacity
          style={tw`self-center flex-column border-2 border-[#EEEEEE] rounded-2xl bg-white w-85% h-17 p-5`}
        >
          <Text style={tw`font-bold text-4`}>Change password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`self-center flex-column border-2 border-[#EEEEEE] rounded-2xl bg-white w-85% h-17 p-5 mt-3`}
        >
          <Text style={tw`font-bold text-4 text-[#FB0808]`}>
            Delete account
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;
