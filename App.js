import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "./src/pages/Category";
import Meal from "./src/pages/Meal";
import Detail from "./src/pages/Detail/Detail";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoryPage"
          component={Category}
          options={{
            title: "Categories",
            headerTintColor: "#ffc107",
          }}
        />
        <Stack.Screen
          name="MealPage"
          component={Meal}
          options={{
            title: "Meals",
            headerTintColor: "#ffc107",
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: "Details",
            headerTintColor: "#ffc107",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
