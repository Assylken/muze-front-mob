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
  Button,
} from "react-native";
import { Stack, Avatar } from "@react-native-material/core";
import { Entypo, AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import {
  MenuContext,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from "react-native-popup-menu";

const DATA = [
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
];

type ILibraryScreen = NativeStackScreenProps<
  BottomNavigationStack,
  "LibraryScreen"
>;
const LibraryScreen: FC<ILibraryScreen> = ({ navigation }) => {
  return (
    <View style={tw`flex-1`}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <SafeAreaView style={tw`flex flex-1 bg-white w-93% self-center`}>
            <TouchableOpacity style={tw`flex-row mt-2`}>
              <Image
                source={{ uri: item.photo }}
                style={tw`w-12 h-12 rounded-xl`}
              />
              <View style={tw`flex-col w-full `}>
                <View style={tw`flex-row`}>
                  <View style={tw`flex-col w-60% pl-5 pb-2`}>
                    <Text style={tw`text-base font-semibold`}>
                      {item.position}
                    </Text>
                    <Text>{item.name}</Text>
                  </View>
                  <View style={tw`flex-col w-20%`}>
                    <View style={tw`flex-row-reverse`}>
                      <TouchableOpacity
                        style={tw`flex-row-reverse `}
                        onPress={() => onPressItem(item)}
                      >
                        <SimpleLineIcons
                          name="options"
                          size={16}
                          color="black"
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={tw`flex-row pt-2`}>
                      <Entypo
                        name="share"
                        size={14}
                        color="black"
                        style={tw`ml-1 mt-1`}
                      />
                      <Text style={tw`ml-1`}>17</Text>
                      <AntDesign
                        name="playcircleo"
                        size={14}
                        color="black"
                        style={tw`ml-1 mt-1`}
                      />
                      <Text style={tw`ml-1`}>122</Text>
                    </View>
                  </View>
                </View>

                <View style={tw`bg-[#D3D3D3] h-0.2 w-80% ml-3`}></View>
              </View>
            </TouchableOpacity>
          </SafeAreaView>
        )}
        keyExtractor={(item) => item.item}
      />
    </View>
  );
};

export default LibraryScreen;
