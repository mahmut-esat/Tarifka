import React from "react";
import { View, Text, Image, ScrollView, Button, Linking } from "react-native";
import styles from "./DetailCard.style";

const DetailCard = ({ detail }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Image style={styles.image} source={{ uri: detail.strMealThumb }} />
        <View style={styles.text_container}>
          <Text style={styles.title}>{detail.strMeal}</Text>
          <ScrollView style={styles.text}>{detail.strInstructions}</ScrollView>
          <Button
            style={styles.button}
            title="Watch on Youtube"
            color="red"
            onPress={() => Linking.openURL(detail.strYoutube)}
          />
        </View>
      </View>
    </View>
  );
};

export default DetailCard;
