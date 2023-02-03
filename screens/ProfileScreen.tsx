import { AuthStackParamList, MainStackParamList } from "../types";
import { View, Text, StyleSheet, Image } from "react-native";
import React, { FC } from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Forms/Button";
import { Ionicons, SimpleLineIcons, FontAwesome } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { logout } from "../redux/slices/auth";
import { useAppDispatch } from "../redux/hooks";

type IProfileScreen = NativeStackScreenProps<
  MainStackParamList,
  "ProfileScreen"
>;

const ProfileScreen: FC<IProfileScreen> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const handleLogout = async () => {
    dispatch(logout());
  };
  return (
    <SafeAreaView style={tw`flex flex-1  flex-col bg-white`}>
      <View style={tw`flex flex-row h-48 px-10 pt-15`}>
        <View style={tw``}>
          <Image
            style={tw`w-20 h-20 rounded-full`}
            source={require("../assets/images/profile.jpg")}
          />
        </View>
        <View style={tw`pl-8`}>
          <Text style={tw`font-bold text-xl text-[#5C25F9]`}>
            Anel Amanbekova
          </Text>
          <Text style={tw`font-medium	text-base`}>anelnjk@gmail.com</Text>
          <Text style={tw`font-medium	text-base`}>8 707 818 00 00</Text>
        </View>
      </View>
      <Button
        containerStyle="flex mr-2 px-8"
        style="bg-[#fff] border-2 border-[#5C25F9] mb-5"
        textStyle="text-[#5C25F9] font-bold text-lg"
        
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

      <View style={tw`pt-4 mx-6`}>
        <Button textStyle="text-white font-bold" onPress={handleLogout}>
          Log out
        </Button>
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
    margin: 8,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
});

export default ProfileScreen;
