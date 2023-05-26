import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExploreScreen from "../screens/ExploreScreen";
import SearchScreen from "../screens/SearchScreen";
import MainStack from "./MainStack";
import {
  Ionicons,
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import LibraryScreen from "../screens/LibraryScreen";
import PlaylistStack from "./PlaylistStack";

const Tab = createBottomTabNavigator();

export default function BottomNavigate() {
  // const tabBarOptions = {
  //   activeTintColor: "#5C25F9",
  //   inactiveTintColor: "#9E9E9E",
  //   labelStyle: { fontWeight: "bold" },
  // };

  return (
    <Tab.Navigator
      initialRouteName="Explore"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name="trending-up" size={24} color="#5C25F9" />
            ) : (
              <Feather name="trending-up" size={24} color="#737373" />
            ),
        }}
      />
      <Tab.Screen
        name="Playlists"
        component={PlaylistStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="playlist-music"
                size={24}
                color="#5C25F9"
              />
            ) : (
              <MaterialCommunityIcons
                name="playlist-music"
                size={24}
                color="#737373"
              />
            ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={MainStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons
                name="person-circle-outline"
                size={24}
                color="#5C25F9"
              />
            ) : (
              <Ionicons
                name="person-circle-outline"
                size={24}
                color="#737373"
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
