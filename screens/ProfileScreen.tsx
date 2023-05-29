import { MainStackParamList } from "../types";
import { View, Text, Image, ScrollView } from "react-native";
import React, { FC, useEffect, useState } from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Forms/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import GridBox from "../components/Forms/GridBox";
import { useAppSelector } from "../redux/hooks";
import {
  useGetPlaylistNumberQuery,
  useGetSongsNumberQuery,
  useGetUserQuery,
} from "../redux/services/authorized.service";
import Toast from "react-native-toast-message";
import { LogBox } from "react-native";

type IProfileScreen = NativeStackScreenProps<
  MainStackParamList,
  "ProfileScreen"
>;

const ProfileScreen: FC<IProfileScreen> = ({ navigation }) => {
  const [data, setData] = useState<any>([] as any[]);
  const { data: getPlaylistNumber = {} } = useGetPlaylistNumberQuery(data.id);
  const { data: getSongNumber = {} } = useGetSongsNumberQuery(data.id);

  const { user } = useAppSelector((state: any) => state.auth);
  LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  try {
    const { data } = useGetUserQuery(user);
    useEffect(() => {
      if (data) setData(data);
    });
  } catch (error) {
    console.log(error);
  }

  console.log("DONE", data);

  return (
    <SafeAreaView style={tw`flex flex-1 flex-col bg-white`}>
      <Toast position="top" />
      <ScrollView style={tw` w-full`}>
        <View style={tw`flex flex-row h-45 px-8 pt-15`}>
          <View>
            <Image
              source={
                data.profileImage === "null"
                  ? require("../assets/images/placeholder.png")
                  : { uri: data.profileImage }
              }
              style={[tw`w-22 h-22 rounded-full`, {}]}
            />
          </View>
          <View style={tw`pl-6 w-[80%]`}>
            <Text style={tw`font-bold text-xl`}>
              {data.firstName ? data.firstName : "John"}{" "}
              {data.lastName ? data.lastName : "Doe"}
            </Text>
            <Text style={tw`font-medium	text-base text-[#5C25F9]`}>
              {data.username ? "@" + data.username : "null"}
            </Text>
            <Text style={tw`text-base`}>{data.bio}</Text>
          </View>
        </View>
        <Button
          containerStyle="flex mr-2 px-8 mt-4"
          style="bg-[#fff] border-2 border-[#5C25F9] mb-3 rounded-6"
          textStyle="text-[#5C25F9] font-bold text-lg"
          onPress={() => navigation.navigate("EditProfileScreen")}
        >
          Edit Profile
        </Button>
        {data && !data.isAritst ? (
          <View
            style={tw`flex-row items-center self-center pt-2 border-[#000] h-20 w-85%`}
          >
            <GridBox
              iconName={"social-soundcloud"}
              iconColor={"#6A2346"}
              value={
                getSongNumber && getSongNumber._count && getSongNumber._count.id
                  ? getSongNumber._count.id
                  : "0"
              }
              unit={"Songs"}
            ></GridBox>
            <GridBox
              iconName={"music-tone-alt"}
              iconColor={"#a00088"}
              value={
                getPlaylistNumber &&
                getPlaylistNumber._count &&
                getPlaylistNumber._count.id
                  ? getPlaylistNumber._count.id
                  : "0"
              }
              unit={"Playlists"}
            ></GridBox>
          </View>
        ) : (
          <View
            style={tw`flex-row items-center self-center pt-2 border-[#000] h-20 w-85%`}
          >
            <GridBox
              iconName={"music-tone-alt"}
              iconColor={"#a00088"}
              value={
                getPlaylistNumber &&
                getPlaylistNumber._count &&
                getPlaylistNumber._count.id
                  ? getPlaylistNumber._count.id
                  : "0"
              }
              unit={"Playlists"}
            ></GridBox>
          </View>
        )}
      </ScrollView>
      <View style={tw`absolute bottom-0 right-0`}>
        <Image
          source={require("../assets/images/listenning.png")}
          style={[tw` w-78 h-78`]}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
