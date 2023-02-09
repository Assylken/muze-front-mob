import { Platform } from "react-native";

export const API_URL =
  Platform.OS === "android" ? "http://10.0.2.2:3333" : "http://localhost:3333";
 //"http://46.36.156.203:3333";
