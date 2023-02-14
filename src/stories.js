import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { ThemeContext } from "../App";
// import LinearGradient from 'react-native-linear-gradient';
import { stories } from "./data-story";

const Story = ({ item }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View style={styles.storyContainer}>
      <Image source={item.image} style={styles.storyImage} resizeMode="cover" />
      <Text
        style={[
          styles.storyName,
          {
            color: isDarkMode ? "#000" : "#fff",
          },
        ]}
      >
        {item.name}
      </Text>
    </View>
  );
};
const Stories = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <View
      style={[
        {
          position: "absolute",
          top: 55,
          height: 105,
          borderBottomWidth: 1,
          borderBottomColor: "#8080803a",
        },
        isDarkMode ? { backgroundColor: "#fff" } : { backgroundColor: "#000" },
      ]}
    >
      <FlatList
        data={stories}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Story item={item} />}
      />
    </View>
  );
};

export default Stories;
const styles = StyleSheet.create({
  storyContainer: {
    alignItems: "center",
    padding: 7,
    paddingRight: 0,
    height: 110,
    marginLeft: 10,
  },
  storyImage: {
    width: 75,
    height: 75,
    borderRadius: 20,
    marginBottom: 2,
  },
  storyName: {
    fontSize: 11,
    fontWeight: "500",
    letterSpacing: 1,
  },
});
