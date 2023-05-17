import {
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  View,
  Text,
  SafeAreaView,
} from "react-native";
import React, { FC } from "react";
import tw from "twrnc";
import * as Animatable from "react-native-animatable";
import SingleAlbumBody from "../components/Forms/SingleAlbumBody";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomNavigationStack } from "../types";
import LibraryOptions from "../components/Forms/LibraryOptions";
import { AntDesign } from "@expo/vector-icons";

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

  {
    img: "https://upload.wikimedia.org/wikipedia/ru/b/b2/Olivia_Rodrigo_-_SOUR.png",
    title: "Olivia",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/ru/7/72/Stoneyalbum.jpg",
    title: "Jeon Jungkook",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/ru/7/72/Stoneyalbum.jpg",
    title: "Jeon Jungkook",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli.",
  },
];

type ILibraryScreen = NativeStackScreenProps<
  BottomNavigationStack,
  "LibraryScreen"
>;
const LibraryScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <Text style={tw`font-bold text-2xl p-5 ml-2`}>Library</Text>
      <View style={tw`flex-1 self-center`}>
        <View style={tw`h-auto pb-3`}>
          <LibraryOptions
            optionText="My Creativity"
            onPress={() => navigation.navigate("MyAlbumsScreen")}
          />
          <LibraryOptions
            optionText="My Playlists"
            onPress={() => navigation.navigate("MyPlaylistsScreen")}
          />
        </View>

        <Text style={tw`font-bold text-2xl p-2 ml-2`}>Albums</Text>
        <FlatList
          data={ALBUM_DATA}
          numColumns={2}
          renderItem={({ item, index }) => (
            <View style={tw`flex bg-white self-center px-1`}>
              <Animatable.View
                animation="fadeInUp"
                duration={900}
                delay={index * 90}
              >
                <SingleAlbumBody
                  cover={item.img}
                  name={item.title}
                  artist={item.title}
                />
              </Animatable.View>
            </View>
          )}
          keyExtractor={(item) => item.item}
        />
      </View>
    </SafeAreaView>
  );
};

export default LibraryScreen;
