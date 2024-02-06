import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import logoVoxVertical from "../../../../assets/Vox_Logo_Vertical.png";

export const Alert = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.overlay} />
      <View style={styles.modalContent}>
        <Image source={logoVoxVertical} style={styles.logo} />
        <Text style={styles.text}>
          Senha alterada com sucesso! Acesse com a senha nova.
        </Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            onClose();
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.textbutton}>Ir para o login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  logo: {
    width: 120,
    height: 120,
    maxHeight: 200,
    marginBottom: 20,
  },
  modalContent: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 35,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: "#142a4c",
    textAlign: "center",
    fontWeight: "bold",
  },

  loginButton: {
    display: "flex",
    width: 180,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#142a4c",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  textbutton: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
