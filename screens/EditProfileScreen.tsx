import { AuthStackParamList } from "../types";
import { View, Text,StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import React, { FC } from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Forms/Button";
import { AntDesign, Ionicons, SimpleLineIcons, FontAwesome, Feather  } from "@expo/vector-icons";


type IEditProfileScreen = NativeStackScreenProps<
AuthStackParamList, 
"EditProfileScreen">;
const EditProfileScreen: FC<IEditProfileScreen> = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex flex-1 flex-col bg-white`}>
        <View style={tw`mt-8 self-center`}>
            <Text style={tw`font-bold text-2xl`}>Edit Your Profile</Text>
        </View>
        <View style={tw`items-center mt-8`}>
            <Image
                style={tw`w-30 h-30 rounded-full`}
                source={require("../assets/images/profile.jpg")
                //source={{ uri: params.userInfo.profileImage }}
                }
                />
            <View style={tw`flex-row mt-2`}>
            <AntDesign name="edit" size={24} color="black" />
            <Text 
            style={tw`font-medium text-base ml-3`}
           // onPress={() => navigation.navigate()}
            >Change Profile photo</Text>
            </View>
        </View>
        <View style={tw`px-8 mt-3`}>
            <View style={tw`h-16 w-[100%] items-center border-2 mt-3 border-[#D6D6D6] opacity-50 rounded-2xl`}>
                <TextInput
                style={tw`p-2 ml-8 mt-1 w-[100%] text=[#5C25F9] font-bold text-base content-center`}
                placeholder="Anel Amanbekova"
                placeholderTextColor="#5C25F9"
                />
            </View>
            <View style={tw`h-16 w-[100%] items-center border-2 mt-3 border-[#D6D6D6] opacity-50 rounded-2xl`}>
                <TextInput
                style={tw`p-2 ml-8 mt-1 w-[100%] text=[#5C25F9] font-bold text-base`}
                placeholder="8 (707) 818 00 00"
                placeholderTextColor="#5C25F9"
                />
            </View>
          <Button
            containerStyle="flex mr-2 mt-3 w-[100%]"
            style="bg-[#fff] border-2 border-[#5C25F9] mb-3"
            textStyle="text-[#5C25F9] font-bold text-lg"
            onPress={() => navigation.navigate("EditProfileScreen")}
            >
                Save
          </Button>
        </View>
        <View style={tw`flex-col mx-8`}>
            <View style={tw`flex-row mt-2`}>
                <Feather name="info" size={24} color="#737373" />
                <Text style={tw`font-medium text-base text-[#737373] ml-3`}
                onPress={() => navigation.navigate("InfoScreen")}
                >Info</Text>
            </View>
            <View style={tw`flex-row mt-2`}>
                <Ionicons name="settings-outline" size={24} color="#737373" />
                <Text style={tw`font-medium text-base text-[#737373] ml-3`}
                // onPress={() => navigation.navigate()}
                >Settings</Text>
            </View>
            <View style={tw`flex-row mt-2`}>
                <AntDesign name="logout" size={24} color="#5C25F9" />
                <Text style={tw`font-medium text-base text-[#5C25F9] ml-3`}
                // onPress={() => navigation.navigate()}
                >Log out</Text>
            </View>
        </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    
});

export default EditProfileScreen;
