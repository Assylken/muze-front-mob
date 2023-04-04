import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import MediaLibrary from "../components/Forms/MediaLibraryLayout";
import Button from "../components/Forms/Button";
import PlaylistLayout from "./PlaylistLayout";

const FavouritesScreen = () => {
  return (
    <SafeAreaView style={tw`flex flex-1 bg-white`}>
      <ScrollView>
        <MediaLibrary></MediaLibrary>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FavouritesScreen;
