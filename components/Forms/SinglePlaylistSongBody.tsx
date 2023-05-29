import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";

import {
  useDeleteSongFromPlaylistMutation,
  useGetUserByIdQuery,
  usePostAddToPlaylistMutation,
} from "../../redux/services/authorized.service";

const SinglePlaylistSongBody = (props: any) => {
  const { cover, name, artistId, streams, song_id, playlistId, onAudioPress } =
    props;
  const { data: userId = {} } = useGetUserByIdQuery(artistId);

  const [userName, setUserName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteSongOfPlaylist] = useDeleteSongFromPlaylistMutation();

  const [selectedSongId, setSelectedSongId] = useState("");

  useEffect(() => {
    if (userId.hasOwnProperty("id")) {
      setUserName(userId.username);
    }
  }, [userId]);

  const deleteSongFromPlaylistHandler = async () => {
    await deleteSongOfPlaylist({
      playlistId: playlistId,
      songId: selectedSongId,
    }).then((val: any) => {
      console.log("pay", val);
      if (!val.data) {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Something went wrong",
        });
      } else
        Toast.show({
          type: "success",
          text1: "Success",
          text2: "Song deleted",
        });
    });
    setModalOpen(false);
  };

  return (
    <TouchableOpacity
      onPress={onAudioPress}
      key={song_id}
      style={tw`flex-row mt-2`}
    >
      <Image source={{ uri: cover }} style={tw`w-12 h-12 rounded-2xl`} />

      <View style={tw`flex-col w-full `}>
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
              <Text style={styles.modalText}>Delete this song?</Text>
              <View style={tw`flex-row px-6`}>
                <TouchableOpacity
                  onPress={() => deleteSongFromPlaylistHandler()}
                  style={tw`h-10 ml-2 w-1/2 justify-center bg-white items-center px-4 mx-2 mt-4 border-red-500 border-2 rounded-6`}
                >
                  <Text style={tw`text-lg text-red-500 font-semibold`}>
                    Delete
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={tw`h-10 w-1/2 justify-center bg-white items-center px-4 mt-4 border-gray-400 border-2 rounded-6`}
                  onPress={() => setModalOpen(false)}
                >
                  <Text style={tw`text-lg text-gray-400 font-semibold`}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
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
    width: "60%",
    height: "20%",
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
    fontSize: 20,
    marginTop: 40,
    paddingHorizontal: 24,
    marginBottom: 15,
    textAlign: "center",
  },
  shadow: {
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
});

export default SinglePlaylistSongBody;
