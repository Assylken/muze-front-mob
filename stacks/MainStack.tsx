import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditProfileScreen from "../screens/EditProfileScreen";
import InfoScreen from "../screens/InfoScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { MainStackParamList } from "../types";

const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
