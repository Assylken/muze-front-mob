import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import {
  AntDesign,
  Feather,
  SimpleLineIcons,
  Ionicons,
} from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

interface PlayerProps {
  onPress: () => void;
}

const AudioPlayerScreen = ({ onPress }: PlayerProps) => {
  return (
    <View
      style={[tw`flex-1 bg-white py-8 px-6   self-center`, { width: "100%" }]}
    >
      <View style={tw`items-center py-12`}>
        <AntDesign name="down" size={36} color="black" {...{ onPress }} />
        <View style={tw`self-center w-full items-center`}>
          <Image
            source={require("../assets/images/HarryStyles.png")}
            style={tw`w-72 h-72 rounded-2xl self-center`}
          />
        </View>
        <View style={tw`flex flex-col items-center pb-10 pt-4`}>
          <Text style={tw`text-xl font-bold`}>She</Text>
          <Text style={tw`text-[#5C25F9] text-lg`}>Harry Styles</Text>
        </View>
        <View style={tw``}>
          <Slider
            style={tw`w-72 h-8`}
            value={20}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="#5C25F9"
            minimumTrackTintColor="#5C25F9"
            maximumTrackTintColor="#585858"
          />
          <View style={tw`flex flex-row justify-between w-full`}>
            <Text>0:01</Text>
            <Text>3:24</Text>
          </View>
        </View>
        <View
          style={tw`w-[70%] flex flex-row justify-between self-center pt-12`}
        >
          <TouchableOpacity>
            <Ionicons
              name="play-skip-back-outline"
              size={35}
              color="#5C25F9"
              style={tw`mt-2`}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="play" size={48} color="#5C25F9" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="play-skip-forward-outline"
              size={35}
              color="#5C25F9"
              style={tw`mt-2`}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={tw`w-[85%] h-auto flex flex-row justify-between self-center`}
      >
        <TouchableOpacity>
          <AntDesign name="hearto" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="repeat" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="share" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <SimpleLineIcons name="options" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AudioPlayerScreen;
