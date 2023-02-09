import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import InfoScreen from "../screens/InfoScreen";
import ContactUsScreen from "../screens/ContacUsScreen";
import { InfoNavigationStack } from "../types";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createMaterialTopTabNavigator<InfoNavigationStack>();

export default function InfoStack() {
  const tabBarOptions = {
    activeTintColor: "#5C25F9",
    inactiveTintColor: "#9E9E9E",
    indicatorStyle: { backgroundColor: "#5C25F9", height: "7%" },
    labelStyle: { fontWeight: "bold" },
  };

  return (
    <SafeAreaView style={tw`flex flex-1 bg-white p-5`}>
      <Stack.Navigator
        style={tw`mt-10`}
        tabBarOptions={tabBarOptions}
        initialRouteName="InfoScreen"
      >
        <Stack.Screen
          name="FAQ"
          component={InfoScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Contact Us"
          component={ContactUsScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
