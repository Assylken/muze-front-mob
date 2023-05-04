import {
  AuthStackParamList,
  BottomNavigationStack,
  MainStackParamList,
  TopNavigationStackParamList,
} from "../types";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Forms/Button";
import {
  AntDesign,
  Ionicons,
  SimpleLineIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type IProfilePage = NativeStackScreenProps<
  TopNavigationStackParamList,
  "ProfileScreen"
>;

const ProfileScreen: FC<IProfilePage> = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flexs flex-1 flex-col bg-white`}>
      <View style={tw`flex flex-row h-24 px-10`}>
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
          <Text style={tw`font-medium	text-base`}>8 707 818 00 00</Text>
        </View>
      </View>
      <Button
        containerStyle="flex mr-2 px-8"
        style="bg-[#fff] border-2 border-[#5C25F9]"
        textStyle="text-[#5C25F9] font-bold text-lg"
        onPress={() => navigation.navigate("EditProfileScreen")}
      >
        Edit Profile
      </Button>
      <View style={styles.grid_cont}>
        <View style={styles.custom_box}>
          <View>
            <SimpleLineIcons
              style={tw`text-3xl font-bold px-3`}
              name="user-following"
              size={24}
              color="blue"
            />
          </View>
          <View>
            <Text style={tw`font-bold text-lg`}>55</Text>
            <Text style={tw`font-medium text-[#9098A3]`}>Followed</Text>
          </View>
        </View>
        <View style={styles.custom_box}>
          <View>
            <SimpleLineIcons
              style={tw`text-3xl font-bold px-3`}
              name="user-follow"
              size={24}
              color="#75F94C"
            />
          </View>
          <View>
            <Text style={tw`font-bold text-lg`}>22</Text>
            <Text style={tw`font-medium text-[#9098A3]`}>Followers</Text>
          </View>
        </View>
      </View>
      <View style={styles.grid_cont}>
        <View style={styles.custom_box}>
          <View>
            <FontAwesome
              style={tw`text-3xl font-bold px-3`}
              name="heart"
              size={24}
              color="#FE3155"
            />
          </View>
          <View>
            <Text style={tw`font-bold text-lg`}>54</Text>
            <Text style={tw`font-medium text-[#9098A3]`}>Likes</Text>
          </View>
        </View>
        <View style={styles.custom_box}>
          <View>
            <Ionicons
              style={tw`text-3xl font-bold px-3`}
              name="albums"
              size={24}
              color="#6A2346"
            />
          </View>
          <View>
            <Text style={tw`font-bold text-lg`}>3</Text>
            <Text style={tw`font-medium text-[#9098A3]`}>Albums</Text>
          </View>
        </View>
      </View>
      <View style={styles.payment}>
        <View style={tw`w-36 items-center`}>
          <Text style={tw`font-bold text-2xl text-[#43B8AA]`}>Individual</Text>
          <Text style={tw`-mt-1`}>subscription plan</Text>
          <LinearGradient
            colors={["rgba(67, 184, 170, 1)", "rgba(4, 248, 248, 1)"]}
            style={styles.gradient}
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
            style={styles.image_style}
            source={require("../assets/images/cloud_music.png")}
          />
        </View>
      </View>

      <View style={styles.payment}>
        <View style={tw`w-36 items-center`}>
          <Text style={tw`font-bold text-2xl text-[#FF59C6]`}>Artist</Text>
          <Text style={tw`-mt-1`}>subscription plan</Text>
          <LinearGradient
            colors={["rgba(234, 7, 157, 0.95)", "rgba(253, 105, 203, 0.95)"]}
            style={styles.gradient}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  grid_cont: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
    paddingTop: 10,
    borderColor: "#000",
    height: 80,
    width: "85%",
  },
  custom_box: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: "90%",
    margin: 5,
    borderRadius: 18,
    backgroundColor: "#F9F9F9",
  },
  payment: {
    marginTop: 15,
    width: "85%",
    alignSelf: "center",
    backgroundColor: "#F9F9F9",
    padding: 15,
    borderRadius: 18,
    height: 150,
    flexDirection: "column",
  },
  image_style: {
    width: 155,
    height: 95,
    margin: 10,
    marginTop: 15,
  },
  gradient: {
    height: 50,
    width: 120,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
});

export default ProfileScreen;
