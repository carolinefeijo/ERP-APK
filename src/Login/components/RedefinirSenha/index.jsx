import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { UserContext } from "../../../../context/UserProvider";
import { Icon } from "@rneui/themed";
import { createURL } from "expo-linking";
import { useRoute } from "@react-navigation/native";
import fundoAzul from "../../../../assets/fundoAzul.jpg";
import logoVoxVertical from "../../../../assets/Vox_Logo_Vertical.png";
import Email from "../../inputs/email";
import Senha from "../../inputs/senha";

export default function RedefinirSenha() {
  const route = useRoute();
  const url = createURL("/Confirmar");
  const { redefinirSenha } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    senha: "",
    senha2: "",
    hashConfirmacao: route.params.hashConfirmacao?.replace(":", ""),
  });

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

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled"
    >
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
            <TouchableOpacity style={styles.btnEntrar} onPress={redefinirSenha}>
              {loading ? (
                <ActivityIndicator size="small" color="#9ac31c" />
              ) : (
                <Text style={styles.btnText}>Alterar senha</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    padding: 15,
    borderRadius: 3,
    width: "100%",
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
