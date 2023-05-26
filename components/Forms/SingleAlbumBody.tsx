import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
const SingleAlbumBody = (props: any) => {
  const { cover, name, description, id, navigation } = props;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("PlaylistLayout", {
          playlistID: id,
          playlistName: name,
          playlistDesc: description,
          playlistCover: cover,
        })
      }
      style={tw`flex-col m-3 w-36 h-36`}
    >
      <Image
        source={
          cover === "null"
            ? require("../../assets/images/song_placeholder.png")
            : { uri: cover }
        }
        style={tw`w-36 h-36 rounded-2xl`}
      />
      <Text
        style={tw`text-base font-medium pl-3 py-2 text-[#5C25F9] leading-4`}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default SingleAlbumBody;
