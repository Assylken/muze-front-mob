import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import InfoScreen from "../screens/InfoScreen";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import ContactUsScreen from "../screens/ContacUsScreen";
import {
  AuthStackParamList,
  MainStackParamList,
  InfoNavigationStack,
} from "../types";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AntDesign,
  Ionicons,
  SimpleLineIcons,
  FontAwesome,
} from "@expo/vector-icons";

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
      <TouchableOpacity
        style={tw`mt-2 ml-2 flex-row`}
        onPress={() => navigation.navigate("EditProfileScreen")}
      >
        <AntDesign
          name="arrowleft"
          size={25}
          color="black"
          style={tw`mr-5 self-center`}
        />
        <Text style={tw`font-bold text-2xl`}>Info</Text>
      </TouchableOpacity>
      <Stack.Navigator
        style={tw`mt-5`}
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
