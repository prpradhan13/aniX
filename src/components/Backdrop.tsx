import { Animated, Dimensions, Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import DATA from "@/src/data.json";

const { width, height } = Dimensions.get("window");
const BACKDROP_HEIGHT = height * .65;
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;


const Backdrop = ({ scrollX }) => {
  return (
    <View style={{ position: "absolute", width, height: BACKDROP_HEIGHT }}>
      {DATA.map((item, index) => {
        const inputRange = [
          (index - 1) * ITEM_SIZE,
          index * ITEM_SIZE,
          (index + 1) * ITEM_SIZE,
        ];

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
          extrapolate: "clamp",
        });

        return (
          <Animated.Image
            key={item._id}
            source={{ uri: item.images[1].imageUrl }}
            style={[
              StyleSheet.absoluteFillObject,
              {
                width,
                height: BACKDROP_HEIGHT,
                resizeMode: "cover",
                opacity,
              },
            ]}
          />
        );
      })}

      <LinearGradient
        colors={["transparent", "#1A1A1A"]}
        style={{
          position: "absolute",
          bottom: 0,
          width,
          height: BACKDROP_HEIGHT,
        }}
      />
    </View>
  );
};

export default Backdrop;
