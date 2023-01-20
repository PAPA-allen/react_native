import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeroImage } from "../assets";

export const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-lg items-center justify-center">
          <Text className="text-blue-400 text-4xl font-bold">S</Text>
        </View>
        <Text className="text-2xl font-semibold">AFE</Text>
      </View>

      <View className="px-6 mt-8 space-y-3">
        <Text className="text-4xl text-gray-500">Have Stories to tell</Text>
        <Text className="font-bold text-blue-300 text-3xl">
          Not stuff to show.
        </Text>
        <Text className="text-base">
          Once the travel bug bites there is no known antinode, and i know that
          i shall be happily infected until the end of my life.
        </Text>
      </View>
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="jello"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-10"
        />
        <View className="absolute bottom-10  w-24 h-24 border-l-2 border-r-2 border-t-2 border-blue-300 rounded-full items-center justify-center">
          <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
            <Animatable.View
              animate={"jello"}
              easing="ease-in-out"
              className="w-20 h-20 items-center justify-center bg-blue-300 rounded-full"
              iterationCount={"infinite"}
            >
              <Text className="font-bold text-2xl">Start</Text>
            </Animatable.View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
