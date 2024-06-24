import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Pages/Home";
import Page_Main from "../Pages/Page_Main";

const MyStacks = createNativeStackNavigator();

const Stacks = () => {
  return (
    <MyStacks.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: true }}
    >
      <MyStacks.Screen name="Inicio" component={Home}></MyStacks.Screen>
      <MyStacks.Screen name="Main" component={Page_Main}></MyStacks.Screen>
    </MyStacks.Navigator>
  );
};

export default function Navegacion() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}
