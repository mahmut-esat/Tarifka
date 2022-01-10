import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import {} from "react-native-web";
import styles from "./CategoryCard.style";

const CategoryCard = ({ category, onSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.inner_container}>
          <Image
            style={styles.image}
            source={{ uri: category.strCategoryThumb }}
          />
          <View style={styles.text_container}>
            <Text style={styles.title}>{category.strCategory}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCard;
