import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const SearchScreen = () => {
  return (
    <SafeAreaView className="bg-MainBackground flex-1 pt-6 px-3">
      {/* Search Box */}
      <View className="bg-neutral-200 p-2 rounded-lg flex-row items-center gap-1">
        <MaterialIcons name="search" size={28} color="grey" />
        <TextInput 
          placeholder="Search for anime"
          placeholderTextColor="grey"
          className="w-[85%] text-[14px] text-black"
        />
      </View>

      {/* Search Results */}
    </SafeAreaView>
  );
};

export default SearchScreen;
