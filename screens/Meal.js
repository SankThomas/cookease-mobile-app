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

export default function Meal({ route, navigation }) {
  const [meals, setMeals] = useState([]);

  async function getSingleMeal() {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${route.params.strMeal}`
    );
    const data = await res.json();
    setMeals(data.meals);
  }

  useEffect(() => {
    getSingleMeal();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={globals.container}>
      <View style={styles.container}>
        <Text style={globals.heading}>{route.params.strMeal}</Text>

        {!meals ? (
          <ActivityIndicator size="large" color="#0e153a" />
        ) : (
          <View>
            {meals.map((meal) => (
              <View key={meal.idMeal}>
                <Image
                  style={styles.image}
                  source={{ uri: meal.strMealThumb }}
                />

                <View style={styles.ingredients}>
                  {/* I realize this is not a good way to do this: please don't chew my head off (maybe a little bit) and then offer a better way. Thanks! :) */}
                  <Text style={styles.mealName}>Ingredients</Text>

                  {meal.strMeasure1 && meal.strIngredient1 ? (
                    <Text style={styles.text}>
                      1. {meal.strMeasure1} {meal.strIngredient1}
                    </Text>
                  ) : null}

                  {meal.strMeasure2 && meal.strIngredient2 ? (
                    <Text style={styles.text}>
                      2. {meal.strMeasure2} {meal.strIngredient2}
                    </Text>
                  ) : null}

                  {meal.strMeasure3 && meal.strIngredient3 ? (
                    <Text style={styles.text}>
                      3. {meal.strMeasure3} {meal.strIngredient3}
                    </Text>
                  ) : null}

                  {meal.strMeasure4 && meal.strIngredient4 ? (
                    <Text style={styles.text}>
                      4. {meal.strMeasure4} {meal.strIngredient4}
                    </Text>
                  ) : null}

                  {meal.strMeasure5 && meal.strIngredient5 ? (
                    <Text style={styles.text}>
                      5. {meal.strMeasure5} {meal.strIngredient5}
                    </Text>
                  ) : null}

                  {meal.strMeasure6 && meal.strIngredient6 ? (
                    <Text style={styles.text}>
                      6. {meal.strMeasure6} {meal.strIngredient6}
                    </Text>
                  ) : null}

                  {meal.strMeasure7 && meal.strIngredient7 ? (
                    <Text style={styles.text}>
                      7. {meal.strMeasure7} {meal.strIngredient7}
                    </Text>
                  ) : null}

                  {meal.strMeasure8 && meal.strIngredient8 ? (
                    <Text style={styles.text}>
                      8. {meal.strMeasure8} {meal.strIngredient8}
                    </Text>
                  ) : null}

                  {meal.strMeasure9 && meal.strIngredient9 ? (
                    <Text style={styles.text}>
                      9. {meal.strMeasure9} {meal.strIngredient9}
                    </Text>
                  ) : null}

                  {meal.strMeasure10 && meal.strIngredient10 ? (
                    <Text style={styles.text}>
                      10. {meal.strMeasure10} {meal.strIngredient10}
                    </Text>
                  ) : null}

                  {meal.strMeasure11 && meal.strIngredient11 ? (
                    <Text style={styles.text}>
                      11. {meal.strMeasure11} {meal.strIngredient11}
                    </Text>
                  ) : null}

                  {meal.strMeasure12 && meal.strIngredient12 ? (
                    <Text style={styles.text}>
                      12. {meal.strMeasure12} {meal.strIngredient12}
                    </Text>
                  ) : null}

                  {meal.strMeasure13 && meal.strIngredient13 ? (
                    <Text style={styles.text}>
                      13. {meal.strMeasure13} {meal.strIngredient13}
                    </Text>
                  ) : null}

                  {meal.strMeasure14 && meal.strIngredient14 ? (
                    <Text style={styles.text}>
                      14. {meal.strMeasure14} {meal.strIngredient14}
                    </Text>
                  ) : null}

                  {meal.strMeasure15 && meal.strIngredient15 ? (
                    <Text style={styles.text}>
                      15. {meal.strMeasure15} {meal.strIngredient15}
                    </Text>
                  ) : null}

                  {meal.strMeasure16 && meal.strIngredient16 ? (
                    <Text style={styles.text}>
                      16. {meal.strMeasure16} {meal.strIngredient16}
                    </Text>
                  ) : null}

                  {meal.strMeasure17 && meal.strIngredient17 ? (
                    <Text style={styles.text}>
                      17. {meal.strMeasure17} {meal.strIngredient17}
                    </Text>
                  ) : null}

                  {meal.strMeasure18 && meal.strIngredient18 ? (
                    <Text style={styles.text}>
                      18. {meal.strMeasure18} {meal.strIngredient18}
                    </Text>
                  ) : null}

                  {meal.strMeasure19 && meal.strIngredient19 ? (
                    <Text style={styles.text}>
                      19. {meal.strMeasure19} {meal.strIngredient19}
                    </Text>
                  ) : null}

                  {meal.strMeasure20 && meal.strIngredient20 ? (
                    <Text style={styles.text}>
                      20. {meal.strMeasure20} {meal.strIngredient20}
                    </Text>
                  ) : null}
                </View>

                <View style={styles.ingredients}>
                  <Text style={styles.mealName}>How to cook</Text>
                  <Text style={globals.text}>{meal.strInstructions}</Text>
                </View>
              </View>
            ))}
          </View>
        )}
        <Pressable
          onPress={() => navigation.goBack()}
          style={globals.buttonContainer}
        >
          <Text style={globals.button}>View More Meals</Text>
        </Pressable>
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
    alignItems: "center",
    padding: 20,
    backgroundColor: "#22d1ee20",
    borderRadius: 16,
  },
  image: {
    resizeMode: "cover",
    width: 320,
    height: 200,
    borderRadius: 16,
    marginBottom: 24,
  },
  ingredients: {
    marginBottom: 24,
  },
  mealName: {
    fontFamily: "productsansregular",
    color: "#0e153a",
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    fontFamily: "productsansregular",
    color: "#3d5af1",
    lineHeight: 24,
    marginBottom: 4,
  },
});
