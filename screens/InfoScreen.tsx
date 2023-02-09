import {
  AuthStackParamList,
  MainStackParamList,
  InfoNavigationStack,
} from "../types";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { React, useState } from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Forms/Button";
import InfoTabLayout from "../components/Forms/InfoTabLayout";
import { NavigationContainer } from "@react-navigation/native";
import {
  AntDesign,
  Ionicons,
  SimpleLineIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import InfoNavigate from "../stacks/InfoNavigate";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";

type IInfoScreen = NativeStackScreenProps<InfoNavigationStack, "InfoScreen">;

const InfoScreen: FC<IInfoScreen> = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex flex-1 bg-white items-center`}>
      <ScrollView style={tw`w-full`}>
        <Collapse
          style={tw`self-center border-2 border-[#EEEEEE] rounded-2xl bg-white w-95% p-4 mt-4`}
        >
          <CollapseHeader>
            <View style={tw`w-full h-7`}>
              <Text style={tw`font-bold text-4`}>What is Muze?</Text>
              <AntDesign
                name="caretdown"
                size={18}
                color="#5C25F9"
                style={tw`absolute right-0`}
              />
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              dapibus mauris id mollis sollicitudin. Pellentesque sed iaculis
              mauris. Etiam viverra.
            </Text>
          </CollapseBody>
        </Collapse>
        <Collapse
          style={tw`self-center border-2 border-[#EEEEEE] rounded-2xl bg-white w-95% p-4 mt-4`}
        >
          <CollapseHeader>
            <View style={tw`w-full h-7`}>
              <Text style={tw`font-bold text-4`}>Lorem ipsum dolor</Text>
              <AntDesign
                name="caretdown"
                size={18}
                color="#5C25F9"
                style={tw`absolute right-0`}
              />
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              dapibus mauris id mollis sollicitudin. Pellentesque sed iaculis
              mauris. Etiam viverra.
            </Text>
          </CollapseBody>
        </Collapse>
        <Collapse
          style={tw`self-center border-2 border-[#EEEEEE] rounded-2xl bg-white w-95% p-4 mt-4`}
        >
          <CollapseHeader>
            <View style={tw`w-full h-7`}>
              <Text style={tw`font-bold text-4`}>What is Muze?</Text>
              <AntDesign
                name="caretdown"
                size={18}
                color="#5C25F9"
                style={tw`absolute right-0`}
              />
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              dapibus mauris id mollis sollicitudin. Pellentesque sed iaculis
              mauris. Etiam viverra.
            </Text>
          </CollapseBody>
        </Collapse>
        <Collapse
          style={tw`self-center border-2 border-[#EEEEEE] rounded-2xl bg-white w-95% p-4 mt-4`}
        >
          <CollapseHeader>
            <View style={tw`w-full h-7`}>
              <Text style={tw`font-bold text-4`}>Lorem ipsum dolor</Text>
              <AntDesign
                name="caretdown"
                size={18}
                color="#5C25F9"
                style={tw`absolute right-0`}
              />
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              dapibus mauris id mollis sollicitudin. Pellentesque sed iaculis
              mauris. Etiam viverra.
            </Text>
          </CollapseBody>
        </Collapse>
        <Collapse
          style={tw`self-center border-2 border-[#EEEEEE] rounded-2xl bg-white w-95% p-4 mt-4`}
        >
          <CollapseHeader>
            <View style={tw`w-full h-7`}>
              <Text style={tw`font-bold text-4`}>What is Muze?</Text>
              <AntDesign
                name="caretdown"
                size={18}
                color="#5C25F9"
                style={tw`absolute right-0`}
              />
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              dapibus mauris id mollis sollicitudin. Pellentesque sed iaculis
              mauris. Etiam viverra.
            </Text>
          </CollapseBody>
        </Collapse>
        <Collapse
          style={tw`self-center border-2 border-[#EEEEEE] rounded-2xl bg-white w-95% p-4 mt-4`}
        >
          <CollapseHeader>
            <View style={tw`w-full h-7`}>
              <Text style={tw`font-bold text-4`}>Lorem ipsum dolor</Text>
              <AntDesign
                name="caretdown"
                size={18}
                color="#5C25F9"
                style={tw`absolute right-0`}
              />
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              dapibus mauris id mollis sollicitudin. Pellentesque sed iaculis
              mauris. Etiam viverra.
            </Text>
          </CollapseBody>
        </Collapse>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default InfoScreen;
