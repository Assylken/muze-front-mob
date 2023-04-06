import {
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  View,
  Text,
  SafeAreaView,
} from "react-native";
import React from "react";
import tw from "twrnc";
import * as Animatable from "react-native-animatable";

const ExploreScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 mt-3`}>
        <FlatList
          data={Array(15).fill("")}
          numColumns={2}
          renderItem={({ item, index }) => (
            <View style={tw`flex bg-white w-50% self-center`}>
              <Animatable.View
                animation="fadeInUp"
                duration={900}
                delay={index * 90}
              >
                <TouchableOpacity
                  style={tw`flex-row bg-[#D3D3D3] m-3 w-80% h-32`}
                >
                  {/* <Image
                    source={{ uri: item.photo }}
                    style={tw`w-10 h-10 rounded-full`}
                  /> */}

                  {/* <Text style={tw`text-base p-3`}>Lorum ipsem </Text>
                  <Text style={tw`text-base p-3`}>Lorum ipsem </Text> */}
                </TouchableOpacity>
                <Text style={tw`text-base pl-3`}>Lorum ipsem </Text>
                <Text style={tw`text-base pl-3`}>Lorum ipsem </Text>
              </Animatable.View>
            </View>
          )}
          keyExtractor={(item) => item.item}
        />
      </View>
    </SafeAreaView>
  );
};

export default ExploreScreen;
