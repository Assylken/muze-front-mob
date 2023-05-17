import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import * as Animatable from "react-native-animatable";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomNavigationStack } from "../types";
import SingleSongBody from "../components/Forms/SingleSongBody";
import SingleAlbumBody from "../components/Forms/SingleAlbumBody";
import { useGetAllSongsQuery } from "../redux/services/authorized.service";
import { Audio } from "expo-av";
import ConnectExploreAndPLayer from "../components/Forms/ConnectExploreAndPLayer";

type IExploreScreen = NativeStackScreenProps<
  BottomNavigationStack,
  "ExploreScreen"
>;

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
];
const ExploreList = (props: any) => {
  const { data } = useGetAllSongsQuery(null);
  const [currentSong, setCurrentSong] = useState<any>([] as any[]);
  const [playbackObj, setPlaybackObj] = useState<any>([] as any[]);
  const [soundObj, setSoundObj] = useState<any>([] as any[]);
  const [pause, setPause] = useState(false);
  const enableAudio = async () => {
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: false,
      shouldDuckAndroid: false,
    });
  };
  const handleAudioPress = async (audio: any) => {
    console.log("what");

    enableAudio();
    console.log(audio);
    console.log("CUR", soundObj);

    if (soundObj.length === 0) {
      console.log("Here");

      const playbackObj = new Audio.Sound();
      const status = await playbackObj.loadAsync(
        {
          uri: `https://chris-anatalio.infura-ipfs.io/ipfs/${audio.song_cid}`,
        },
        { shouldPlay: true }
      );
      setPlaybackObj(playbackObj);
      setCurrentSong(audio);
      status.isPlaying = true;
      setSoundObj(status);
      return;
    }
    if (soundObj.isLoaded && soundObj.isPlaying) {
      console.log("WHAT");

      const status = await playbackObj.setStatusAsync(
        { shouldPlay: false },
        { isPlaying: false }
      );
      //status.isPlaying = false;
      return setSoundObj(status);
    }
    if (
      soundObj.isLoaded &&
      !soundObj.isPlaying &&
      currentSong.id === audio.id
    ) {
      console.log("Here");

      const status = await playbackObj.playAsync();
      status.isPlaying = true;
      return setSoundObj(status);
    }
  };
  const { height } = Dimensions.get("window");

  return (
    <SafeAreaView style={[tw`bg-white p-5 items-center`, {}]}>
      <ScrollView style={tw`w-full`}>
        <Text style={tw`font-bold text-2xl mt-4 ml-3`}>New Albums</Text>
        <FlatList
          data={ALBUM_DATA}
          horizontal
          renderItem={({ item, index }) => (
            <View style={tw`flex bg-white self-center`}>
              <Animatable.View
                animation="fadeInUp"
                duration={900}
                delay={index * 90}
              >
                <SingleAlbumBody
                  cover={item.img}
                  name={item.title}
                  artist={item.title}
                />
              </Animatable.View>
            </View>
          )}
        />

        <View style={tw`mt-5`}>
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <SafeAreaView style={tw`flex flex-1 bg-white w-93% self-center`}>
                <Animatable.View
                  animation="fadeInLeft"
                  duration={900}
                  delay={index * 90}
                >
                  <SingleSongBody
                    onAudioPress={handleAudioPress}
                    song_id={item.id}
                    cover={`https://chris-anatalio.infura-ipfs.io/ipfs/${item.image_cid}`}
                    name={item.name}
                    artistId={item.userId}
                    shares="17"
                    streams="122"
                  />
                </Animatable.View>
              </SafeAreaView>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreList;
