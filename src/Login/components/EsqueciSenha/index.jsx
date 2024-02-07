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
import { Icon } from "@rneui/themed";

export default function EsqueciSenha() {
  const { esqueciSenha, setAlert } = useContext(UserContext);
  const [login, setLogin] = useState({ email: "" });
  const [isLoading, setisLoading] = useState(false);
  const { loading } = useContext(UserContext);
  const navigation = useNavigation();

  const allInputs = {
    email: <Email captureText={captureText} />,
  };

  function captureText(text, name) {
    setLogin({
      ...login,
      [name]: text,
    });
  }

  function logIn() {
    if (login.email === "") {
      setAlert({
        visible: true,
        title: "Atenção!",
        placeholder: "Pare realizar o login, preencha todos os campos!",
        confirm: false,
        type: "warning",
      });
    } else {
      esqueciSenha(login.email);
    }
  }

  return (
    <View style={styles.container}>
      <Image source={fundoAzul} style={styles.backgroundImage} />
      <View style={styles.overlayContainer}>
        <View style={styles.mainContainer}>
          <TouchableOpacity
            style={styles.containerButtonBack}
            onPress={() => navigation.goBack()}
          >
            <Icon
              name="arrow-back-ios"
              type="MaterialIcons"
              size={40}
              color={"#9AC31D"}
            />
          </TouchableOpacity>
          <Image source={logoVoxVertical} style={styles.logo} />
          <View style={styles.containerWelcome}>
            <Icon name="heart" type="ionicon" size={28} color={"#A6C73D"} />
            <Text style={styles.textWelcome}>Esqueceu sua senha?</Text>
          </View>
          {Object.keys(allInputs).map((key, index) => (
            <View key={index} style={styles.inputContainer}>
              {allInputs[key]}
            </View>
          ))}
          <TouchableOpacity
            style={styles.btnEntrar}
            onPress={logIn}
            disabled={loading || isLoading}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#9ac31c" />
            ) : (
              <Text style={styles.btnText}>Enviar</Text>
            )}
          </TouchableOpacity>
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
