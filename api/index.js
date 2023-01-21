import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat ? bl_lat : "-27.76744089416125",
          tr_latitude: tr_lat ? tr_lat : "-26.99684492277586",
          bl_longitude: bl_lng ? bl_lng : "152.6685227400751",
          tr_longitude: tr_lng ? tr_lng : "153.3178702187602",
          limit: "30",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "e162556cdemsh9ffcc9bf42f118bp1bca7cjsn7b2b01a79d5d",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    return null;
  }
};
