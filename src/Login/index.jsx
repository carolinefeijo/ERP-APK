import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { UserContext } from "../../context/UserProvider";
import fundoAzul from "../../assets/fundoAzul.jpg";
import logoVoxVertical from "../../assets/Vox_Logo_Vertical.png";
import Email from "./inputs/email";
import Senha from "./inputs/senha";
import { Icon } from "@rneui/themed";

export default function Login() {
  const { logar, loading, remindMe, setRemindMe } = useContext(UserContext);
  const [login, setLogin] = useState({ email: "", senha: "" });

  const allInputs = {
    email: <Email captureText={captureText} />,
    senha: <Senha captureText={captureText} />,
  };

  function captureText(text, name) {
    setLogin({
      ...login,
      [name]: text,
    });
  }

  function handleLogin() {
    logar(login.email, login.senha);
  }

  const handleCheckBoxToggle = () => {
    setRemindMe(!remindMe);
  };

  return (
    <View style={styles.container}>
      <Image source={fundoAzul} style={styles.backgroundImage} />
      <View style={styles.overlayContainer}>
        <View style={styles.mainContainer}>
          <Image source={logoVoxVertical} style={styles.logo} />
          <View style={styles.containerWelcome}>
            <Icon name="heart" type="ionicon" size={28} color={"#A6C73D"} />
            <Text style={styles.textWelcome}>Seja bem-vindo ao ERP</Text>
          </View>

          {Object.keys(allInputs).map((key, index) => (
            <View key={index} style={styles.inputContainer}>
              {allInputs[key]}
            </View>
          ))}

          <View style={styles.checkboxContainer}>
            <CheckBox
              title="Lembrar-me"
              checkedColor="#9ac31c"
              uncheckedColor="#142a4c"
              containerStyle={styles.checkboxStyle}
              textStyle={styles.checkboxText}
              checked={remindMe}
              onPress={handleCheckBoxToggle}
            />
          </View>

          <TouchableOpacity style={styles.btnEntrar} onPress={handleLogin}>
            {loading ? (
              <ActivityIndicator size="small" color="#9ac31c" />
            ) : (
              <Text style={styles.btnText}>Entrar</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnEsqueceuSenha}
            onPress={() => {
              console.log("Esqueceu sua senha ?");
            }}
          >
            <Text style={styles.btnTextEsqueceuSenha}>
              esqueceu sua senha ?
            </Text>
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
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  overlayContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
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
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    margin: 20,
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
  checkboxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  checkboxStyle: {
    backgroundColor: "#FFF",
    borderWidth: 0,
  },
  checkboxText: {
    color: "#BABABA",
    fontWeight: "400",
  },
  btnEsqueceuSenha: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  btnTextEsqueceuSenha: {
    color: "#142a4c",
    textAlign: "center",
    fontSize: 15,
  },
});
