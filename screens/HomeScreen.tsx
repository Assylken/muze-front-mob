import React, { FC, useCallBack, useRef, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomNavigationStack } from "../types";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Forms/Button";
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
import SingleSongBody from "../components/Forms/SingleSongBody";
import * as Animatable from "react-native-animatable";
import SingleAlbumBody from "../components/Forms/SingleAlbumBody";
// import BottomSheet, {
//   BottomSheetModal,
//   BottomSheetView,
//   BottomSheetModalProvider,
// } from "@gorhom/bottom-sheet";

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
  // const sheetRef = useRef<BottomSheet>(null);
  // const [isOpen, setIsOpen] = useState(true);

  // const snapPoints = ["40%"];

  return (
    <SafeAreaView style={tw`flex flex-1 bg-white p-5 items-center`}>
      <ScrollView style={tw` w-full`}>
        <Text style={tw`font-bold text-2xl mt-4 ml-3`}>New Albums</Text>
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
        {/* <BottomSheet ref={sheetRef} snapPoints={snapPoints}>
          <BottomSheetView>
            <Text>hello</Text>
          </BottomSheetView>
        </BottomSheet> */}
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
                  <SingleSongBody
                    cover={item.photo}
                    name={item.position}
                    artist={item.name}
                    shares="17"
                    streams="122"
                  />
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
