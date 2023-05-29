import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import Toast from "react-native-toast-message";

import {
  useGetPlaylistByUserIdQuery,
  useGetUserByIdQuery,
  usePostAddToPlaylistMutation,
} from "../../redux/services/authorized.service";

const SingleSongBody = (props: any) => {
  const { cover, name, artistId, streams, song_id, onAudioPress, isPlaying } =
    props;
  const { data: userId = {} } = useGetUserByIdQuery(artistId);
  const { data: playlistList = [] } = useGetPlaylistByUserIdQuery(null);

  const [addSongToPlaylist] = usePostAddToPlaylistMutation();

  const [userName, setUserName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSongId, setSelectedSongId] = useState("");

  useEffect(() => {
    if (userId.hasOwnProperty("id")) {
      setUserName(userId.username);
    }
  }, [userId]);

  const handleSubmit = async (id: any) => {
    const formData = new FormData();
    console.log("ID", id);
    console.log("SELECTEDSONG", selectedSongId);

    formData.append("playlistId", id);
    formData.append("songId", selectedSongId);

    console.log("FOMR", formData);

    await addSongToPlaylist({ playlistId: id, songId: selectedSongId }).then(
      (val: any) => {
        console.log("pay", val);

        if (!val.data) {
          Toast.show({
            type: "error",
            text1: "Error",
            text2: "This song is already in your playlist",
          });
        } else
          Toast.show({
            type: "success",
            text1: "Success",
            text2: "Song added",
          });
      }
    );
    setModalOpen(false);
  };

  return (
    <TouchableOpacity
      onPress={onAudioPress}
      key={song_id}
      style={tw`flex-row mt-2`}
    >
      <Image source={{ uri: cover }} style={tw`w-12 h-12 rounded-2xl`} />

      <View style={tw`flex-col w-full self-center`}>
        <View style={tw`flex-row`}>
          <View style={tw`flex-col w-60% pl-5 pb-2`}>
            <Text style={tw`text-base font-semibold`}>{name}</Text>
            <Text style={tw`text-[#5C25F9]`}>@{userName}</Text>
          </View>
          <View
            style={[
              tw`flex-row w-20%`,
              { justifyContent: "center", alignSelf: "center" },
            ]}
          >
            <View
              style={[
                tw`flex-row`,
                { justifyContent: "center", alignSelf: "center" },
              ]}
            >
              <AntDesign name="playcircleo" size={14} color="black" />
              <Text style={tw`ml-2 w-16 -mt-0.5`}>{streams}</Text>
            </View>
            <View
              style={[
                tw`flex`,
                { justifyContent: "center", alignSelf: "center" },
              ]}
            >
              <TouchableOpacity
                onPress={() => {
                  setSelectedSongId(song_id);
                  setModalOpen(true);
                }}
                style={tw`flex-row-reverse `}
              >
                <SimpleLineIcons name="options" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={tw`bg-[#D3D3D3] h-0.2 w-80% ml-3`}></View>
      </View>
      <View style={styles.container}>
        <Modal animationType="slide" transparent={true} visible={modalOpen}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Choose playlist to add this song
              </Text>
              <View style={{ width: "100%", paddingHorizontal: 12 }}>
                <View style={tw`mt-5`}>
                  <FlatList
                    data={playlistList}
                    renderItem={({ item, index }) => (
                      <SafeAreaView style={tw`bg-white self-start`}>
                        <Animatable.View
                          animation="fadeInLeft"
                          duration={900}
                          delay={index * 90}
                        >
                          <TouchableOpacity
                            style={tw`pt-2`}
                            onPress={() => handleSubmit(item.id)}
                          >
                            <Text style={tw`text-xl`}>
                              {index + 1}. {item.playlist_name}
                            </Text>
                          </TouchableOpacity>
                        </Animatable.View>
                      </SafeAreaView>
                    )}
                    keyExtractor={(item) => item.id}
                  />
                </View>
              </View>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  paddingBottom: 8,
                }}
                onPress={() => setModalOpen(false)}
              >
                <Text style={tw`text-xl font-semibold pb-1 text-[#5C25F9]`}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "65%",
    height: "50%",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  modalText: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
    paddingHorizontal: 24,
    paddingVertical: 5,
    marginBottom: 15,
    textAlign: "center",
  },
  shadow: {
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
});

export default SingleSongBody;
