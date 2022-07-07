import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { IonIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { MEALS } from "../data/dummy-data";

const Meal = ({ route, navigation }) => {
  const { title, id, color } = route.params;

  const Meals = MEALS.filter(m => m.categoryIds.indexOf(id) > -1);

  const orderFood = () => {
    console.log("your food has been ordered");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <MaterialCommunityIcons
            name="food-turkey"
            size={30}
            color={"black"}
            onPress={() =>
              Alert.alert("Your order", "ready to order?", [
                {
                  text: "order now",
                  onPress: () => orderFood(),
                },
                {
                  text: "cancel",
                  onPress: () => console.log("cancel"),
                },
              ])
            }
          />
        );
      },
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 20,
            backgroundColor: color,
            flex: 1,
          }}
        >
          <Text>{title}</Text>
          <View>
            {Meals.map(el => (
              <View key={el.id}>
                <View>
                  <Image
                    source={{ uri: el.imageUrl, width: 350, height: 300 }}
                    resizeMode="cover"
                  />
                </View>
                <View>
                  <Text>{el.affordability}</Text>
                  <Text>{el.complexity}</Text>
                  <Text>{el.duration} minutes</Text>
                </View>

                <View>
                  <Text>
                    {el.ingredients.forEach(ing => (
                      <Text>{ing}</Text>
                    ))}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Meal;
