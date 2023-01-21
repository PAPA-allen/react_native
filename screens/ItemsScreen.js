import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import React, { useLayoutEffect } from "react";

export const ItemsScreen = ({ route }) => {
  const navigation = useNavigation();
  const data = route?.params?.param;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  console.log(data);
  return (
    <SafeAreaView className="flex-1 relative bg-white">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="relative bg-white shadow-lg">
          <Image
            source={{
              uri: data?.photo?.images?.large.url
                ? data?.photo?.images?.large.url
                : "https://cdn.pixabay.com/photo/2022/07/11/08/44/tower-7314495_1280.jpg",
            }}
            className="w-full h-72 object-cover rounded-3xl"
          />
          <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
            <TouchableOpacity
              onPress={() => navigation.navigate("Discover")}
              className="w-10 h-10 rounded-lg items-center justify-center bg-white"
            >
              <AntDesign name="leftcircle" size={24} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 rounded-lg items-center justify-center bg-blue-300">
              <Entypo name="dots-three-horizontal" size={24} color="gray" />
            </TouchableOpacity>
          </View>
          <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
            <View className="flex-row space-c-2 items-center">
              <Text className="text-[12px] font-bold text-gray-500">
                {data?.price_level}
              </Text>
              <Text className="text-2xl font-bold text-gray-500">
                {data?.price}
              </Text>
            </View>
            <View className="px-2 py-2 rounded-md bg-teal-100">
              <Text>{data?.open_now_text}</Text>
            </View>
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-blue-300 text-[24px] font-bold ">
            {data?.name}
          </Text>
          <View className="flex-row items-center space-x-2 mt-2">
            <FontAwesome5 name="map-marker" size={24} color="black" />
            <Text className="text-gray-300 text-[20px] font-bold">
              {data?.location_string}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
