import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import Navbar from "./src/navbar";
// import Stories from "./src/stories"; //this component render in Posts
import Posts from "./src/posts";
import Lowbar from "./src/lowbar";
import React, { createContext, useState } from "react";

export const ThemeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggleDarkMode }}
      style={{ backgroundColor: "red" }}
    >
      <SafeAreaView
        style={[{ flex: 1 }, { backgroundColor: isDarkMode ? "#fff" : "#000" }]}
      >
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={toggleDarkMode}>
            <Image
              style={styles.instatoggle}
              source={
                isDarkMode
                  ? require("./assets/3point-dark.png")
                  : require("./assets/3point.png")
              }
            />
          </TouchableWithoutFeedback>
          <Navbar />
          {/* <Stories /> this component render in Posts */}
          <Posts />
          <Lowbar
            style={{
              zIndex: 2,
            }}
          />
          <StatusBar
            style={isDarkMode ? "auto" : "light"}
            backgroundColor={isDarkMode ? "#fff" : "#000"}
          />
        </View>
        {/* <Button
        title={isDarkMode ? "Turn off Dark Mode" : "Turn on Dark Mode"}
        onPress={toggleDarkMode}
        color={isDarkMode ? "#fff" : "#000"}
        accessibilityLabel="Learn more about this purple button"

      /> */}
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
  },
  instatoggle: {
    zIndex: 11,
    position: "absolute",
    top: 10,
    right: 15,
    height: 30,
    width: 30,
    transform: [{ rotate: "90deg" }],
  },
});
