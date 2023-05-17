import { MainStackParamList } from "../types";
import { View, Text, Image, ScrollView } from "react-native";
import React, { FC, useEffect, useState } from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Forms/Button";
import { LinearGradient } from "expo-linear-gradient";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import GridBox from "../components/Forms/GridBox";
import { useAppSelector } from "../redux/hooks";
import {
  useGetCountryByIdQuery,
  useGetUserQuery,
} from "../redux/services/authorized.service";

type IProfileScreen = NativeStackScreenProps<
  MainStackParamList,
  "ProfileScreen"
>;

const ProfileScreen: FC<IProfileScreen> = ({ navigation }) => {
  const [data, setData] = useState<any>([] as any[]);
  const [countryName, setCountryName] = useState("");
  const { data: country = {} } = useGetCountryByIdQuery(data.countryId);
  const { user } = useAppSelector((state: any) => state.auth);
  console.log("SAT", user);

  useEffect(() => {
    if (country?.hasOwnProperty("id")) {
      setCountryName(country.country_name);
    }
  }, [country]);

  try {
    const { data } = useGetUserQuery(user);
    console.log("BET", data);

    useEffect(() => {
      if (data) setData(data);
    });
  } catch (error) {
    console.log(error);
  }

  console.log("DONE", data);

  return (
    <SafeAreaView style={tw`flex flex-1 flex-col bg-white`}>
      <ScrollView style={tw` w-full`}>
        <View style={tw`flex flex-row h-42 px-10 pt-15`}>
          <View>
            <Image
              style={tw`w-20 h-20 rounded-full`}
              source={
                data.profileImage
                  ? data.profileImage
                  : require("../assets/images/placeholder.png")
              }
            />
          </View>
          <View style={tw`pl-8`}>
            {/* <Text>{JSON.stringify(params, null, 2)}</Text> */}
            <Text style={tw`font-bold text-xl text-[#5C25F9]`}>
              {data.firstName ? data.firstName : "John"}
              {data.lastName ? data.lastName : "Doe"}
            </Text>
            <Text style={tw`font-medium	text-base`}>
              {data.username ? "@" + data.username : "null"}
            </Text>
            <Text style={tw`font-medium	text-base`}>{countryName}</Text>
          </View>
        </View>
        <Button
          containerStyle="flex mr-2 px-8"
          style="bg-[#fff] border-2 border-[#5C25F9] mb-3 rounded-6"
          textStyle="text-[#5C25F9] font-bold text-lg"
          onPress={() => navigation.navigate("EditProfileScreen")}
        >
          Edit Profile
        </Button>
        <View
          style={tw`flex-row justify-space-around items-center self-center pt-2 border-[#000] h-20 w-85%`}
        >
          <GridBox
            iconName={"user-following"}
            iconColor={"blue"}
            value={55}
            unit={"Following"}
            func={() => navigation.navigate("FollowingScreen")}
          ></GridBox>
          <GridBox
            iconName={"user-follow"}
            iconColor={"#62dc3c"}
            value={22}
            unit={"Followers"}
            func={() => navigation.navigate("FollowersScreen")}
          ></GridBox>
        </View>
        <View
          style={tw`flex-row justify-space-around items-center self-center pt-2 border-[#000] h-20 w-85%`}
        >
          <GridBox
            iconName={"social-soundcloud"}
            iconColor={"#6A2346"}
            value={22}
            unit={"Streams"}
          ></GridBox>
          <GridBox
            iconName={"music-tone-alt"}
            iconColor={"#a00088"}
            value={22}
            unit={"Albums"}
          ></GridBox>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
