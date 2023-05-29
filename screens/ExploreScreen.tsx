import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import * as Animatable from "react-native-animatable";
import SingleSongBody from "../components/Forms/SingleSongBody";
import {
  useAddCurrentPlaysMutation,
  useGetAllSongsQuery,
} from "../redux/services/authorized.service";
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from "expo-av";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import { play, pause, resume, playNext } from "../controller/AudioController";
import { LogBox } from "react-native";

const ExploreScreen = () => {
  const { data } = useGetAllSongsQuery(null);
  const [currentSong, setCurrentSong] = useState<any>([] as any[]);
  const [playbackObj, setPlaybackObj] = useState<any>([] as any[]);
  const [soundObj, setSoundObj] = useState<any>([] as any[]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentID, setCurrentID] = useState(-1);
  const [addCurrentPlays] = useAddCurrentPlaysMutation();

  const countCurrent = async (value: any) => {
    console.log("ALAOOAOAOA", value);
    addCurrentPlays({ songId: value.id, plays: 1 });
  };

  const enableAudio = async () => {
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: false,
      shouldDuckAndroid: true,
      allowsRecordingIOS: false,
      interruptionModeIOS: InterruptionModeIOS.DuckOthers,
      interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
      playThroughEarpieceAndroid: false,
    });
  };
  const handleAudioPress = async (audio: any) => {
    enableAudio();

    if (soundObj.length === 0) {
      console.log("Play");
      const playbackObj = new Audio.Sound();
      const status = await play(
        playbackObj,
        `https://chris-anatalio.infura-ipfs.io/ipfs/${audio.song_cid}`
      );

      setPlaybackObj(playbackObj);
      setCurrentSong(audio);
      status.isPlaying = true;
      setSoundObj(status);
      setIsPlaying(true);
      return;
    }

    if (
      soundObj.isLoaded &&
      soundObj.isPlaying &&
      currentSong.id === audio.id
    ) {
      console.log("Pause");

      const status = await pause(playbackObj);
      setIsPlaying(false);
      return setSoundObj(status);
    }

    if (
      soundObj.isLoaded &&
      !soundObj.isPlaying &&
      currentSong.id === audio.id
    ) {
      console.log("Resume");

      const status = await resume(playbackObj);
      status.isPlaying = true;
      setIsPlaying(true);
      return setSoundObj(status);
    }

    if (soundObj.isLoaded && currentSong.id !== audio.id) {
      countCurrent(audio);

      const status = await playNext(
        playbackObj,
        `https://chris-anatalio.infura-ipfs.io/ipfs/${audio.song_cid}`
      );
      setCurrentSong(audio);
      status.isPlaying = true;
      setSoundObj(status);
      setIsPlaying(true);
    }
  };

  const { div } = styles;
  let sz = 0;
  if (data) sz = Object.keys(data).length;
  LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  return (
    <SafeAreaView style={[tw`bg-white p-5 items-center h-100%`]}>
      <Text style={tw`font-bold text-2xl mt-5 ml-3`}>Explore New Songs</Text>
      <Toast position="top" />

      <View style={tw`mt-4 self-center`}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <SafeAreaView style={tw`flex flex-1 bg-white w-95% self-center`}>
              <Animatable.View
                animation="fadeInLeft"
                duration={900}
                delay={index * 90}
              >
                <SingleSongBody
                  onAudioPress={() => {
                    console.log("SZ_ID", sz - item.id);
                    setCurrentID(sz - item.id);
                    handleAudioPress(item);
                  }}
                  song_id={item.id}
                  cover={`https://chris-anatalio.infura-ipfs.io/ipfs/${item.image_cid}`}
                  name={item.name}
                  artistId={item.userId}
                  shares="17"
                  streams={item.plays}
                  isPlaying={isPlaying}
                />
              </Animatable.View>
            </SafeAreaView>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Animated.View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <TouchableOpacity style={tw`flex-1 pt-4 w-100%`}>
          <View
            style={[
              tw`flex flex-row p-2 items-center border border-gray-300 rounded-lg`,
              div,
            ]}
          >
            <Image
              source={
                currentSong.image_cid
                  ? {
                      uri: `https://chris-anatalio.infura-ipfs.io/ipfs/${currentSong.image_cid}`,
                    }
                  : require("../assets/images/song_placeholder.png")
              }
              style={tw`w-12 h-12 rounded-2xl`}
            />
            <View style={{ marginTop: 16 }}>
              <Text style={tw`text-xl font-bold`}>
                {currentSong && currentSong.name}
              </Text>
              <Text style={tw`text-lg`}>{!currentSong && "Undefined"}</Text>
            </View>

            <View style={tw`flex flex-row w-auto items-center`}>
              <TouchableOpacity
                onPress={() => {
                  if (currentID - 1 == -1) {
                    setCurrentID(0);
                    handleAudioPress(data[0]);
                  } else {
                    if (currentID - 1 >= 0 && currentID - 1 <= sz) {
                      setCurrentID((prevState) => prevState - 1);
                      handleAudioPress(data[currentID - 1]);
                    }
                  }
                  console.log("BACK", currentID - 1);
                }}
                style={tw`p-3`}
              >
                <AntDesign name="banckward" size={22} color="black" />
              </TouchableOpacity>
              {!isPlaying ? (
                <TouchableOpacity
                  onPress={() => handleAudioPress(currentSong)}
                  style={tw`p-3`}
                >
                  <FontAwesome name="play" size={24} color="black" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => handleAudioPress(currentSong)}
                  style={tw`p-3`}
                >
                  <AntDesign name="pause" size={26} color="black" />
                </TouchableOpacity>
              )}
              <TouchableOpacity
                onPress={() => {
                  if (currentID + 1 == sz) {
                    setCurrentID(0);
                    handleAudioPress(data[0]);
                  } else {
                    if (currentID + 1 <= sz && currentID + 1 >= 0) {
                      setCurrentID((prevState) => prevState + 1);
                      handleAudioPress(data[currentID + 1]);
                    }
                  }
                  console.log("Front", currentID + 1);
                }}
                style={tw`p-2`}
              >
                <AntDesign name="forward" size={22} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  div: {
    justifyContent: "space-between",
  },
});

export default ExploreScreen;
