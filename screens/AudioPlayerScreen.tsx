import {
  View,
  Image,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import {
  FontAwesome,
  AntDesign,
  Feather,
  SimpleLineIcons,
  Ionicons,
} from "@expo/vector-icons";
import SearchBar from "../components/Forms/SearchBar";
import Slider from "@react-native-community/slider";
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from "react-native-track-player";
import AudioPlayer from "../components/Forms/AudioPlayer";
// const setupPlayer = async () => {
//   await TrackPlayer.setupPlayer();

//   await TrackPlayer.add(songs);
// };
// const togglePlayback = async (playbackState) => {
//   const currentTrack = await TrackPlayer.getCurrentTrack();

//   if (currentTrack !== null) {
//     if (playbackState === State.Paused) {
//       await TrackPlayer.play();
//     } else {
//       await TrackPlayer.pause();
//     }
//   }
// };

const AudioPlayerScreen = () => {
  //const playbackState = usePlaybackState();
  //const progress = useProgress();

  return (
    <SafeAreaView style={tw`flex-1 bg-white py-8 px-4 self-center w-full`}>
      <View style={tw`items-center py-12`}>
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
            //value={progress.position}
            minimumValue={0}
            maximumValue={100}
            // maximumValue={progress.duration}
            thumbTintColor="#5C25F9"
            minimumTrackTintColor="#5C25F9"
            maximumTrackTintColor="#585858"
            // onSlidingComplete={async(value)=>{
            //   await TrackPlayer.seekTo(value);
            // }}
          />
          <View style={tw`flex flex-row justify-between w-full`}>
            <Text>0:01</Text>
            {/* {new Date(progress.position * 1000).toISOString().substr(14, 5)} */}
            <Text>3:24</Text>
            {/* {new Date((progress.duration - progress.position) * 1000).toISOString().substr(14, 5)} */}
          </View>
        </View>
        <View
          style={tw`w-[70%] flex flex-row justify-between self-center pt-12`}
        >
          {/* <AntDesign name="pausecircle" size={24} color="black" /> */}

          <TouchableOpacity>
            <Ionicons
              name="play-skip-back-outline"
              size={35}
              color="#5C25F9"
              style={tw`mt-2`}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => togglePlayback(playbackState)}>
            <AntDesign
              //name={playbackState == State.Playing ? "pausecircle" : "play"}
              name="play"
              size={48}
              color="#5C25F9"
            />
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
    </SafeAreaView>
  );
};

export default AudioPlayerScreen;
