import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const imgEncabezado = require("../Images/img_fondo.jpg");

export default function Producto() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={imgEncabezado} style={styles.image} />
      <Image source={require("../Images/logo_fruit.png")} style={styles.logo} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Productos</Text>
        <TextInput style={styles.input} placeholder="Nombre Producto" />
        <TextInput style={styles.input} placeholder="Código Producto" />
        <TextInput style={styles.input} placeholder="Cantidad" />
        <TextInput style={styles.input} placeholder="Fecha Caducidad" />
        <TouchableOpacity
          onPress={() => navigation.navigate("Inicio")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  logo: {
    position: "absolute",
    zIndex: 1,
    width: 150,
    height: 150,
    top: 10,
    right: 10,
  },
  formContainer: {
    width: "70%",
    height: 450,
    padding: 20,
    backgroundColor: "#d9d9d9",
    borderRadius: 20,
    marginTop: -50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    paddingLeft: 50,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: "90%",
    height: 40,
    backgroundColor: "#871F1F",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
