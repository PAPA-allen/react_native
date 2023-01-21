import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Hotel, Restaurant, Attraction, Notfound } from "../assets";
import { MenuContainer } from "../components/MenuContainer";
import { AntDesign } from "@expo/vector-icons";
import { ItemCardContainer } from "../components/ItemCardContainer";
import { getPlacesData } from "../api";

export const Discover = () => {
  const navigation = useNavigation();
  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
  const [bl_lat, setBl_lat] = useState(null);
  const [bl_lng, setBl_lng] = useState(null);
  const [tr_lat, setTr_lat] = useState(null);
  const [tr_lng, setTr_lng] = useState(null);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    setIsLoading(true);
    getPlacesData(bl_lat, bl_lng, tr_lat, tr_lng, type).then((data) => {
      setMainData(data);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, [bl_lat, bl_lng, tr_lat, tr_lng, type]);
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
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
            setBl_lat(details?.geometry?.viewport?.southwest?.lat);
            setBl_lng(details?.geometry?.viewport?.southwest?.lng);
            setTr_lat(details?.geometry?.viewport?.northeast?.lat);
            setTr_lng(details?.geometry?.viewport?.northeast?.lng);
          }}
          query={{
            key: "AIzaSyD7yspq9DaNDRhK3CHy2J9ijm7LgU3Wrnc",
            language: "en",
          }}
        />
      </View>
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="gray" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row p-2 items-center justify-between px-8 mt-8 space-x-4">
            <MenuContainer
              key={"hotels"}
              title="Hotels"
              imageSrc={Hotel}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"attractions"}
              title="Attractions"
              imageSrc={Attraction}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"restaurants"}
              title="Restaurant"
              imageSrc={Restaurant}
              type={type}
              setType={setType}
            />
          </View>
          <View>
            <View className="flex-row items-center justify-between mt-3 px-5">
              <Text className="font-bold text-2xl text-blue-300">Top</Text>
              <TouchableOpacity className="flex-row items-center space-x-1 justify-center">
                <Text className="text-xl text-gray-400">More</Text>
                <AntDesign name="rightcircleo" size={24} color="gray" />
              </TouchableOpacity>
            </View>
            <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap ">
              {mainData?.length > 0 ? (
                <>
                  {mainData?.map((data, i) => (
                    <ItemCardContainer
                      key={i}
                      ImageSrc={
                        data?.photo?.images?.medium.url
                          ? data?.photo?.images?.medium.url
                          : "https://cdn.pixabay.com/photo/2022/07/11/08/44/tower-7314495_1280.jpg"
                      }
                      title={data?.name}
                      location={data?.location_string}
                      data={data}
                    />
                  ))}
                </>
              ) : (
                <>
                  <View className="w-full h-[400px] items-center space-y-8">
                    <Image
                      source={Notfound}
                      className="w-32 h-32 object-cover"
                    />
                    <Text className="font-semibold text-2xl">OOPSS...</Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
