import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthStack from "../stacks/AuthStack";

const NavContainer = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default NavContainer;
