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
import SingleAlbumBody from "../components/Forms/SingleAlbumBody";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomNavigationStack } from "../types";
import { AntDesign } from "@expo/vector-icons";
import PlaylistView from "../components/Forms/PlaylistView";

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

//   type ILibraryScreen = NativeStackScreenProps<
//     BottomNavigationStack,
//     "LibraryScreen"
//   >;
const MyPlaylistsScreen: FC<IMyPlaylistsScreen> = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <ScrollView style={tw` w-full`}>
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
          <Text style={tw`font-bold text-2xl pb-2`}>My Playlists</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={tw`flex-row px-8 py-2`}>
            <View style={tw`w-36 h-36 bg-gray-200 rounded-2xl`}>
              <AntDesign
                name="plus"
                size={24}
                color="black"
                style={tw`flex-1 self-center mt-15`}
              />
            </View>

            <Text style={tw`text-lg font-medium self-center pl-4 text-black`}>
              Create new...{" "}
            </Text>
          </TouchableOpacity>

          <PlaylistView name="Good mood" />

          <PlaylistView name="road trips" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyPlaylistsScreen;
