import { AuthStackParamList } from "../types";
import { View, Text,StyleSheet, Image, TouchableOpacity, seWindowDimensions, Dimensions, StatusBar } from "react-native";
import * as React from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Forms/Button";
import { AntDesign, Ionicons, SimpleLineIcons, FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


type IInfoScreen = NativeStackScreenProps<
AuthStackParamList, 
"InfoScreen">;

function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

  const Tab = createMaterialTopTabNavigator();

const InfoScreen: FC<IInfoScreen> = ({ navigation }) => {
    return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      );
    }

const styles = StyleSheet.create({
    
    });

export default InfoScreen;
