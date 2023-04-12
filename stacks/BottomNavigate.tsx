import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ExploreScreen from "../screens/ExploreScreen";
import LibraryScreen from "../screens/LibraryScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MainStack from "./MainStack";
import {
  AntDesign,
  Ionicons,
  SimpleLineIcons,
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomNavigate() {
  const tabBarOptions = {
    activeTintColor: "#5C25F9",
    inactiveTintColor: "#9E9E9E",
    labelStyle: { fontWeight: "bold" },
  };

  return (
    <Tab.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="home" size={24} color="#5C25F9" />
            ) : (
              <AntDesign name="home" size={24} color="black" color="#737373" />
            ),
        }}
      />
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
        name="Library"
        component={LibraryScreen}
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
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="search" size={24} color="#5C25F9" />
            ) : (
              <FontAwesome name="search" size={24} color="#737373" />
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
