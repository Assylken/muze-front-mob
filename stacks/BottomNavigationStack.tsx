import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomNavigationStack } from "../types";
import ExploreScreen from "../screens/ExploreScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import NotificationScreen from "../screens/NotificationScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

const BottomNavStack = createNativeStackNavigator<BottomNavigationStack>();

export default function BottomNavigationStack() {
  return (
    <BottomNavStack.Navigator initialRouteName="HomeScreen">
      <BottomNavStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <BottomNavStack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          headerShown: false,
        }}
      />
      <BottomNavStack.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          headerShown: false,
        }}
      />
      <BottomNavStack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerShown: false,
        }}
      />
      <BottomNavStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </BottomNavStack.Navigator>
  );
}
