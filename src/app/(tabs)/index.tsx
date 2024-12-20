import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import DATA from "@/src/data.json";
import Rating from "@/src/components/Rating";
import Genres from "@/src/components/Genres";
import Backdrop from "@/src/components/Backdrop";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const SPACING = 10;
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;

const TabsIndex = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      {/* <StatusBar hidden /> */}
      <Backdrop scrollX={scrollX} />
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={DATA}
        keyExtractor={(item) => item._id}
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
                  overflow: "hidden"
                }}
              >
                <LinearGradient 
                colors={['#333333', 'transparent']}
                style={{
                  width: ITEM_SIZE,
                  height: ITEM_SIZE,
                  position: "absolute",
                  top: 0
                }}
              />
                <Image
                  source={{ uri: item.images[0].imageUrl }}
                  style={styles.posterImage}
                />
                <Text style={{ fontFamily: "Montserrat-SemiBold", fontSize: 24, color: "#F5F5F5", textTransform: 'capitalize' }}>
                  {item.animeName}
                </Text>
                <Rating rating={item.ratings} />
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
