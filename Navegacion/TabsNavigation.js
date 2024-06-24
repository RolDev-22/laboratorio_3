import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Producto from "../Pages/Producto";
import Page_Listar from "../Pages/Page_Listar";
import Page_Aprender from "../Pages/Page_Aprender";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        initialRouteName: "Producto",
      }}
    >
      <Tab.Screen
        name="Producto"
        component={Producto}
        options={{
          tabBarLabel: "Productos",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="sprout" size={30} color="red" />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Listar"
        component={Page_Listar}
        options={{
          tabBarLabel: "Listar",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="format-list-text"
              size={30}
              color="red"
            />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Aprender"
        component={Page_Aprender}
        options={{
          tabBarLabel: "Aprender+",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="brain" size={30} color="red" />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default function TabsNavigation() {
  return <TabNavigation />;
}
