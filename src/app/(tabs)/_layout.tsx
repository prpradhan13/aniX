import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const TabsLayout = () => {
  return (
    <Tabs 
      screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: "#FF3B30",
        tabBarInactiveTintColor: 'gray',
        // tabBarBadge: 5,
        tabBarStyle: { backgroundColor: '#1A1A1A', shadowColor: "transparent" },
      }}
    >
      <Tabs.Screen 
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home-max" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="search"
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="location-searching" size={26} color={color} />
        }} 
      />
    </Tabs>
  );
};

export default TabsLayout;
