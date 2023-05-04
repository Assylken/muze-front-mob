import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InfoScreen from "../screens/InfoScreen";
import { MainStackParamList } from "../types";
import TopNavigationStack from "./TopNavigationStack";

const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={TopNavigationStack}
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
