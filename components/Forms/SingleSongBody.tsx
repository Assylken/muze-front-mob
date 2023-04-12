import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { FC } from "react";
import tw from "twrnc";
import {
  AntDesign,
  Ionicons,
  SimpleLineIcons,
  FontAwesome,
  Foundation,
  Entypo,
} from "@expo/vector-icons";
const SingleSongBody = (props) => {
  const { cover, name, artist, shares, streams } = props;
  return (
    <TouchableOpacity style={tw`flex-row mt-2`}>
      <Image source={{ uri: cover }} style={tw`w-12 h-12 rounded-xl`} />
      <View style={tw`flex-col w-full `}>
        <View style={tw`flex-row`}>
          <View style={tw`flex-col w-60% pl-5 pb-2`}>
            <Text style={tw`text-base font-semibold`}>{name}</Text>
            <Text>{artist}</Text>
          </View>
          <View style={tw`flex-col w-20%`}>
            <View style={tw`flex-row-reverse`}>
              <TouchableOpacity style={tw`flex-row-reverse `}>
                <SimpleLineIcons name="options" size={16} color="black" />
              </TouchableOpacity>
            </View>
            <View style={tw`flex-row pt-2`}>
              <Entypo
                name="share"
                size={14}
                color="black"
                style={tw`ml-1 mt-1`}
              />
              <Text style={tw`ml-1`}>{shares}</Text>
              <AntDesign
                name="playcircleo"
                size={14}
                color="black"
                style={tw`ml-1 mt-1`}
              />
              <Text style={tw`ml-1`}>{streams}</Text>
            </View>
          </View>
        </View>

        <View style={tw`bg-[#D3D3D3] h-0.2 w-80% ml-3`}></View>
      </View>
    </TouchableOpacity>
  );
};

export default SingleSongBody;
