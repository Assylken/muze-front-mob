import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ILogin, IRegister } from "../../types";
import { API_URL } from "../http";

// Register user
const register = async (userData: IRegister) => {
  const response = await axios.post(API_URL + "/auth/signup", userData, {
    withCredentials: true,
  });

  if (response.data) {
    AsyncStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData: ILogin) => {
  console.log(API_URL);
  console.log("ASDF", userData);
  const response = await axios.post(API_URL + "/auth/signin", userData, {
    withCredentials: true,
  });

  if (response.data) {
    AsyncStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = async () => {
  await AsyncStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
