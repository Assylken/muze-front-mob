import { State } from "@web3auth/react-native-sdk";

export type AuthStackParamList = {
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  HomeScreen?: State;
  ProfilePage: undefined;
};
