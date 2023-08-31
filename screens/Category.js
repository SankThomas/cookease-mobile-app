import { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { globals } from "../styles/globals";

export default function Category({ route, navigation }) {
  const [meals, setMeals] = useState([]);

  async function fetchMeals() {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${route.params.strCategory}`
    );
    const data = await res.json();
    setMeals(data.meals);
  }

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={globals.container}>
      <View style={styles.container}>
        <Text style={globals.heading}>{route.params.strCategory}</Text>
        <Text style={globals.text}>{route.params.strCategoryDescription}</Text>

        {!meals ? (
          <ActivityIndicator size="large" color="#0e153a" />
        ) : (
          <View style={styles.grid}>
            {meals.map((meal) => (
              <Pressable
                onPress={() => navigation.navigate("Meal", meal)}
                key={meal.idMeal}
                style={styles.card}
              >
                <Image
                  style={styles.image}
                  source={{ uri: meal.strMealThumb }}
                />
                <Text style={styles.mealName}>{meal.strMeal}</Text>
              </Pressable>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  grid: {
    alignItems: "center",
    gap: 32,
  },
  card: {
    padding: 20,
    backgroundColor: "#22d1ee20",
    borderRadius: 16,
  },
  image: {
    width: 280,
    height: 200,
    borderRadius: 16,
  },
  mealName: {
    fontFamily: "productsansregular",
    color: "#0e153a",
    fontSize: 18,
    marginTop: 10,
  },
});
