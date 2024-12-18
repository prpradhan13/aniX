import '@/src/global.css'
import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font"
import { ActivityIndicator } from 'react-native';

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    "Montserrat-Regular": require("@/src/assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("@/src/assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-SemiBold": require("@/src/assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-ExtraBold": require("@/src/assets/fonts/Montserrat-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <>
      <StatusBar
        style={"light"}
        backgroundColor='transparent'
      />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </>
  )
}
