import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {} from "react-native-web";
import styles from "./MealCard.style";

const MealCard = ({ meal, onSelect }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <View style={styles.inner_container}>
        <Image style={styles.image} source={{ uri: meal.strMealThumb }} />
        <Text style={styles.title}>{meal.strMeal}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MealCard;
