import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import {} from "react-native-web";
import styles from "./MealCard.style";

const MealCard = ({ meal, onSelect }) => {
  return (
    <TouchableWithoutFeedback  onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.inner_container}>
          <Image style={styles.image} source={{ uri: meal.strMealThumb }} />
          <Text style={styles.title}>{meal.strMeal}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
