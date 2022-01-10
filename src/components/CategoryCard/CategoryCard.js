import React from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
import {  } from "react-native-web";
import styles from "./CategoryCard.style";

const CategoryCard = ({category, onSelect}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}> 
      <View style={styles.inner_container}>
        <Image style={styles.image} source={{uri: category.strCategoryThumb}}/>
        <View style={styles.text_container}>
          <Text style={styles.title}>{category.strCategory}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
