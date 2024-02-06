import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../../../context/UserProvider";
import fundoAzul from "../../../../assets/fundoAzul.jpg";
import logoVoxVertical from "../../../../assets/Vox_Logo_Vertical.png";
import Email from "../../inputs/email";
import Senha from "../../inputs/senha";
import { Icon } from "@rneui/themed";
import { Alert } from "../Alert/index";

export default function RedefinirSenha() {
  const { loading } = useContext(UserContext);
  const [login, setLogin] = useState({ email: "", senha: "" });
  const [isModalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const allInputs = {
    email: <Email captureText={captureText} />,
    senha: <Senha captureText={captureText} placeholder={"nova senha"} />,
    Repitirsenha: (
      <Senha captureText={captureText} placeholder={"repita a nova senha"} />
    ),
  };

  function captureText(text, name) {
    setLogin({
      ...login,
      [name]: text,
    });
  }

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Image source={fundoAzul} style={styles.backgroundImage} />
      <View style={styles.overlayContainer}>
        <View style={styles.mainContainer}>
          <Image source={logoVoxVertical} style={styles.logo} />
          <View style={styles.containerWelcome}>
            <Icon name="heart" type="ionicon" size={28} color={"#A6C73D"} />
            <Text style={styles.textWelcome}>Redefinir senha</Text>
          </View>
          {Object.keys(allInputs).map((key, index) => (
            <View key={index} style={styles.inputContainer}>
              {allInputs[key]}
            </View>
          ))}
          <TouchableOpacity
            style={styles.btnEntrar}
            onPress={() => {
              openModal();
            }}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#9ac31c" />
            ) : (
              <Text style={styles.btnText}>Alterar senha</Text>
            )}
          </TouchableOpacity>
          {isModalVisible && <Alert onClose={closeModal} />}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  overlayContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    width: "100%",
  },
  mainContainer: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 3,
    width: "100%",
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  logo: {
    width: "70%",
    height: 120,
    maxHeight: 200,
    marginBottom: 20,
  },
  containerWelcome: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    margin: 20,
    marginLeft: 10,
  },
  textWelcome: {
    color: "#142a4c",
    fontSize: 17,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
    height: 70,
  },
  btnEntrar: {
    width: "95%",
    height: 50,
    borderRadius: 5,
    backgroundColor: "#142a4c",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  btnText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  containerButtonBack: {
    position: "absolute",
    top: 30,
    left: 20,
  },
});
