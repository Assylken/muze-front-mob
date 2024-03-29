import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import InfoScreen from "../screens/InfoScreen";
import { Text, TouchableOpacity } from "react-native";
import ContactUsScreen from "../screens/ContacUsScreen";
import { InfoNavigationStack } from "../types";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

const Stack = createMaterialTopTabNavigator<InfoNavigationStack>();

const InfoStack: FC<IInfoStack> = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex flex-1 bg-white px-4 h-full`}>
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
        screenOptions={{
          tabBarActiveTintColor: "#5C25F9",
          tabBarInactiveTintColor: "#9E9E9E",
          tabBarIndicatorStyle: { backgroundColor: "#5C25F9", height: "7%" },
          tabBarLabelStyle: { fontWeight: "bold" },
        }}
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
};

export default InfoStack;
