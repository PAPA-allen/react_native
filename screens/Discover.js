import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar } from "../assets";

export const Discover = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-6 mt-3">
        <View>
          <Text className="text-3xl text-blue-300 font-bold">Discover</Text>
          <Text className="text-2xl">What's New Today</Text>
        </View>
        <View className="w-16 h-16 items-center justify-center">
          <Image
            source={Avatar}
            className="w-full h-full object-cover shadow-lg "
          />
        </View>
      </View>
      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 mt-4 shadow-lg">
        <GooglePlacesAutocomplete
          GooglePlacesSearchQuery={{ fields: "geometry" }}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: "AIzaSyAar5fJuUO_SAAy4rbzHxc5cFy8Rh_eOqw",
            language: "en",
          }}
        />
      </View>
      <ScrollView>
        <View className="floex-row items-center justify-center px-8 mt-8"></View>
      </ScrollView>
    </SafeAreaView>
  );
};
