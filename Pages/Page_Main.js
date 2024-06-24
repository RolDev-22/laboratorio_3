import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TabsNavigation from "../Navegacion/TabsNavigation";

export default function Page_Main() {
  return <TabsNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
