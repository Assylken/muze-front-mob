import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addUser } from "../redux/slices/auth";
import AuthStack from "../stacks/AuthStack";
import BottomNavigate from "../stacks/BottomNavigate";
import MainStack from "../stacks/MainStack";

const NavContainer = () => {
  const dispatch = useAppDispatch();

  const { user, isLoading, isError, isSuccess, message } = useAppSelector(
    (state) => state.auth
  );
  useEffect(() => {
    const init = async () => {
      await dispatch(addUser());
    };
    init();
  }, [dispatch]);
  console.log(user);

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
