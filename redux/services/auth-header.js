import AsyncStorage from "@react-native-async-storage/async-storage";

export async function authHeader() {
  var token = await AsyncStorage.getItem("user");
  if (token) {
    const bearer = JSON.parse(token);
    if (bearer && bearer.access_token) {
      return {
        "Content-Type": "application/json",
        Authorization: "Bearer " + bearer?.access_token,
      };
    } else {
      console.log("OSHIBKA");
    }
  }
}
