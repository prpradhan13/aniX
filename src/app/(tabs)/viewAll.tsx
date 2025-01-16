import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import ListCard from '@/src/components/ListCard';
import DATA from "@/src/data.json"
import GenreBox from '@/src/components/GenreBox';

const viewAll = () => {
  const popularAnime = DATA.filter((item) => item.ratings > 4.5);
  const allGenres = [...new Set(DATA.flatMap(item => item.genres))];
  
  return (
    <SafeAreaView className='flex-1 bg-MainBackground pt-5'>
      <ListCard listTitle='Trendy' dataList={popularAnime} />
      <GenreBox genres={allGenres} />
    </SafeAreaView>
  )
}

export default viewAll;