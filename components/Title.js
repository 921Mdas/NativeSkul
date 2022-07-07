import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FONTS } from "../assets/Fonts";

const Title = ({ children }) => {
  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <Text style={styles.title}>{children}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignSelf: "stretch",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    textAlign: "center",
  },
});

export default Title;
