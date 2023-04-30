import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { FC } from "react";
import tw from "twrnc";
const PlaylistView = (props) => {
  const { cover, name } = props;
  return (
    <View>
      <TouchableOpacity style={tw`flex-row px-8 py-2`}>
        <Image
          source="https://upload.wikimedia.org/wikipedia/en/e/e2/BTS%2C_Love_Yourself_Answer%2C_album_cover.jpg"
          style={tw`w-36 h-36 object-fill rounded-2xl`}
        />
        <Text style={tw`text-lg font-medium self-center pl-4 text-black`}>
          {name}{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlaylistView;
