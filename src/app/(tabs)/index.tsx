import { Animated, Dimensions, Image, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import DATA from '@/src/data.json';
import Rating from '@/src/components/Rating';
import Genres from '@/src/components/Genres';

const { width, height } = Dimensions.get('window');

const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height * 0.65;

const TabsIndex = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View  style={styles.container}>
      <Animated.FlatList 
        showsHorizontalScrollIndicator={false}
        data={DATA}
        keyExtractor={(item) => item.id}
        horizontal
        bounces={false}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        renderToHardwareTextureAndroid
        contentContainerStyle={{ alignItems: 'center' }}
        snapToInterval={ITEM_SIZE}
        snapToAlignment='start'
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {

          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, 50, 100],
            extrapolate: 'clamp',
          });

          return (
            <View style={{ width: ITEM_SIZE }}>
              <Animated.View
                style={{
                  marginHorizontal: SPACING,
                  padding: SPACING * 2,
                  alignItems: 'center',
                  // transform: [{ translateY }],
                  backgroundColor: 'white',
                  borderRadius: 34,
                }}
              >
                <Image
                  source={{ uri: item.images[0].imageUrl }}
                  style={styles.posterImage}
                />
                <Text style={{ fontSize: 24 }} numberOfLines={1}>
                  {item.animeName}
                </Text>
                {/* <Rating rating={item.ratings} /> */}
                <Genres genres={item.genres} />
                <Text style={{ fontSize: 12 }} numberOfLines={3}>
                  {item.description}
                </Text>
              </Animated.View>
            </View>
          )
        }}
      />
    </View>
  )
}

export default TabsIndex;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  posterImage: {
    width: '100%',
    height: ITEM_SIZE * 1.2,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});