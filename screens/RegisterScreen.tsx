import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { AuthStackParamList } from "../types";
import tw from "twrnc";
import { useAppDispatch } from "../redux/hooks";
import { register } from "../redux/slices/auth";
import CustomTextInput from "../components/Forms/CustomTextInput";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Picker } from "@react-native-picker/picker";
import * as Yup from "yup";
import { useGetAllCountryQuery } from "../redux/services/authorized.service";
import Toast from "react-native-toast-message";

type IRegisterScreen = NativeStackScreenProps<
  AuthStackParamList,
  "RegisterScreen"
>;

const SignUpSchema = Yup.object().shape({
  username: Yup.string().required("Required field"),
  email: Yup.string().required("Required field"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Password must contain at least 8 symbols, one uppercase, one lowercase, one digit and one special symbol"
    )
    .required("Required field"),
});

const RegisterScreen: FC<IRegisterScreen> = ({ navigation }) => {
  const { shadow, logo } = styles;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const dispatch = useAppDispatch();
  const { data } = useGetAllCountryQuery(null);
  const [selectedValue, setSelectedValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
    defaultValues: {
      username: "",
      email: "",
      countryId: "",
      isArtist: "",
      password: "",
    },
  });

  const onSubmit = async (values: any) => {
    values.isArtist = isEnabled ? 1 : 0;
    values.countryId = selectedValue;

    try {
      await dispatch(register(values)).then((val) => {
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
        style={tw`flex-col  pt-10%  pb-3 h-100% bg-[#fff] items-center justify-center`}
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

        <View style={tw`flex-1 w-85% mt-20`}>
          <View>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={tw`flex flex-row ml-2 items-center`}>
                  <Switch
                    style={tw`w-8 h-8 rounded`}
                    trackColor={{ false: "#767577", true: "#5C25F9" }}
                    thumbColor={isEnabled ? "black" : "#f4f3f4"}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  ></Switch>
                  <Text style={tw`ml-4 font-semibold text-lg text-[#5C25F9] `}>
                    Register as Artist
                  </Text>
                </View>
              )}
              name="isArtist"
            />
            <View>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <CustomTextInput
                    placeholderValue="Enter username"
                    inputValue={value}
                    onBlur={onBlur}
                    func={onChange}
                  />
                )}
                name="username"
              />
              {errors.username ? <Text>{errors.username?.message}</Text> : null}
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <CustomTextInput
                    placeholderValue="Enter email"
                    inputValue={value}
                    onBlur={onBlur}
                    func={onChange}
                  />
                )}
                name="email"
              />
              {errors.email ? <Text>{errors.email?.message}</Text> : null}

              <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedValue(itemValue)
                }
                mode="dialog"
                itemStyle={{ height: 100, width: "100%" }}
              >
                {data &&
                  data.map((value: any) => {
                    return (
                      <Picker.Item
                        key={value.id}
                        label={value.country_name}
                        value={value.id}
                      />
                    );
                  })}
              </Picker>

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <CustomTextInput
                    placeholderValue="Enter password"
                    inputValue={value}
                    onBlur={onBlur}
                    func={onChange}
                    secure={true}
                  />
                )}
                name="password"
              />
              {errors.password ? <Text>{errors.password?.message}</Text> : null}
              <TouchableOpacity
                style={tw`h-16 w-100% justify-center bg-[#5C25F9] items-center px-4 mt-4 border-[#5C25F9] rounded-6`}
                onPress={handleSubmit(onSubmit)}
              >
                <Text style={[tw`text-white text-lg font-bold`, shadow]}>
                  Create Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={tw`flex-1 w-85% mt-100`}>
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
