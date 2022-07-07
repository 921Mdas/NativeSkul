import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
import React from "react";

const CatGrid = ({ itemData, reactionPress }) => {
  return (
    <View style={styles.parent}>
      <Pressable
        android_ripple={{ color: "white" }}
        style={({ pressed }) =>
          pressed
            ? [
                styles.container,
                {
                  backgroundColor: itemData.item.color,
                  transform: [{ scale: 1.1 }],
                },
              ]
            : [styles.container, { backgroundColor: itemData.item.color }]
        }
        onPress={() => reactionPress(itemData)}
      >
        <Text style={styles.content}>{itemData.item.title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    overflow: "hidden",
  },
  container: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.3,
    marginHorizontal: 10,
    marginVertical: 10,
    overflow: Platform.select({ ios: "", android: "hidden" }),
  },
  content: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
});

export default CatGrid;
