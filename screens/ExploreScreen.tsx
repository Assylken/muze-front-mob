import {
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import tw from "twrnc";
import * as Animatable from "react-native-animatable";
import SingleAlbumBody from "../components/Forms/SingleAlbumBody";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomNavigationStack } from "../types";

const NEW_ALBUMS = [
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
const TOP = [
  {
    img: "https://upload.wikimedia.org/wikipedia/en/0/00/Miley_Cyrus_-_Flowers_%28digital_single%29.png",
    title: "Jeon Jungkook",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/a/a0/HarryStyles-albumcover.png",
    title: "Lizzo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/ru/7/72/Stoneyalbum.jpg",
    title: "Olivia",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/e/e2/BTS%2C_Love_Yourself_Answer%2C_album_cover.jpg",
    title: "Jeon Jungkook",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/a/a0/HarryStyles-albumcover.png",
    title: "Jeon Jungkook",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli.",
  },

  {
    img: "https://upload.wikimedia.org/wikipedia/en/0/00/Miley_Cyrus_-_Flowers_%28digital_single%29.png",
    title: "Olivia",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/ru/7/72/Stoneyalbum.jpg",
    title: "Jeon Jungkook",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/0/00/Miley_Cyrus_-_Flowers_%28digital_single%29.png",
    title: "Jeon Jungkook",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli.",
  },
];
type IExploreScreen = NativeStackScreenProps<
  BottomNavigationStack,
  "ExploreScreen"
>;

const ExploreScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <ScrollView style={tw`pb-5`}>
        <View style={tw`px-5 pt-3`}>
          <Text style={tw`font-bold text-2xl mt-4 ml-3`}>New Albums</Text>
          <FlatList
            data={NEW_ALBUMS}
            horizontal
            renderItem={({ item, index }) => (
              <View style={tw`flex bg-white self-center`}>
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

        <View style={tw`px-5 pt-3`}>
          <Text style={tw`font-bold text-2xl mt-2 ml-3`}>Top 10</Text>
          <FlatList
            data={TOP}
            horizontal
            renderItem={({ item, index }) => (
              <View style={tw`flex bg-white self-center`}>
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

        <View style={tw`px-5 pt-3`}>
          <Text style={tw`font-bold text-2xl mt-2 ml-3`}>Pop Top</Text>
          <FlatList
            data={NEW_ALBUMS}
            horizontal
            renderItem={({ item, index }) => (
              <View style={tw`flex bg-white self-center`}>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreScreen;
