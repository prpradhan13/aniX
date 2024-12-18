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
        tabBarStyle: { backgroundColor: 'black' },
      }}
    >
      <Tabs.Screen 
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home-max" size={33} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="search"
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="location-searching" size={28} color={color} />
        }} 
      />
    </Tabs>
  );
};

export default TabsLayout;
