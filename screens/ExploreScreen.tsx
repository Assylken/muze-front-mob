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

const ExploreScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <Text style={tw`font-bold text-2xl p-6 ml-2`}>Library</Text>
      <View style={tw`flex-1 self-center`}>
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
                <TouchableOpacity style={tw`flex-row m-3 w-36 h-36`}>
                  <Image
                    source={{ uri: item.img }}
                    style={tw`w-36 h-36 object-fill rounded-2xl`}
                  />
                </TouchableOpacity>
                <Text
                  style={tw`text-base pl-3 text-[#5C25F9] font-semibold leading-4`}
                >
                  {item.title}{" "}
                </Text>
                <Text style={tw`text-base pl-3`}>{item.title} </Text>
              </Animatable.View>
            </View>
          )}
          keyExtractor={(item) => item.item}
        />
      </View>
    </SafeAreaView>
  );
};

export default ExploreScreen;
