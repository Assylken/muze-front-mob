import React, { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomNavigationStack } from "../types";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Forms/Button";
import {
  AntDesign,
  Ionicons,
  SimpleLineIcons,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

import * as Animatable from "react-native-animatable";

type IHomeScreen = NativeStackScreenProps<BottomNavigationStack, "HomeScreen">;

const SONG_DATA = [
  {
    name: "Iida Niskanen",
    email: "iida.niskanen@gmail.com",
    position: "Sales Manager",
    photo:
      "https://upload.wikimedia.org/wikipedia/ru/b/b2/Olivia_Rodrigo_-_SOUR.png",
  },
  {
    name: "Renee Sims",
    email: "renee.sims@gmail.com",
    position: "Medical Assistant",
    photo:
      "https://upload.wikimedia.org/wikipedia/ru/b/b2/Olivia_Rodrigo_-_SOUR.png",
  },
  {
    name: "Jonathan Nu\u00f1ez",
    email: "jonathan.nu\u00f1ez@gmail.com",
    position: "Clerical",
    photo:
      "https://upload.wikimedia.org/wikipedia/ru/b/b2/Olivia_Rodrigo_-_SOUR.png",
  },
  {
    name: "Sasha Ho",
    email: "sasha.ho@gmail.com",
    position: "Administrative Assistant",
    photo: "https://upload.wikimedia.org/wikipedia/ru/7/72/Stoneyalbum.jpg",
  },
  {
    name: "Abdullah Hadley",
    email: "abdullah.hadley@gmail.com",
    position: "Marketing",
    photo: "https://upload.wikimedia.org/wikipedia/ru/7/72/Stoneyalbum.jpg",
  },
  {
    name: "Thomas Stock",
    email: "thomas.stock@gmail.com",
    position: "Product Designer",
    photo: "https://upload.wikimedia.org/wikipedia/ru/7/72/Stoneyalbum.jpg",
  },
  {
    name: "Veeti Seppanen",
    email: "veeti.seppanen@gmail.com",
    position: "Product Designer",
    photo: "https://upload.wikimedia.org/wikipedia/en/3/38/Lizzo_-_Special.png",
  },
  {
    name: "Bonnie Riley",
    email: "bonnie.riley@gmail.com",
    position: "Marketing",
    photo: "https://upload.wikimedia.org/wikipedia/en/3/38/Lizzo_-_Special.png",
  },
  {
    name: "Abdullah Hadley",
    email: "abdullah.hadley@gmail.com",
    position: "Marketing",
    photo: "https://upload.wikimedia.org/wikipedia/ru/7/72/Stoneyalbum.jpg",
  },
  {
    name: "Thomas Stock",
    email: "thomas.stock@gmail.com",
    position: "Product Designer",
    photo: "https://upload.wikimedia.org/wikipedia/ru/7/72/Stoneyalbum.jpg",
  },
];

const ALBUM_DATA = [
  {
    img: "https://upload.wikimedia.org/wikipedia/en/e/e2/BTS%2C_Love_Yourself_Answer%2C_album_cover.jpg",
    title: "Jeon Jungkook",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/3/38/Lizzo_-_Special.png",
    title: "Lizzo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/ru/b/b2/Olivia_Rodrigo_-_SOUR.png",
    title: "Olivia",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/e/e2/BTS%2C_Love_Yourself_Answer%2C_album_cover.jpg",
    title: "Jeon Jungkook",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/e/e2/BTS%2C_Love_Yourself_Answer%2C_album_cover.jpg",
    title: "Jeon Jungkook",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli.",
  },
];

const HomeScreen: FC<IHomeScreen> = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex flex-1 bg-white p-5 items-center`}>
      <ScrollView style={tw` w-full`}>
        <Text style={tw`font-bold text-2xl mt-4`}>New Albums</Text>
        <FlatList
          data={ALBUM_DATA}
          horizontal
          renderItem={({ item, index }) => (
            <View style={tw`flex bg-white self-center`}>
              <Animatable.View
                animation="fadeInUp"
                duration={900}
                delay={index * 90}
              >
                <TouchableOpacity style={tw`flex-row m-3 w-36 h-36`}>
                  <Image
                    source={{ uri: item.img }}
                    style={tw`w-36 h-36 object-fill rounded-2xl`}
                  />
                </TouchableOpacity>
                <Text style={tw`text-base pl-3`}>{item.title} </Text>
                <Text style={tw`text-base pl-3`}>{item.title} </Text>
              </Animatable.View>
            </View>
          )}
          keyExtractor={(item) => item.item}
        />

        <View style={tw`mt-5`}>
          <FlatList
            data={SONG_DATA}
            renderItem={({ item, index }) => (
              <SafeAreaView style={tw`flex flex-1 bg-white w-93% self-center`}>
                <Animatable.View
                  animation="fadeInLeft"
                  duration={900}
                  delay={index * 90}
                >
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
                </Animatable.View>
              </SafeAreaView>
            )}
            keyExtractor={(item) => item.item}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
