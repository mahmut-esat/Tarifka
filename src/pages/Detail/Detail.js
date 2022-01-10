import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import useFetch from "../../hooks/useFetch";
import { DETAILS_URL } from "@env";
import DetailCard from "../../components/DetailCard";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Detail = ({ route }) => {
  const { idMeal } = route.params;

  const { datas, loading, error } = useFetch(`${DETAILS_URL}${idMeal}`);

  const renderDetail = ({ item }) => <DetailCard detail={item} />;


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
        data={datas.meals}
        renderItem={renderDetail}
        keyExtractor={(item) => item.idMeal}
      />
    </View>
  );
};

export default Detail;
