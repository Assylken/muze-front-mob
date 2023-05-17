import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { FC } from "react";
import tw from "twrnc";
const SingleAlbumBody = (props: any) => {
  const { cover, name, artist } = props;
  return (
    <View>
      <TouchableOpacity style={tw`flex-row m-3 w-36 h-36`}>
        <Image source={cover} style={tw`w-36 h-36 object-fill rounded-2xl`} />
      </TouchableOpacity>
      <Text style={tw`text-base font-medium pl-3 text-[#5C25F9] leading-4`}>
        {name}{" "}
      </Text>
      <Text style={tw`text-base pl-3`}>{artist} </Text>
    </View>
  );
};

export default SingleAlbumBody;
