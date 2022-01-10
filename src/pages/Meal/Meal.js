import React from "react";
import { View, FlatList, Text } from "react-native";
import styles from "./Meal.style";
import useFetch from "../../hooks/useFetch";
import { MEAL_URL } from "@env";
import MealCard from "../../components/MealCard/MealCard";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Meal = ({ route, navigation }) => {
  const { strCategory } = route.params;
  const { datas, loading, error } = useFetch(`${MEAL_URL}${strCategory}`);

  const handleMealSelect = (idMeal) => {
    navigation.navigate("DetailPage", { idMeal });
  };

  const renderMeal = ({item}) => (
    <MealCard meal={item} onSelect={() => handleMealSelect(item.idMeal)} />
  );

    if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

 
  return (
    <View>
      <FlatList
        data={datas.meals}
        renderItem={renderMeal}
        keyExtractor={(item) => item.idMeal}
      />
    </View>
  );
};

export default Meal;
