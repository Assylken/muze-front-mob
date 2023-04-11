import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { AuthStackParamList } from "../types";
import tw from "twrnc";
import { useAppDispatch } from "../redux/hooks";
import { register } from "../redux/slices/auth";
import CustomTextInput from "../components/Forms/CustomTextInput";

type IRegisterScreen = NativeStackScreenProps<
  AuthStackParamList,
  "RegisterScreen"
>;

const RegisterScreen: FC<IRegisterScreen> = ({ navigation }) => {
  const { shadow, logo } = styles;
  const [errorMsg, setErrorMsg] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const handleRegister = async () => {
    const payload = {
      username,
      email,
      password,
    };
    console.log(payload);

    dispatch(register(payload));
  };
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View
        style={tw`flex-1 pt-10% pb-3 py-8 h-100% bg-[#fff] items-center justify-center`}
      >
        <View style={tw`flex-1 items-center`}>
          <View style={tw`flex-1 self-center flex-col`}>
            <Image source={require("../assets/images/logo.png")} style={logo} />
            <Text
              style={tw`flex-1 text-3xl font-bold self-center pt-10% text-[#586AF6]`}
            >
              Register
            </Text>
          </View>
        </View>

        <View style={tw`flex-1 w-85% -mt-4`}>
          <CustomTextInput
            placeholderValue="Enter username"
            inputValue={username}
            func={(e) => setUsername(e)}
          />
          <CustomTextInput
            placeholderValue="Enter Email"
            inputValue={email}
            func={(e) => setEmail(e)}
          />
          <CustomTextInput
            placeholderValue="Password"
            secure={true}
            inputValue={password}
            func={(e) => setPassword(e)}
          />
        </View>

        <View style={tw`flex-1 w-85% -mt-7`}>
          <TouchableOpacity
            style={tw`h-16 w-100% justify-center bg-[#5C25F9] items-center px-4 border-[#5C25F9] rounded-6`}
            onPress={handleRegister}
          >
            <Text style={[tw`text-white text-lg font-bold`, shadow]}>
              Create Account
            </Text>
          </TouchableOpacity>

          <Text style={tw`self-center text-[#1C1B1B] py-6 text-sm`}>Or</Text>

          <View style={tw`flex-row w-80% self-center p-4`}>
            <View style={tw`flex-1 items-center`}>
              <TouchableOpacity>
                <Image
                  source={require("../assets/images/google-icon.png")}
                  style={{ height: 27, width: 27 }}
                />
              </TouchableOpacity>
            </View>

            <View style={tw`flex-1 items-center`}>
              <TouchableOpacity>
                <Image
                  source={require("../assets/images/apple-icon.png")}
                  style={{ height: 27, width: 22 }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={tw`text-[#ACACAC] font-bold text-base mt-3 self-center`}>
            Do you have an Account ?
          </Text>
          <Text
            style={tw`text-[#5C25F9] font-bold text-lg self-center`}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            Sign In
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    width: "90%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
    alignSelf: "center",
  },
  shadow: {
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
});

export default RegisterScreen;
