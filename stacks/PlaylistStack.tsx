import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PlaylistNavigationStackList } from "../types";
import LibraryScreen from "../screens/LibraryScreen";
import PlaylistLayout from "../screens/PlaylistLayout";

const Stack = createNativeStackNavigator<PlaylistNavigationStackList>();

export default function MainStack() {
  return (
    <Stack.Navigator initialRouteName="LibraryScreen">
      <Stack.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PlaylistLayout"
        component={PlaylistLayout}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
