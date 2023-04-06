import {
  AuthStackParamList,
  BottomNavigationStack,
  MainStackParamList,
} from "../types";
import {
  SectionList,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  View,
  Text,
  SafeAreaView,
} from "react-native";
import React from "react";
import tw from "twrnc";
import Button from "../components/Forms/Button";
import {
  AntDesign,
  Ionicons,
  SimpleLineIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Stack, Avatar } from "@react-native-material/core";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import * as Animatable from "react-native-animatable";

type IFollowersScreen = NativeStackScreenProps<
  MainStackParamList,
  "FollowingScreen"
>;
const FollowingScreen: FC<IFollowingScreen> = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex flex-1 bg-white`}>
      <TouchableOpacity
        style={tw`mt-8 ml-10 flex-row`}
        onPress={() => navigation.navigate("ProfileScreen")}
      >
        <AntDesign
          name="arrowleft"
          size={25}
          color="black"
          style={tw`mr-5 self-center`}
        />
        <Text style={tw`font-bold text-2xl`}>Following</Text>
      </TouchableOpacity>

      <View style={tw`flex-1 mt-3`}>
        <FlatList
          data={[
            {
              name: "Miyah Myles",
              email: "miyah.myles@gmail.com",
              position: "Data Entry Clerk",
              photo:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
            },
            {
              name: "June Cha",
              email: "june.cha@gmail.com",
              position: "Sales Manager",
              photo: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Iida Niskanen",
              email: "iida.niskanen@gmail.com",
              position: "Sales Manager",
              photo: "https://randomuser.me/api/portraits/women/68.jpg",
            },
            {
              name: "Renee Sims",
              email: "renee.sims@gmail.com",
              position: "Medical Assistant",
              photo: "https://randomuser.me/api/portraits/women/65.jpg",
            },
            {
              name: "Jonathan Nu\u00f1ez",
              email: "jonathan.nu\u00f1ez@gmail.com",
              position: "Clerical",
              photo: "https://randomuser.me/api/portraits/men/43.jpg",
            },
            {
              name: "Sasha Ho",
              email: "sasha.ho@gmail.com",
              position: "Administrative Assistant",
              photo:
                "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
            },
            {
              name: "Abdullah Hadley",
              email: "abdullah.hadley@gmail.com",
              position: "Marketing",
              photo:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f",
            },
            {
              name: "Thomas Stock",
              email: "thomas.stock@gmail.com",
              position: "Product Designer",
              photo:
                "https://tinyfac.es/data/avatars/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg",
            },
            {
              name: "Veeti Seppanen",
              email: "veeti.seppanen@gmail.com",
              position: "Product Designer",
              photo: "https://randomuser.me/api/portraits/men/97.jpg",
            },
            {
              name: "Bonnie Riley",
              email: "bonnie.riley@gmail.com",
              position: "Marketing",
              photo: "https://randomuser.me/api/portraits/women/26.jpg",
            },
            {
              name: "Miyah Myles",
              email: "miyah.myles@gmail.com",
              position: "Data Entry Clerk",
              photo:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
            },
          ]}
          renderItem={({ item, index }) => (
            <SafeAreaView style={tw`flex flex-1 bg-white w-90% self-center`}>
              <Animatable.View
                animation="fadeInUp"
                duration={900}
                delay={index * 90}
              >
                <TouchableOpacity
                  style={tw`flex-row border-b border-[#D3D3D3] mt-2`}
                >
                  <Image
                    source={{ uri: item.photo }}
                    style={tw`w-10 h-10 rounded-full`}
                  />
                  <Text style={tw`text-base p-3`}>{item.name}</Text>
                </TouchableOpacity>
              </Animatable.View>
            </SafeAreaView>
          )}
          keyExtractor={(item) => item.item}
        />
      </View>
    </SafeAreaView>
  );
};

export default FollowingScreen;
