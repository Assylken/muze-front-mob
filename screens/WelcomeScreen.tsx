import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { AuthStackParamList } from "../types";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Forms/Button";
import { AntDesign } from "@expo/vector-icons";

type IWelcomeScreen = NativeStackScreenProps<
  AuthStackParamList,
  "WelcomeScreen"
>;

const WelcomeScreen: FC<IWelcomeScreen> = ({ navigation }) => {
  const { shadow } = styles;
  return (
    <SafeAreaView
      style={tw`flex flex-col flex-1 items-center justify-start relative bg-white px-4`}
    >
      <Image
        style={tw`w-64 h-64`}
        source={require("../assets/images/logo.png")}
      />
      <View style={tw`flex flex-row justify-between pb-20`}>
        <Text style={[tw`font-bold text-[#5C25F9] text-3xl`, shadow]}>
          Upload
        </Text>
        <AntDesign
          style={tw`text-3xl font-bold mt-1`}
          name="right"
          size={24}
          color="black"
        />
        <Text style={[tw`font-bold text-[#56A9F4] text-3xl`, shadow]}>
          Share
        </Text>
        <AntDesign
          style={tw`text-3xl font-bold mt-1`}
          name="right"
          size={24}
          color="black"
        />
        <Text style={[tw`font-bold text-[#5FF1F1] text-3xl`, shadow]}>
          Enjoy
        </Text>
      </View>
      <View style={tw`flex flex-row justify-between w-full`}>
        <Button
          containerStyle="flex-1 mr-2 pl-2"
          textStyle="text-white font-bold"
          onPress={() => navigation.navigate("LoginScreen")}
        >
          Login
        </Button>
        <Button
          containerStyle="flex-1 ml-2"
          style="bg-[#0000]"
          textStyle="text-black font-bold"
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          Register
        </Button>
      </View>
      <View style={tw`absolute bottom-0 right-0`}>
        <Image source={require("../assets/images/nft-image.png")} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    textShadowColor: "rgba(144, 144, 144, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
});

export default WelcomeScreen;
