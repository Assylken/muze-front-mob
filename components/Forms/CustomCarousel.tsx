import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { FC } from "react";
import tw from "twrnc";
import * as Animatable from "react-native-animatable";
import SingleAlbumBody from "./SingleAlbumBody";
const CustomCarousel = (props) => {
  const { carData, cover, name, artist } = props;
  return (
    <View>
      <Text style={tw`font-bold text-2xl mt-4 ml-3`}>New Albums</Text>
      <FlatList
        data={carData}
        horizontal
        renderItem={({ item, index }) => (
          <View style={tw`flex bg-white self-center`}>
            <Animatable.View
              animation="fadeInUp"
              duration={900}
              delay={index * 90}
            >
              <SingleAlbumBody
                cover={carCover}
                name={carName}
                artist={carArtist}
              />
            </Animatable.View>
          </View>
        )}
        keyExtractor={(item) => item.item}
      />
    </View>
  );
};

export default CustomCarousel;
