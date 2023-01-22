import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ILogin, IRegister } from "../../types";
import { API_URL } from "../http";

// Register user
const register = async (userData: IRegister) => {
  const response = await axios.post(API_URL + "/auth/signup", userData);

  console.log(response);

  if (response.data) {
    await AsyncStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData: ILogin) => {
  console.log(API_URL);
  console.log(userData);
  const response = await axios.post(API_URL + "/auth/signin", userData);

  if (response.data) {
    await AsyncStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// const updateAccessToken = async (accessToken) => {
//   const jsonValue = await AsyncStorage.getItem("user");
//   const user = jsonValue != null ? JSON.parse(jsonValue) : null;
//   user.access = accessToken;
//   await AsyncStorage.setItem("user", JSON.stringify(user));
//   return user;
// };

// Logout user
const logout = async () => {
  await AsyncStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
  // updateAccessToken,
};

export default authService;
