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
import React from "react";
import tw from "twrnc";
import * as Animatable from "react-native-animatable";
import SingleAlbumBody from "../components/Forms/SingleAlbumBody";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomNavigationStack } from "../types";
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

const SECTIONS = ["My Creativity", "My Playlists"];

type ILibraryScreen = NativeStackScreenProps<
  BottomNavigationStack,
  "LibraryScreen"
>;
const LibraryScreen: FC<ILibraryScreen> = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <Text style={tw`font-bold text-2xl p-6 ml-2`}>Library</Text>
      <View style={tw`flex-1 self-center`}>
        <View style={tw`h-24`}>
          <FlatList
            data={SECTIONS}
            renderItem={({ item, index }) => (
              <TouchableOpacity style={tw`flex-row mt-2`}>
                <View style={tw`flex-col w-full`}>
                  <View style={tw`flex-row`}>
                    <View style={tw`flex-col w-80% pl-5 pb-2`}>
                      <Text style={tw`text-lg font-semibold text-[#5C25F9]`}>
                        {item}
                      </Text>
                    </View>
                    <View style={tw`w-10%`}>
                      <AntDesign
                        name="arrowright"
                        size={20}
                        color="black"
                        style={tw`flex-row-reverse self-center`}
                      />
                    </View>
                  </View>

                  <View style={tw`bg-[#D3D3D3] h-0.2 w-90% ml-3`}></View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.item}
          />
        </View>

        <Text style={tw`font-bold text-2xl p-3 ml-2`}>Albums</Text>
        <FlatList
          data={ALBUM_DATA}
          numColumns={2}
          renderItem={({ item, index }) => (
            <View style={tw`flex bg-white self-center px-2`}>
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
