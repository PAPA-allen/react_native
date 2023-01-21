import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";

export const ItemCardContainer = ({ ImageSrc, title, location, data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ItemsScreen", { param: data })}
      className="rounded-md border-gray-300 space-y-2 px-3 py-2 shadow-lg bg-white w-[172px] my-2"
    >
      <Image
        source={{ uri: ImageSrc }}
        className="w-full h-40 rounded-md object-cover"
      />
      {title ? (
        <>
          <Text className="font-bold text-blue-300">
            {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
          </Text>
          <View className="flex-row items-center space-x-1">
            <FontAwesome name="map-marker" size={20} color="gray" />
            <Text className="font-bold text-blue-300 text-[14px]">
              {location?.length > 18 ? `${location.slice(0, 18)}..` : location}
            </Text>
          </View>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};
