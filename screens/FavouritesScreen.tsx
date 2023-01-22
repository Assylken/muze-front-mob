import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import tw from "twrnc";

const FavouritesScreen = () => {
  return (
    <SafeAreaView
      style={tw`flex flex-1 items-center justify-center px-4 bg-white`}
    >
      <View>
        <Text>This is Favourites Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default FavouritesScreen;
