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
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
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
        <View className="mt-4 flex-row items-center justify-between">
          {data?.rating && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-blue-300 items-center justify-center shadow-md">
                <Feather name="star" size={24} color="black" />
              </View>
              <View>
                <Text className="text-gray-300">{data?.rating}</Text>
                <Text className="text-gray-300">Ratings</Text>
              </View>
              <View className="w-12 h-12 rounded-2xl bg-blue-300 items-center justify-center shadow-md">
                <FontAwesome5 name="comment-dollar" size={24} color="black" />
              </View>
              <View>
                <Text className="text-gray-300">{data?.price_level}</Text>
                <Text className="text-gray-300">Price Level</Text>
              </View>
              <View className="w-12 h-12 rounded-2xl bg-blue-300 items-center justify-center shadow-md">
                <FontAwesome name="map-signs" size={24} color="black" />
              </View>
              <View>
                <Text className="text-gray-300">{data?.bearing}</Text>
                <Text className="text-gray-300">Bearing</Text>
              </View>
            </View>
          )}
        </View>
        {data?.description && (
          <Text className="mt-4 tracking-wide text-[16px] font-semibold text-gray-500">
            {data?.description}
          </Text>
        )}
        {data?.cuisine && (
          <View className="flex-row gap-2 items-center justify-start flex-wrap mt-2 ">
            {data?.cuisine.map((n) => (
              <TouchableOpacity
                key={n.key}
                className="px-2 py-2 rounded-full bg-emerald-200"
              >
                <Text>{n.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <View className="space-y-2 mt-4 bg-gray-400 rounded-lg px-4 py-2">
          {data?.phone && (
            <View className="items-center flex-row space-x-6">
              <Feather name="phone" size={24} color="black" />
              <Text className="text-lg">{data?.phone}</Text>
            </View>
          )}
          {data?.email && (
            <View className="items-center flex-row space-x-6">
              <MaterialIcons name="email" size={24} color="black" />
              <Text className="text-lg">{data?.email}</Text>
            </View>
          )}
          {data?.address && (
            <View className="items-center flex-row space-x-6">
              <Entypo name="address" size={24} color="black" />
              <Text className="text-lg">{data?.address}</Text>
            </View>
          )}
          <View className="mt-4 px-4 py-4 rounded-lg bg-blue-300 items-center justify-center mb-12">
            <Text className="text-3xl font-semibold uppercase tracking-wider text-gray-300">
              Order Now
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
