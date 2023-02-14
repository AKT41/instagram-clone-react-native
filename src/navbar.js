import { StyleSheet, View, Image } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../App";

function Navbar() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <View
      style={[
        styles.navContainer,
        { backgroundColor: isDarkMode ? "#fff" : "#000" },
      ]}
    >
      <Image
        style={{
          marginLeft: 20,
          marginTop: 5,
          zIndex: -11,
          position: "relative",
        }}
        source={
          isDarkMode
            ? require("../assets/insta-text.png")
            : require("../assets/insta-text-dark.png")
        }
      />

      <View style={styles.navicons}>
        <Image
          source={
            isDarkMode
              ? require("../assets/plus.png")
              : require("../assets/plus-dark.png")
          }
          style={styles.navicon1}
        />

        <Image
          source={
            isDarkMode
              ? require("../assets/heart.png")
              : require("../assets/heart-dark.png")
          }
          style={styles.navicon1}
        />

        <Image
          source={
            isDarkMode
              ? require("../assets/messanger.png")
              : require("../assets/messanger-dark.png")
          }
          style={styles.navicon}
        />
      </View>
    </View>
  );
}
export default Navbar;

const styles = StyleSheet.create({
  navContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: -5,
    marginLeft: 53,
    backgroundColor: "#fff",
    zIndex: 10,
  },
  navicons: {
    flexDirection: "row",
  },
  navicon: {
    width: 25,
    height: 25,
    marginRight: 12,
    marginTop: 5,
  },
  navicon1: {
    width: 25,
    height: 25,
    marginRight: 20,
    marginTop: 5,
  },
});
