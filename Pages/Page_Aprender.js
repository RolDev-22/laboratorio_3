import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  TextInput,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function Page_Aprender() {
  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filtro, setFiltro] = useState([]);
  const [buscar, setBuscar] = useState("");

  const getFruit = async () => {
    try {
      const response = await fetch("https://www.fruityvice.com/api/fruit/all");
      const json = await response.json();
      console.log(json);
      setData(json);
      setFiltro(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFruit();
  }, []);

  const handleSearch = (text) => {
    setBuscar(text);
    const busqueda = data.filter((item) => {
      const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setFiltro(busqueda);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerpt1}>
        <Text style={styles.txtTitulo}>PAGINA APRENDER</Text>
      </View>

      <View style={styles.containerpt2}>
        <View style={styles.containerBuscar}>
          <TextInput
            style={styles.searchBar}
            placeholder="Buscar por nombre"
            value={buscar}
            onChangeText={(text) => handleSearch(text)}
          />
        </View>

        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            contentContainerStyle={styles.styleFlatList}
            data={filtro}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.containerData}>
                <Text style={styles.txtTittle}>{item.name}</Text>
                <Text style={styles.txtDato}>Familia: {item.family}</Text>
                <Text style={styles.txtDato}>Datos Nutricionales:</Text>
                <Text style={styles.txtDato}>
                  Calorías: {item.nutritions.calories}
                </Text>
                <Text style={styles.txtDato}>Grasa: {item.nutritions.fat}</Text>
                <Text style={styles.txtDato}>
                  Azúcar: {item.nutritions.sugar}
                </Text>
                <Text style={styles.txtDato}>
                  Carbohidratos: {item.nutritions.carbohydrates}
                </Text>
                <Text style={styles.txtDato}>
                  Proteína: {item.nutritions.protein}
                </Text>

                <TouchableOpacity style={styles.touchLike}>
                  <AntDesign name="heart" size={44} color="red" />
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  containerpt1: {
    height: "10%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  txtTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#34434D",
  },

  containerBuscar: {
    height: "10%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  searchBar: {
    height: 40,
    borderColor: "#34434D",
    borderWidth: 1,
    borderRadius: 5,
    width: "90%",
    paddingLeft: 10,
    margin: 10,
  },

  containerpt2: {
    flex: 1,
    width: "100%",
    alignItems: "left",
    padding: 10,
  },

  styleFlatList: {
    width: "100%",
    flexDirection: "column",
    padding: 10,
  },

  containerData: {
    flex: 1,
    width: "48%",
    height: 250,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.05)",
    padding: 5,
    borderRadius: 10,
    margin: 5,
  },

  txtTittle: {
    width: "90%",
    height: 50,
    fontSize: 30,
    fontWeight: "bold",
    color: "#34434D",
    textAlign: "left",
  },
  txtDato: {
    width: "90%",
    height: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "#34434D",
    textAlign: "left",
  },

  touchLike: {
    width: 50,
    height: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  btnNext: {
    borderRadius: 30,
    width: 219,
    height: 53,
    textAlign: "center",
    padding: 10,
  },
});
