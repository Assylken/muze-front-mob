import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EditProfileScreen from "../screens/EditProfileScreen";
import tw from "twrnc";
import ProfileScreen from "../screens/ProfileScreen";
import { TopNavigationStackParamList } from "../types";

const Stack = createMaterialTopTabNavigator<TopNavigationStackParamList>();

export default function TopNavigationStack() {
  return (
    <Stack.Navigator style={tw`mt-10`} initialRouteName="ProfileScreen">
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </Stack.Navigator>
  );
}
