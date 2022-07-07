import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Pressable,
} from "react-native";
import { useFonts } from "expo-font";
import * as Splash from "expo-splash-screen";

import Resto from "./screens/Resto";
import Meal from "./screens/Meal";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { IonIcons, Entypo } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  let [fontloaded] = useFonts({
    PoppinsBlack: require("./assets/fonts/Poppins-Black.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontloaded) {
    Splash.preventAutoHideAsync();
  } else {
    Splash.hideAsync();
  }

  return (
    <NavigationContainer>
      <StackTwo />
    </NavigationContainer>
  );
}

const StackOne = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Home"
        component={Resto}
        options={{
          title: "Daily Meal Plan",
          headerRight: () => {
            return (
              <Pressable>
                <View>
                  <Entypo name="bell" size={24} color="black" />
                </View>
              </Pressable>
            );
          },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Meal}
        options={({ route, navigation }) => {
          return {
            title: route.params.title,
          };
        }}
      />
    </Stack.Navigator>
  );
};

const StackTwo = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Resto} />
      <Drawer.Screen name="Meal" component={Meal} />
    </Drawer.Navigator>
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
