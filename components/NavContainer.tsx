import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useAppSelector } from "../redux/hooks";
import AuthStack from "../stacks/AuthStack";
import BottomNavigate from "../stacks/BottomNavigate";
const NavContainer = () => {
  const { user, isLoading } = useAppSelector((state: any) => state.auth);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user !== null ? <BottomNavigate /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default NavContainer;
