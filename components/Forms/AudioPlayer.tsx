import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const AudioPlayer = (props: any) => {
  const { cover, artist, name } = props;
  return (
    <TouchableOpacity style={tw`flex-row bg-gray-100 p-3 rounded-2xl w-full`}>
      <Image
        source={require("../../assets/images/HarryStyles.png")}
        style={tw`w-16 h-16 rounded-2xl`}
      />
      <View style={tw`flex-row w-full`}>
        <View style={tw`w-55% pl-5 self-center`}>
          <Text style={tw`text-lg font-semibold`}>She</Text>
        </View>
        <View style={tw`flex flex-row w-auto items-center`}>
          <TouchableOpacity style={tw`p-2`}>
            <AntDesign name="play" size={28} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={tw`p-2`}>
            <Ionicons
              name="play-skip-forward-outline"
              size={28}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AudioPlayer;
