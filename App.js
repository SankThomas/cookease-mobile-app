import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

// Screens
import Home from "./screens/Home";
import Meal from "./screens/Meal";
import Category from "./screens/Category";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    productsansregular: require("./assets/fonts/product-sans-regular.ttf"),
    productsansbold: require("./assets/fonts/product-sans-bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#3d5af1" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#3d5af1",
          },
          headerTintColor: "#fff",
          gestureEnabled: true,
          gestureDirection: "horizontal",
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: "Welcome",
            headerTitleStyle: {
              fontFamily: "productsansbold",
            },
          }}
        />
        <Stack.Screen
          name="Meal"
          component={Meal}
          options={{
            headerTitle: "How To Prepare",
            headerTitleStyle: {
              fontFamily: "productsansbold",
            },
          }}
        />
        <Stack.Screen
          name="Category"
          component={Category}
          options={{
            headerTitle: "Browse Meals",
            headerTitleStyle: {
              fontFamily: "productsansbold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
