import React from "react";
import { Tabs } from "expo-router";
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
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => <MaterialIcons name="search" size={28} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="viewAll"
        options={{
          tabBarLabel: "All",
          tabBarIcon: ({ color }) => <MaterialIcons name="format-list-bulleted" size={24} color={color} />
        }} 
      />
    </Tabs>
  );
};

export default TabsLayout;
