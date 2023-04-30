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
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import SearchBar from "../components/Forms/SearchBar";
import SingleSongBody from "../components/Forms/SingleSongBody";

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

const PlaylistLayout = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <TouchableOpacity
        style={tw`mt-8 ml-10 flex-row`}
        //   onPress={() => navigation.navigate("ProfileScreen")}
      >
        <AntDesign
          name="arrowleft"
          size={25}
          color="black"
          style={tw`mr-5 self-center`}
        />
        <Text style={tw`font-bold text-2xl pb-2`}>Playlist name</Text>
      </TouchableOpacity>
      <View style={tw`flex flex-1 items-center py-3`}>
        <SearchBar placeholderText="Search for song" />
        <View style={tw`items-center mt-5`}>
          <FlatList
            data={SONG_DATA}
            renderItem={({ item, index }) => (
              <SafeAreaView style={tw`flex flex-1 bg-white w-100% self-center`}>
                <SingleSongBody
                  cover={item.photo}
                  name={item.position}
                  artist={item.name}
                  shares="17"
                  streams="122"
                />
              </SafeAreaView>
            )}
            keyExtractor={(item) => item.item}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlaylistLayout;
