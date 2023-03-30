import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Stack, Avatar } from "@react-native-material/core";

const styles = StyleSheet.create({});

const UserList = () => {
  return (
    <View style={tw`flex-1`}>
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
        ]}
        renderItem={({ item }) => (
          <SafeAreaView style={tw`flex flex-1 bg-white w-90% self-center`}>
            <TouchableOpacity
              style={tw`flex-row border-b border-[#D3D3D3] mt-2`}
            >
              <Image
                source={{ uri: item.photo }}
                style={tw`w-10 h-10 rounded-full`}
              />
              <Text style={tw`text-base p-3`}>{item.name}</Text>
            </TouchableOpacity>
          </SafeAreaView>
        )}
        keyExtractor={(item) => item.item}
      />
    </View>
  );
};

export default UserList;
