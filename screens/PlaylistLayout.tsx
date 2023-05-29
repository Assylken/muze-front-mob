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
import React, { FC, useEffect, useState } from "react";
import tw from "twrnc";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PlaylistNavigationStackList } from "../types";
import * as Animatable from "react-native-animatable";
import SingleSongBody from "../components/Forms/SingleSongBody";
import {
  useAddCurrentPlaysMutation,
  useDeletPlaylistMutation,
  useGetAllSongsQuery,
  useGetSongsOfPlaylistQuery,
} from "../redux/services/authorized.service";
import { Audio } from "expo-av";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import { play, pause, resume, playNext } from "../controller/AudioController";
import DropDownPicker from "react-native-dropdown-picker";
import SinglePlaylistSongBody from "../components/Forms/SinglePlaylistSongBody";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Warning: ..."]);

type ILibraryScreen = NativeStackScreenProps<
  PlaylistNavigationStackList,
  "PlaylistLayout"
>;

const PlaylistLayout: FC<ILibraryScreen> = ({ route, navigation }) => {
  const { playlistID, playlistName, playlistDesc, playlistCover } =
    route.params;
  console.log(playlistID, playlistName, playlistDesc, playlistCover);

  const { data: songs = [] } = useGetSongsOfPlaylistQuery(playlistID);
  const [detelePlaylist] = useDeletPlaylistMutation();
  const [currentSong, setCurrentSong] = useState<any>([] as any[]);
  const [playbackObj, setPlaybackObj] = useState<any>([] as any[]);
  const [soundObj, setSoundObj] = useState<any>([] as any[]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentID, setCurrentID] = useState(-1);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteValue, setDeleteValue] = useState(null);
  const [deleteIt, setDeleteIt] = useState([
    { label: "Delete", value: "delete" },
  ]);

  const [addCurrentPlays] = useAddCurrentPlaysMutation();

  const countCurrent = async (value: any) => {
    console.log("ALAOOAOAOA", value);
    addCurrentPlays({ songId: value.song.id, plays: 1 }).unwrap();
  };

  const enableAudio = async () => {
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: false,
      shouldDuckAndroid: false,
    });
  };

  useEffect(() => {
    console.log("HEHE");
    console.log("DET", deleteValue);

    if (deleteValue === "delete") {
      console.log("WHATATAT");

      deletePlaylistHandler();
    }
  }, [deleteValue]);

  const deletePlaylistHandler = async () => {
    await detelePlaylist({ playlistId: playlistID }).then((val: any) => {
      console.log("pay", val);

      if (!val.data) {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Something went wrong",
        });
      } else {
        navigation.navigate("LibraryScreen");

        Toast.show({
          type: "success",
          text1: "Success",
          text2: "Playlist deleted",
        });
      }
    });
  };

  const handleAudioPress = async (audio: any) => {
    enableAudio();

    if (soundObj.length === 0) {
      console.log("Play");

      const playbackObj = new Audio.Sound();
      const status = await play(
        playbackObj,
        `https://chris-anatalio.infura-ipfs.io/ipfs/${audio.song.song_cid}`
      );

      setPlaybackObj(playbackObj);
      setCurrentSong(audio);
      status.isPlaying = true;
      setSoundObj(status);
      setIsPlaying(true);
      return;
    }

    console.log(
      "CHECK",
      soundObj.isLoaded,
      soundObj.isPlaying,
      currentSong.song.id,
      audio.song.id
    );

    if (
      soundObj.isLoaded &&
      soundObj.isPlaying &&
      currentSong.song.id === audio.song.id
    ) {
      console.log("Pause");
      console.log("WELCOME");

      const status = await pause(playbackObj);
      setIsPlaying(false);
      return setSoundObj(status);
    }

    if (
      soundObj.isLoaded &&
      !soundObj.isPlaying &&
      currentSong.song.id === audio.song.id
    ) {
      console.log("Resume");

      const status = await resume(playbackObj);
      status.isPlaying = true;
      setIsPlaying(true);
      return setSoundObj(status);
    }

    if (soundObj.isLoaded && currentSong.song.id !== audio.song.id) {
      countCurrent(audio);

      const status = await playNext(
        playbackObj,
        `https://chris-anatalio.infura-ipfs.io/ipfs/${audio.song.song_cid}`
      );
      setCurrentSong(audio);
      status.isPlaying = true;
      setSoundObj(status);
      setIsPlaying(true);
    }
  };

  const { div } = styles;
  let sz = 0;
  if (songs) sz = Object.keys(songs).length;

  return (
    <SafeAreaView
      key={playlistID}
      style={[tw`bg-white p-5 items-center h-100%`]}
    >
      <Toast position="top" />

      <View style={tw`flex-row w-100%`}>
        <View style={tw`self-start ml-4 mt-4 mb-4 w-1/2`}>
          <TouchableOpacity
            style={tw`flex-row items-center self-center`}
            onPress={() => {
              setCurrentID(-1);
              handleAudioPress(currentSong);
              navigation.navigate("LibraryScreen");
            }}
          >
            <AntDesign name="arrowleft" size={32} color="black" style={tw``} />
            <Text style={tw`font-semibold text-2xl ml-2`}>My Playlists</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`ml-20 self-center w-1/4`}>
          <DropDownPicker
            style={[
              tw`text-xl font-semibold `,
              {
                borderWidth: 0,
              },
            ]}
            open={deleteOpen}
            value={deleteValue} //genderValue
            items={deleteIt}
            setOpen={setDeleteOpen}
            setValue={setDeleteValue}
            setItems={setDeleteIt}
            placeholder="Edit"
            zIndex={3000}
            zIndexInverse={1000}
            dropDownContainerStyle={{}}
            showArrowIcon={false}
          />
        </View>
      </View>
      <View style={tw`flex-col self-center items-center`}>
        <Image
          source={
            playlistCover === "null"
              ? require("../assets/images/song_placeholder.png")
              : { uri: playlistCover }
          }
          style={tw`w-48 h-48 rounded-2xl`}
        />
        <View style={tw`flex-col self-center items-center`}>
          <Text style={tw`text-2xl mt-2 text-[#5C25F9] font-semibold`}>
            {playlistName}
          </Text>
          <Text style={tw`text-sm font-medium text-gray-400 px-10`}>
            {playlistDesc}
          </Text>
        </View>
      </View>

      <Toast position="top" />

      <View style={tw`mt-5`}>
        <FlatList
          data={songs}
          renderItem={({ item, index }) => (
            <SafeAreaView style={tw`flex flex-1 bg-white w-93% self-center`}>
              <Animatable.View
                animation="fadeInLeft"
                duration={900}
                delay={index * 90}
              >
                <SinglePlaylistSongBody
                  onAudioPress={() => {
                    console.log("SZ_ID", sz - item.song.id);

                    setCurrentID(sz - item.song.id);
                    handleAudioPress(item);
                  }}
                  key={item.song.id}
                  song_id={item.song.id}
                  playlistId={playlistID}
                  cover={`https://chris-anatalio.infura-ipfs.io/ipfs/${item.song.image_cid}`}
                  name={item.song.name}
                  artistId={item.song.userId}
                  shares="17"
                  streams={item.song.plays}
                  isPlaying={isPlaying}
                />
              </Animatable.View>
            </SafeAreaView>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      {currentSong.length !== 0 && (
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
                  currentSong && currentSong.song.image_cid
                    ? {
                        uri: `https://chris-anatalio.infura-ipfs.io/ipfs/${currentSong.song.image_cid}`,
                      }
                    : require("../assets/images/song_placeholder.png")
                }
                style={tw`w-12 h-12 rounded-2xl`}
              />
              <View style={{ marginTop: 16 }}>
                <Text style={tw`text-lg`}>
                  {currentSong && currentSong.song.name}
                </Text>
                <Text style={tw`text-lg`}>{!currentSong && "Undefined"}</Text>
              </View>

              <View style={tw`flex flex-row w-auto items-center`}>
                <TouchableOpacity
                  onPress={() => {
                    if (currentID - 1 == -1) {
                      setCurrentID(0);
                      handleAudioPress(songs[0]);
                    } else {
                      setCurrentID((prevState) => prevState - 1);
                      handleAudioPress(songs[currentID - 1]);
                    }
                    console.log("BACK", currentID - 1);
                  }}
                  style={tw`p-2`}
                >
                  <AntDesign name="banckward" size={22} color="black" />
                </TouchableOpacity>
                {!isPlaying ? (
                  <TouchableOpacity
                    onPress={() => handleAudioPress(currentSong)}
                    style={tw`p-2`}
                  >
                    <FontAwesome name="play" size={24} color="black" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => handleAudioPress(currentSong)}
                    style={tw`p-2`}
                  >
                    <AntDesign name="pause" size={26} color="black" />
                  </TouchableOpacity>
                )}
                <TouchableOpacity
                  onPress={() => {
                    if (currentID + 1 == sz) {
                      setCurrentID(0);
                      handleAudioPress(songs[0]);
                    } else {
                      setCurrentID((prevState) => prevState + 1);
                      handleAudioPress(songs[currentID + 1]);
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
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  div: {
    justifyContent: "space-between",
  },
});

export default PlaylistLayout;
