import React from "react";
import { View, Text, FlatList } from "react-native";
import useFetch from "../../hooks/useFetch";
import { CATEGORY_URL } from "@env";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import styles from "./Category.style";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Category = ({ navigation }) => {
  const { datas, loading, error } = useFetch(CATEGORY_URL);

  const handleCategory = (strCategory) => {
    navigation.navigate("MealPage", { strCategory });
  };
  const renderCategory = ({ item }) => (
    <CategoryCard
      category={item}
      onSelect={() => {
        handleCategory(item.strCategory);
      }}
    />
  );

/*   if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
 */
  return (
    <View>
      <FlatList
        data={datas.categories}
        renderItem={renderCategory}
        keyExtractor={(item) => {
          item.idCategory;
        }}
      />
    </View>
  );
};

export default Category;
