import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import tw from "twrnc";

const ExploreScreen = () => {
  return (
    <SafeAreaView
      style={tw`flex flex-1 items-center justify-center px-4 bg-white`}
    >
      <View>
        <Text>This is Explore Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ExploreScreen;
