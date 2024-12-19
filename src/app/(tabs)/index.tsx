import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DATA from "@/src/data.json";
import Rating from "@/src/components/Rating";
import Genres from "@/src/components/Genres";
import MaskedView from "@react-native-masked-view/masked-view";
import Svg, { Rect } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const { width, height } = Dimensions.get("window");

const SPACING = 10;
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height * .65;

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
              key={item.id}
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


const TabsIndex = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      {/* <StatusBar hidden /> */}
      <Backdrop scrollX={scrollX} />
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={DATA}
        keyExtractor={(item) => item.id}
        horizontal
        bounces={false}
        decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
        renderToHardwareTextureAndroid
        contentContainerStyle={{
          alignItems: "center",
          paddingHorizontal: SPACER_ITEM_SIZE,
        }}
        snapToInterval={ITEM_SIZE}
        snapToAlignment="start"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
            (index + 1) * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, 60, 100],
          });

          return (
            <View style={{ width: ITEM_SIZE }}>
              <Animated.View
                style={{
                  marginHorizontal: SPACING,
                  padding: SPACING * 2,
                  alignItems: "center",
                  transform: [{ translateY }],
                  backgroundColor: "#1A1A1A",
                  borderRadius: 34,
                }}
              >
                <Image
                  source={{ uri: item.images[0].imageUrl }}
                  style={styles.posterImage}
                />
                <Text style={{ fontFamily: "Montserrat-SemiBold", fontSize: 24, color: "#F5F5F5", textTransform: 'capitalize' }}>
                  {item.animeName}
                </Text>
                {/* <Rating rating={item.ratings} /> */}
                <Genres genres={item.genres} />
                <Text style={{ fontSize: 12, color: "#F5F5F5" }} numberOfLines={3}>
                  {item.description}
                </Text>
              </Animated.View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default TabsIndex;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  posterImage: {
    width: "100%",
    height: ITEM_SIZE * 1.2,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});
