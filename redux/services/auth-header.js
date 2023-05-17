import AsyncStorage from "@react-native-async-storage/async-storage";

export function authHeader(user) {
  console.log("WHAT", user);
  if (user && user.access_token) {
    return {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: "Bearer " + user?.access_token,
    };
  } else {
  }
}
