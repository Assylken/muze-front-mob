import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { Text, View, Image } from "react-native";
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
  return (
    <SafeAreaView
      style={tw`flex flex-col flex-1 items-center justify-start px-4 relative bg-white`}
    >
      <Image
        style={tw`w-64 h-64`}
        source={require("../assets/images/logo.png")}
      />
      <View style={tw`flex flex-row justify-between pb-20`}>
        <Text style={tw`font-bold text-[#5C25F9] text-3xl`}>Upload</Text>
        <AntDesign
          style={tw`text-3xl font-bold mt-1`}
          name="right"
          size={24}
          color="black"
        />
        <Text style={tw`font-bold text-[#56A9F4] text-3xl`}>Share</Text>
        <AntDesign
          style={tw`text-3xl font-bold mt-1`}
          name="right"
          size={24}
          color="black"
        />
        <Text style={tw`font-bold text-[#5FF1F1] text-3xl`}>Enjoy</Text>
      </View>
      <View style={tw`flex flex-row justify-between w-full`}>
        <Button
          containerStyle="flex-1 mr-2"
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

export default WelcomeScreen;
