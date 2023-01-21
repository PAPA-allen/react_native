import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export const MenuContainer = ({ title, imageSrc, type, setType }) => {
  const handlePress = () => {
    setType(title.toLowerCase());
  };
  return (
    <TouchableOpacity
      className="items-center justify-center space-y-2"
      onPress={handlePress}
    >
      <View
        className={`w-24 h-24 shadow-sm rounded-full items-center justify-center ${
          type === title.toLowerCase() ? "bg-gray-300" : ""
        }`}
      >
        <Image source={imageSrc} className="w-full h-full object-cover" />
      </View>
      <Text className="text-gray-400 text-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};
