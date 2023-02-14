import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ThemeContext } from "./App";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "#000",
  },
  darkContainer: {
    backgroundColor: "red",
  },
  darkText: {
    color: "yellow",
  },
});
const AnotherComponent = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : null]}>
      <Text style={[styles.text, isDarkMode ? styles.darkText : null]}>
        Another Component
      </Text>
      <Text
        style={[styles.text, { backgroundColor: isDarkMode ? "yellow" : "blue" }]}
      >Ahmet Kemal</Text>
    </View>
  );
};

export default AnotherComponent;
