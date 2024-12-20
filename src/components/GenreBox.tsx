import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

interface GenreBoxProps {
  genres: string[];
}

const GenreBox = ({ genres }: GenreBoxProps) => {
  return (
    <FlatList
      data={genres}
      keyExtractor={(item) => item}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ marginTop: 32, paddingHorizontal: 16 }}
      renderItem={({item}) => {
        return (
          <View className="w-[220] h-[220] justify-center items-center gap-2">
            <LinearGradient
              colors={["#333333", "#000000"]}
              style={{
                height: 190,
                width: 190,
                borderRadius: 100,
                position: "absolute",
              }}
            />
            <Text
              style={{
                fontFamily: "Montserrat-SemiBold",
                color: "#F5F5F5",
                fontSize: 22,
                textTransform: "capitalize"
              }}
            >
              {item}
            </Text>
          </View>
        );
      }}
    />
  );
};

export default GenreBox;

const styles = StyleSheet.create({});
