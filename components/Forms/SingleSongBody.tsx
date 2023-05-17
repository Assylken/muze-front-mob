import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { AntDesign, SimpleLineIcons, Entypo } from "@expo/vector-icons";
import {
  useGetPlaylistByUserIdQuery,
  useGetUserByIdQuery,
  usePostAddToPlaylistMutation,
} from "../../redux/services/authorized.service";
//import { TouchableOpacity } from "react-native-gesture-handler";

const SingleSongBody = (props: any) => {
  const { cover, name, artistId, shares, streams, song_id, onAudioPress } =
    props;
  const { data: userId = {} } = useGetUserByIdQuery(artistId);
  const { data: playlistList = [] } = useGetPlaylistByUserIdQuery(null);
  const [addSongToPlaylist] = usePostAddToPlaylistMutation();
  const [selectedSongId, setSelectedSongId] = useState("");
  const [userName, setUserName] = useState("");
  useEffect(() => {
    if (userId.hasOwnProperty("id")) {
      setUserName(userId.username);
    }
  }, [userId]);

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
            <Text>@{userName}</Text>
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
