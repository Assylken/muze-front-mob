import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import AuthStack from "../stacks/AuthStack";
import BottomNavigate from "../stacks/BottomNavigate";
import SearchScreen from "../screens/SearchScreen";

const NavContainer = () => {
  const dispatch = useAppDispatch();

  const { user, isLoading, isError, isSuccess, message } = useAppSelector(
    (state: any) => state.auth
  );

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }
  console.log("YSER", user);

  return (
    <NavigationContainer>
      {user === null ? <BottomNavigate /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default NavContainer;
