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
import { useState } from "react";

import app from "../configFirebase/FirebaseConfig";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const imgEncabezado = require("../Images/img_fondo.jpg");
const db = getFirestore(app);

export default function Registrar() {
  const navigation = useNavigation();

  const inicioEstado = {
    nombreCompleto: "",
    email: "",
    clave: "",
  };

  const [estado, setEstado] = useState(inicioEstado);

  const HandleChangeText = (value, name) => {
    setEstado({ ...estado, [name]: value });
  };

  const RegistarUsuario = async () => {
    try {
      await addDoc(collection(db, "User"), { ...estado });

      navigation.navigate("Inicio");
    } catch {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={imgEncabezado} style={styles.image} />
      <Image source={require("../Images/logo_fruit.png")} style={styles.logo} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Crear cuenta nueva</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          onChangeText={(value) => HandleChangeText(value, "nombreCompleto")}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          onChangeText={(value) => HandleChangeText(value, "email")}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Comprobar contraseña"
          secureTextEntry={true}
          onChangeText={(value) => HandleChangeText(value, "clave")}
        />
        <TouchableOpacity onPress={RegistarUsuario} style={styles.button}>
          <Text style={styles.buttonText}>Registrarse</Text>
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
