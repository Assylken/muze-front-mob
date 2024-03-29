import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC, useState } from "react";
import { AuthStackParamList } from "../types";
import tw from "twrnc";
import { useAppDispatch } from "../redux/hooks";
import { login } from "../redux/slices/auth";
import Toast from "react-native-toast-message";
import CustomTextInput from "../components/Forms/CustomTextInput";

type ILoginScreen = NativeStackScreenProps<AuthStackParamList, "LoginScreen">;

const LoginScreen: FC<ILoginScreen> = ({ navigation }) => {
  const { shadow, logo } = styles;
  const [errorMsg, setErrorMsg] = useState("");
  const [usernameOrEmailLower, setUsernameOrEmailLower] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const handleLogin = async () => {
    const usernameOrEmail = usernameOrEmailLower.toLowerCase();
    const payload = {
      usernameOrEmail,
      password,
    };

    try {
      await dispatch(login(payload)).then((val) => {
        if (val.payload === undefined) {
          Toast.show({
            type: "error",
            text1: "Error",
            text2: "Incorrect credentials",
          });
        } else
          Toast.show({
            type: "success",
            text1: "Success",
            text2: "Welcome",
          });
      });
    } catch (e) {
      setErrorMsg("Incorrect credentials");
      console.log("EEEE", e);
    }
  };
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <Toast position="top" />
      <View
        style={tw`flex-1 pb-3 py-8 h-100% bg-[#fff] items-center justify-center`}
      >
        <View style={tw`flex-1 items-center`}>
          <View style={tw`flex-1 self-center flex-col`}>
            <Image source={require("../assets/images/logo.png")} style={logo} />
            <Text
              style={tw`flex-1 text-3xl font-bold self-center pt-12 text-[#586AF6]`}
            >
              Sign In
            </Text>
          </View>
        </View>
        {errorMsg && <Text>{errorMsg}</Text>}
        <View style={tw`flex-1 w-85% -mt-4`}>
          <CustomTextInput
            placeholderValue="Enter Email"
            inputValue={usernameOrEmailLower}
            func={(e: any) => setUsernameOrEmailLower(e)}
          />
          <CustomTextInput
            placeholderValue="Password"
            inputValue={password}
            secure={true}
            func={(e: any) => setPassword(e)}
          />
        </View>

        <View style={tw`flex-1 w-85% -mt-36`}>
          <TouchableOpacity
            style={tw`h-16 w-100% justify-center bg-[#5C25F9] items-center px-4 border-[#5C25F9] rounded-6`}
            onPress={handleLogin}
          >
            <Text style={[tw`text-white text-lg font-bold`, shadow]}>
              Sign In
            </Text>
          </TouchableOpacity>

          <Text
            style={tw`text-[#ACACAC] pt-8 font-bold text-base mt-3 self-center`}
          >
            Do not have an Account ?
          </Text>
          <Text
            style={tw`text-[#5C25F9] font-bold text-lg self-center`}
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            Register now
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  shadow: {
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  logo: {
    flex: 1,
    width: "90%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default LoginScreen;
