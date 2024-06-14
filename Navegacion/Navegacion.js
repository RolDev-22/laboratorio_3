import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Pages/Home";
import Registrar from "../Pages/Registrar";
import Producto from "../Pages/Producto";

const MyStacks = createNativeStackNavigator();

const Stacks = () => {
  return (
    <MyStacks.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <MyStacks.Screen name="Inicio" component={Home}></MyStacks.Screen>
      <MyStacks.Screen name="Registrar" component={Registrar}></MyStacks.Screen>
      <MyStacks.Screen name="Producto" component={Producto}></MyStacks.Screen>
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
