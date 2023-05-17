import { Platform } from "react-native";

export const API_URL =
  Platform.OS === "android"
    ? "http://192.168.1.120:3333"
    : "https://muze-backend.onrender.com";
//"http://46.36.156.203:3333";
