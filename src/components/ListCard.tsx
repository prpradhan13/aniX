import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ListCardProps } from "../types/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const ListCard = ({ listTitle, dataList }: ListCardProps) => {
  return (
    <View className="">
      <Text
        style={{
          fontFamily: "Montserrat-SemiBold",
          fontSize: 28,
          color: "#F5F5F5",
          marginLeft: 16
        }}
      >
        {listTitle} 🔥
      </Text>
      <FlatList
        data={dataList}
        keyExtractor={(item) => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16, paddingHorizontal: 16  }}
        renderItem={({ item }) => {
          const validRating = Math.max(0, Math.min(item.ratings, 5)); // Ensure rating is between 0 and 5
          const filledStars = Math.floor(validRating);
          const halfStar = validRating % 1 >= 0.5 ? 1 : 0; // Add half-star if fractional part >= 0.5

          const r = [
            ...Array(filledStars).fill("star"),
            ...Array(halfStar).fill("star-half-empty"),
          ];

          return (
            <View className="mt-2 p-3 rounded-[16] bg-BorderColor">
              <Image
                source={{ uri: item.images[0].imageUrl }}
                style={{
                  width: 260,
                  height: 200,
                  borderRadius: 16,
                }}
                resizeMode="cover"
              />

              <View>
                <Text className="text-lg text-[#F5F5F5] mt-2 capitalize font-semibold">
                  {item.animeName}
                </Text>
                <View className="flex-row items-center gap-1 mt-1">
                  {r.map((type, index) => {
                    return (
                      <FontAwesome
                        key={index}
                        name={type}
                        size={12}
                        color="#FF3B30"
                      />
                    );
                  })}
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ListCard;
