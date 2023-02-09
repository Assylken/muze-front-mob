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

type IRegisterScreen = NativeStackScreenProps<
  AuthStackParamList,
  "RegisterScreen"
>;

const RegisterScreen: FC<IRegisterScreen> = ({ navigation }) => {
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
      <View style={styles.container}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <View
            style={{ flex: 1, flexDirection: "column", alignSelf: "center" }}
          >
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logo}
            />
            <Text style={styles.heading}>Register</Text>
          </View>
        </View>

        <View style={{ flex: 1, width: "85%", marginTop: "-10%" }}>
          <View style={styles.input}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter username"
              placeholderTextColor="#5C25F9"
              value={username}
              onChangeText={(e) => setUsername(e)}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Email"
              placeholderTextColor="#5C25F9"
              value={email}
              onChangeText={(e) => setEmail(e)}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="#5C25F9"
              value={password}
              onChangeText={(e) => setPassword(e)}
            />
          </View>
        </View>

        <View style={{ flex: 1, width: "85%", marginTop: -30 }}>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
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
              Create Account
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              alignSelf: "center",
              color: "#1C1B1B",
              paddingVertical: 30,
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
              <TouchableOpacity>
                <Image
                  source={require("../assets/images/google-icon.png")}
                  style={{ height: 27, width: 27 }}
                />
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1, alignItems: "center" }}>
              <TouchableOpacity>
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
            Do you have an Account ?
          </Text>
          <Text
            style={{
              color: "#5C25F9",
              fontWeight: "bold",
              fontSize: 16,
              alignSelf: "center",
            }}
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
    marginTop: 15,
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

export default RegisterScreen;
