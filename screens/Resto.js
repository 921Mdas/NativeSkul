import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

import { CATEGORIES } from "../data/dummy-data";
import CatGrid from "../components/CatGrid";
import Title from "../components/Title";
import { Ionicons } from "@expo/vector-icons";

const Resto = ({ navigation }) => {
  const reactionPress = data => {
    navigation.navigate("Detail", {
      id: data.item.id,
      title: data.item.title,
      color: data.item.color,
    });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Title>
          <Ionicons name="fast-food" size={24} color={"gray"} />
        </Title>
        <FlatList
          data={CATEGORIES}
          renderItem={itemData => (
            <CatGrid itemData={itemData} reactionPress={reactionPress} />
          )}
          key={"#"}
          keyExtractor={item => "#" + item.id}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24180f",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.select({ ios: 0, android: 20 }),
  },
});

export default Resto;
