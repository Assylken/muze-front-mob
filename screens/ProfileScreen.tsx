import {
  AuthStackParamList,
  BottomNavigationStack,
  MainStackParamList,
} from "../types";
import {
  View,
  Animated,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { FC } from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Forms/Button";
import { LinearGradient } from "expo-linear-gradient";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as Animatable from "react-native-animatable";
import GridBox from "../components/Forms/GridBox";

type IProfileScreen = NativeStackScreenProps<
  MainStackParamList,
  "ProfileScreen"
>;

const ProfileScreen: FC<IProfileScreen> = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex flex-1 flex-col bg-white`}>
      <ScrollView style={tw` w-full`}>
        <View style={tw`flex flex-row h-42 px-10 pt-15`}>
          <View>
            <Image
              style={tw`w-20 h-20 rounded-full`}
              source={
                require("../assets/images/profile.jpg")
                //source={{ uri: params.userInfo.profileImage }}
              }
            />
          </View>
          <View style={tw`pl-8`}>
            {/* <Text>{JSON.stringify(params, null, 2)}</Text> */}
            <Text style={tw`font-bold text-xl text-[#5C25F9]`}>
              Anel Amanbekova
            </Text>
            <Text style={tw`font-medium	text-base`}>anelnjk@gmail.com</Text>
            <Text style={tw`font-medium	text-base`}>Qazaqstan</Text>
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

        <View
          style={tw`mt-4 w-85% self-center p-4 rounded-6 h-36 flex-col bg-[#F9F9F9]`}
        >
          <View style={tw`w-36 items-center`}>
            <Text style={tw`font-bold text-2xl text-[#43B8AA]`}>
              Individual
            </Text>
            <Text style={tw`-mt-1`}>subscription plan</Text>
            <LinearGradient
              colors={["rgba(67, 184, 170, 1)", "rgba(4, 248, 248, 1)"]}
              style={tw` mt-1 h-12 w-32 bg-[#fff] rounded-5`}
            >
              <Text
                style={tw`font-bold drop-shadow-xl text-2xl text-[#fff] self-center m-2`}
              >
                500 тг
              </Text>
            </LinearGradient>
            <Text
            //onPress={() => navigation.navigate()}
            >
              Click to get...
            </Text>
          </View>

          <View style={tw`absolute right-0`}>
            <Image
              style={{ width: 155, height: 95, margin: 10, marginTop: 15 }}
              source={require("../assets/images/cloud_music.png")}
            />
          </View>
        </View>

        <View
          style={tw`mt-4 w-85% self-center p-4 rounded-6 h-36 flex-col bg-[#F9F9F9]`}
        >
          <View style={tw`w-36 items-center`}>
            <Text style={tw`font-bold text-2xl text-[#FF59C6]`}>Artist</Text>
            <Text style={tw`-mt-1`}>subscription plan</Text>
            <LinearGradient
              colors={["rgba(234, 7, 157, 0.95)", "rgba(253, 105, 203, 0.95)"]}
              style={tw`mt-1 h-12 w-32 bg-[#fff] rounded-5`}
            >
              <Text
                style={tw`font-bold drop-shadow-xl text-2xl text-[#fff] self-center m-2`}
              >
                1000 тг
              </Text>
            </LinearGradient>
            <Text
            //onPress={() => navigation.navigate()}
            >
              Click to get...
            </Text>
          </View>

          <View style={tw`absolute right-0`}>
            <Image
              style={{ height: 126, width: 129, marginRight: 10 }}
              source={require("../assets/images/cloud_bitcoin.png")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
