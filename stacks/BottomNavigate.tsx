import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ExploreScreen from "../screens/ExploreScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import NotificationScreen from "../screens/NotificationScreen";
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
    activeTintColor: '#5C25F9',
    inactiveTintColor: '#9E9E9E',
    labelStyle: { fontWeight: "bold" },
  }

  return (
    <Tab.Navigator 
    tabBarOptions = {tabBarOptions}
    screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon:  ({ focused }) =>
          focused ? (
            <AntDesign name="home" size={24} color="#5C25F9" />
          ) : (
            <AntDesign name="home" size={24} color="black" color="#737373" />
          )
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          headerShown: false,
          tabBarIcon:  ({ focused }) =>
          focused ? (
            <Feather name="trending-up" size={24} color="#5C25F9" />
          ) : (
            <Feather name="trending-up" size={24} color="#737373" />
          )
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          headerShown: false,
          tabBarIcon:  ({ focused }) =>
          focused ? (
            <MaterialCommunityIcons name="playlist-music" size={24} color="#5C25F9" />
          ) : (
            <MaterialCommunityIcons name="playlist-music" size={24} color="#737373" />
          )
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerShown: false,
          tabBarIcon:  ({ focused }) =>
          focused ? (
            <Ionicons name="notifications-outline" size={24} color="#5C25F9" />
          ) : (
            <Ionicons name="notifications-outline" size={24} color="#737373" />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={MainStack}
        options={{
          headerShown: false,
          tabBarIcon:  ({ focused }) =>
          focused ? (
            <Ionicons name="person-circle-outline" size={24} color="#5C25F9" />
          ) : (
            <Ionicons name="person-circle-outline" size={24} color="#737373" />
          )
        }}
      />
    </Tab.Navigator>
  );
}
