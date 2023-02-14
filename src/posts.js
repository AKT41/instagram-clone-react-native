import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import { ScrollView } from "react-native";
import Stories from "./stories";
import { ThemeContext } from "../App";
import { item } from "./data";


function posts() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <ScrollView
      style={[
        {
          backgroundColor: "transparent",
          width: "100%",
          zIndex: -1,
        },
        { backgroundColor: isDarkMode ? "#fff" : "#000" },
      ]}
    >
      <Stories />
      <View
        style={{
          marginTop: 160,
          marginBottom: 100,
        }}
      >
        {item.map((item) => (
          <View
            style={{
              width: "100%",
              // marginTop: 10,
              flexDirection: "column",
              justifyContent: "space-between",
              // backgroundColor: "gray",
            }}
          >
            <View style={styles.postTop}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  style={styles.usericon}
                  source={item.userpp}
                  // resizeMode="stretch"
                />
                <Text
                  style={[styles.n, { color: isDarkMode ? "#000" : "#fff" }]}
                >
                  {item.username}{" "}
                </Text>
              </View>
              <Image
                style={styles.iconpoint}
                source={
                  isDarkMode
                    ? require("../assets/3point.png")
                    : require("../assets/3point-dark.png")
                }
              />
            </View>
            <Image
              style={{
                width: "100%",
                height: 350,
              }}
              source={item.postimage}
              resizeMode="contain"
            />
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10,
                  marginBottom: 10,
                  marginHorizontal: 11,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: 20,
                      marginLeft: 5,
                    }}
                    source={
                      isDarkMode
                        ? require("../assets/heart.png")
                        : require("../assets/heart-dark.png")
                    }
                  />
                  <Image
                    style={{ width: 25, height: 25, marginRight: 20 }}
                    source={
                      isDarkMode
                        ? require("../assets/comment.png")
                        : require("../assets/comment-dark.png")
                    }
                  />
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                    }}
                    source={
                      isDarkMode
                        ? require("../assets/send.png")
                        : require("../assets/send-dark.png")
                    }
                  />
                </View>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    marginRight: 6,
                    cssFloat: "right",
                  }}
                  source={
                    isDarkMode
                      ? require("../assets/save.png")
                      : require("../assets/save-dark.png")
                  }
                />
              </View>
              <Text
                style={[
                  {
                    fontWeight: "bold",
                    marginLeft: 20,
                    marginHorizontal: 10,
                  },
                  { color: isDarkMode ? "#000" : "#fff" },
                ]}
              >
                {item.likes}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginTop: 5,
                  marginBottom: 7,
                  marginHorizontal: 10,
                }}
              >
                <Text
                  style={[
                    {
                      marginLeft: 10,
                      marginRight: 23,
                      fontWeight: "bold",
                    },
                    { color: isDarkMode ? "#000" : "#fff" },
                  ]}
                >
                  {item.username}
                  <Text
                    style={{ marginLeft: 32, fontWeight: "normal" }}
                  >
                    &nbsp; {item.caption}
                  </Text>
                </Text>
              </View>
              <Text style={{ marginLeft: 20, color: "#808080" }}>
                {item.comments}
              </Text>

              <Text
                style={{
                  marginLeft: 18,
                  color: "#808080",
                  marginBottom: 10,
                  marginTop: 6,
                  marginRight: 10,
                }}
              >
                {item.loadTime}
                <Text style={[{ color: isDarkMode ? "#fff" : "#000" }]}>
                  See translation
                </Text>
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default posts;

const styles = StyleSheet.create({
  n: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "sans-serif",
    color: "black",
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 10,
  },
  usericon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginLeft: 10,
    marginTop: 15,
    marginBottom: 10,
  },
  postTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#8080803a",
    // marginBottom: 10,
  },
  iconpoint: {
    width: 30,
    height: 30,
    transform: [{ rotate: "90deg" }],
    marginRight: 10,
    marginTop: 15,
    marginBottom: 10,
  },
});
