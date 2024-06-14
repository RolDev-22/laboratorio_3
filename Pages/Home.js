import React from "react";

import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const imgBg = require("../Images/img_fondo.jpg");

export default function Home() {
  const navigation = useNavigation();
  return (
    <ImageBackground style={styles.bgMain} source={imgBg}>
      <View style={styles.container}>
        <View style={styles.viewLogo}>
          <Image
            style={{ width: "50%", height: "60%" }}
            source={require("../Images/logo_fruit.png")}
          ></Image>
        </View>

        <View style={styles.Inputs}>
          <TextInput
            placeholder="Correo electrónico"
            placeholderTextColor={"#871F1F"}
            style={styles.InpustText}
          ></TextInput>

          <TextInput
            placeholder="Contraseña"
            placeholderTextColor={"#871F1F"}
            style={styles.InpustText}
          ></TextInput>

          <TouchableOpacity
            onPress={() => navigation.navigate("Producto")}
            style={styles.touchIngresar}
          >
            <Text style={styles.textTouch}>Ingresar</Text>
          </TouchableOpacity>

          <View style={styles.viewText}>
            <Text style={styles.txtText}>Crear cuenta nueva</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Registrar")}
              style={styles.touchLinks}
            >
              <Text style={styles.txtLinks}>Registrate</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.touchLinks}>
            <Text style={styles.txtLinks}>Olvidó contraseña?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgMain: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },

  viewLogo: {
    width: "90%",
    height: "30%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },

  Inputs: {
    width: "100%",
    height: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 20,
  },

  InpustText: {
    width: "80%",
    height: 50,
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    color: "#fff",
    fontSize: 20,
    textAlign: "justify",
    paddingLeft: 70,
  },

  touchIngresar: {
    width: "65%",
    height: 50,
    display: "flex",
    borderRadius: 30,
    backgroundColor: "#871F1F",
  },

  textTouch: {
    width: "100%",
    height: "100%",
    display: "flex",
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    paddingTop: 10,
  },

  viewText: {
    width: "60%",
    height: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10,
  },

  txtLinks: {
    color: "#fff",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },

  txtText: {
    color: "#fff",
    fontSize: 15,
  },
});
