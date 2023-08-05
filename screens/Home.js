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

export default function Home({ navigation }) {
  const [categories, setCategories] = useState([]);

  async function fetchMeals() {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = await res.json();
    setCategories(data.categories);
  }

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <ScrollView style={globals.container}>
      <View style={styles.container}>
        <Text style={globals.heading}>Browse Meal Categories</Text>

        {!categories ? (
          <ActivityIndicator size="large" color="#0e153a" />
        ) : (
          <View style={styles.grid}>
            {categories.map((category) => (
              <Pressable
                onPress={() => navigation.navigate("Category", category)}
                key={category.idCategory}
                style={styles.card}
              >
                <Image
                  style={styles.image}
                  source={{ uri: category.strCategoryThumb }}
                />
                <Text style={styles.mealName}>{category.strCategory}</Text>
                <Text style={globals.text}>
                  {`${category.strCategoryDescription.substring(0, 100)}...`}
                </Text>
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
    alignItems: "center",
    padding: 20,
    backgroundColor: "#22d1ee20",
    borderRadius: 16,
    width: 320,
  },
  image: {
    width: 280,
    height: 180,
    borderRadius: 16,
  },
  mealName: {
    fontFamily: "productsansregular",
    color: "#0e153a",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 16,
  },
});
