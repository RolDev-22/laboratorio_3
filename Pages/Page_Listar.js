import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import app from "../configFirebase/FirebaseConfig";
import {
  collection,
  getFirestore,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

const db = getFirestore(app);

export default function Page_Listar() {
  const [listar, setListar] = useState([]);

  useEffect(() => {
    const getListar = async () => {
      try {
        const qyCollection = await getDocs(collection(db, "Product"));
        const productos = [];
        qyCollection.forEach((doc) => {
          const {
            codigoProducto,
            nombreProducto,
            cantidadProducto,
            fechaCaduca,
          } = doc.data();
          productos.push({
            id: doc.id,
            codigoProducto,
            nombreProducto,
            cantidadProducto,
            fechaCaduca,
          });
        });
        console.log("Productos obtenidos:", productos); // Log para verificar los datos
        setListar(productos);
      } catch (error) {
        console.log("Error al obtener los productos: ", error);
      }
    };
    getListar();
  }, []); // Solo ejecuta una vez

  const eliminarProducto = async (id) => {
    try {
      await deleteDoc(doc(db, "Product", id));
      Alert.alert("Producto eliminado exitosamente");
      setListar(listar.filter((item) => item.id !== id));
    } catch (error) {
      console.log("Error al eliminar el producto: ", error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Listado de Productos</Text>
      <Text style={styles.indicacion}>
        Precione el producto que desea eliminar
      </Text>

      <View style={styles.txtEncabezado}>
        <Text style={styles.encabezado}>Código</Text>
        <Text style={styles.encabezado}>Nombre</Text>
        <Text style={styles.encabezado}>Cantidad</Text>
        <Text style={styles.encabezado}>Fecha Caduca</Text>
      </View>
      <View style={styles.contScroll}>
        {listar.length > 0 ? (
          listar.map((lista) => (
            <TouchableOpacity
              key={lista.id}
              style={styles.txtSubtitulo}
              onPress={() => eliminarProducto(lista.id)}
            >
              <Text style={styles.itemList}> {lista.codigoProducto} </Text>
              <Text style={styles.itemList}> {lista.nombreProducto} </Text>
              <Text style={styles.itemList}> {lista.cantidadProducto} </Text>
              <Text style={styles.itemList}> {lista.fechaCaduca} </Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text>No hay productos disponibles</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    textAlign: "center",
    fontSize: 35,
    height: 70,
    paddingTop: 10,
  },
  contScroll: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 10,
  },
  txtEncabezado: {
    display: "flex",
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(10, 150, 35, 0.3)",
  },
  txtSubtitulo: {
    display: "flex",
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(120, 150, 200, 0.3)",
  },
  encabezado: {
    width: "25%",
    textAlign: "center",
    fontSize: 22,
    color: "green",
  },
  itemList: {
    width: "25%",
    textAlign: "center",
    fontSize: 18,
  },

  indicacion: {
    textAlign: "center",
    fontSize: 20,
  },
});
