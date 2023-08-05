import { StyleSheet } from "react-native";

export const globals = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  heading: {
    color: "#0e153a",
    fontSize: 32,
    fontFamily: "productsansregular",
    marginBottom: 24,
  },
  text: {
    fontFamily: "productsansregular",
    fontSize: 15,
    color: "#3d5af1",
    marginBottom: 24,
    lineHeight: 28,
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
  button: {
    fontFamily: "productsansregular",
    backgroundColor: "#3d5af1",
    color: "#ffffff",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 4,
  },
});
