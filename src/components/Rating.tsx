import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  const validRating = Math.max(0, Math.min(rating, 5)); // Ensure rating is between 0 and 5
  const filledStars = Math.floor(validRating); // Full stars based on integer part of rating
  const halfStar = validRating % 1 >= 0.5 ? 1 : 0; // Add half-star if fractional part >= 0.5
  const emptyStars = 5 - filledStars - halfStar; // Remaining empty stars

  const r = [
    ...Array(filledStars).fill('star'),
    ...Array(halfStar).fill('star-half-empty'),
    ...Array(emptyStars).fill('star-o'),
  ];
  
  return (
    <View style={styles.rating}>
      <Text style={styles.ratingNumber}>{validRating.toFixed(1)}</Text>
      {r.map((type, index) => {
        return <FontAwesome key={index} name={type} size={12} color="#FF3B30" />
      })}
    </View>
  )
}

export default Rating

const styles = StyleSheet.create({
    ratingNumber: { marginRight: 4, fontFamily: 'Menlo', fontSize: 14, color: "#F5F5F5" },
    rating: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 4
    },
});