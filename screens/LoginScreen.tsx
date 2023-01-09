import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC, useState } from "react";
import Button from "../components/Forms/Button";
import { AuthStackParamList } from "../types";
import tw from "twrnc";
import Web3Auth, {
  LOGIN_PROVIDER,
  OPENLOGIN_NETWORK,
  State,
} from "@web3auth/react-native-sdk";
import Constants, { AppOwnership } from "expo-constants";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import { Buffer } from "buffer";

type ILoginScreen = NativeStackScreenProps<AuthStackParamList, "LoginScreen">;

global.Buffer = global.Buffer || Buffer;

const scheme = "home"; // Or your desired app redirection scheme

const resolvedRedirectUrl =
  Constants.appOwnership == AppOwnership.Expo ||
  Constants.appOwnership == AppOwnership.Guest
    ? Linking.createURL("modal", {})
    : Linking.createURL("modal", { scheme: scheme });

const LoginScreen: FC<ILoginScreen> = ({ navigation }) => {
  const [key, setKey] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const login = async () => {
    try {
      const web3auth = new Web3Auth(WebBrowser, {
        clientId:
          "BIdR1EgVXYMX1fl7mze1aJUUM94XAypxDbS57LgpNwXb2hBqVQrS85m6wlADtTx_4tyQZxTbTowqLN7ZojAx_UM",
        network: OPENLOGIN_NETWORK.TESTNET, // or other networks
      });
      const state = await web3auth
        .login({
          loginProvider: LOGIN_PROVIDER.GOOGLE,
          redirectUrl: resolvedRedirectUrl,
        })
        .then((res: State) => {
          console.log(res);

          navigation.navigate("HomeScreen", res);
        });
    } catch (e) {
      console.error(e);
      setErrorMsg(String(e));
    }
  };
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={styles.container}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <View
            style={{ flex: 1, flexDirection: "column", alignSelf: "center" }}
          >
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logo}
            />
            <Text style={styles.heading}>Sign In</Text>
          </View>
        </View>

        <View style={{ flex: 1, width: "85%", marginTop: "-10%", marginBottom: "-10%" }}>
          <View style={styles.input}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Email"
              placeholderTextColor="#5C25F9"
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="#5C25F9"
            />
          </View>
          <Text
            onPress={() => navigation.navigate("RegisterScreen")}
            style={{
              fontWeight: "bold",
              color: "#ACACAC",
              margin: 12,
              fontSize: 15,
            }}
          >
            Forgot Password?
          </Text>
        </View>

        <View
          style={tw`flex flex-col items-center justify-between w-full pb-10 px-8`}
        >
          <TouchableOpacity style={styles.button} onPress={login}>
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
                textShadowColor: "rgba(0, 0, 0, 0.25)",
                textShadowOffset: { width: 0, height: 4 },
                textShadowRadius: 4,
              }}
            >
              Sign in with Web3Auth
            </Text>
          </TouchableOpacity>
          <Text>Error: {errorMsg}</Text>
        </View>

        <View style={{ flex: 1, width: "85%", marginTop: -30 }}>
          <TouchableOpacity
            style={styles.button}
            // onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
                textShadowColor: "rgba(0, 0, 0, 0.25)",
                textShadowOffset: { width: 0, height: 4 },
                textShadowRadius: 4,
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              alignSelf: "center",
              color: "#1C1B1B",
              paddingVertical: 25,
              fontSize: 12,
            }}
          >
            Or
          </Text>

          <View
            style={{
              flexDirection: "row",
              width: "80%",
              alignSelf: "center",
              padding: 20,
            }}
          >
            <View style={{ flex: 1, alignItems: "center" }}>
              <TouchableOpacity
              // onPress={() => navigation.navigate("HomeScreen")}
              >
                <Image
                  source={require("../assets/images/google-icon.png")}
                  style={{ height: 27, width: 27 }}
                />
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1, alignItems: "center" }}>
              <TouchableOpacity
              // onPress={() => navigation.navigate("HomeScreen")}
              >
                <Image
                  source={require("../assets/images/apple-icon.png")}
                  style={{ height: 27, width: 22 }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text
            style={{
              color: "#ACACAC",
              fontWeight: "bold",
              fontSize: 16,
              marginTop: "7%",
              alignSelf: "center",
            }}
          >
            Do not have an Account ?
          </Text>
          <Text
            style={{
              color: "#5C25F9",
              fontWeight: "bold",
              fontSize: 16,
              alignSelf: "center",
            }}
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
  container: {
    flex: 1,
    paddingTop: "10%",
    paddingBottom: 10,
    paddingVertical: 40,
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    flex: 1,
    width: "60%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
    alignSelf: "center",
  },
  heading: {
    flex: 1,
    fontSize: 30,
    color: "#586AF6",
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: "10%",
  },
  input: {
    height: 60,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 2,
    opacity: 0.4,
    marginTop: 20,
    paddingHorizontal: 20,
    borderColor: "#5C25F9",
    borderRadius: 20,
    paddingTop: 5,
  },
  textInput: {
    padding: 13,
    width: "100%",
    color: "#5C25F9",
    fontWeight: "bold",
    fontSize: 15,
  },
  button: {
    height: 60,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#5C25F9",
    alignItems: "center",
    paddingHorizontal: 20,
    borderColor: "#5C25F9",
    borderRadius: 20,
  },
});

export default LoginScreen;
