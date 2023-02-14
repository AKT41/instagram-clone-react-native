import { StyleSheet, Image, View } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../App";

export default function lowbar() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#fff" : "#000" },
      ]}
    >
      <Image
        source={
          isDarkMode
            ? require("../assets/home.png")
            : require("../assets/home-dark.png")
        }
        style={[styles.Images, { marginLeft: 20 }]}
        resizeMode="cover"
      />
      <Image
        source={
          isDarkMode
            ? require("../assets/search.png")
            : require("../assets/search-dark.png")
        }
        style={styles.Images}
        resizeMode="cover"
      />
      <Image
        source={
          isDarkMode
            ? require("../assets/plus.png")
            : require("../assets/plus-dark.png")
        }
        style={styles.Images}
        resizeMode="cover"
      />
      <Image
        source={
          isDarkMode
            ? require("../assets/shopping.png")
            : require("../assets/shopping-dark.png")
        }
        style={styles.Images}
        resizeMode="cover"
      />
      <Image
        source={require("../assets/userpp-1.jpg")}
        style={[styles.Images, { borderRadius: 50, marginRight: 20 }]}
        // resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    borderTopWidth: 0.5,
    borderTopColor: "#808080",
  },
  Images: {
    width: 25,
    height: 25,
    margin: 10,
    // marginBottom: 40,
  },
});
