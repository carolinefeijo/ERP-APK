import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Icon } from "@rneui/themed";

export default function Senha(props) {
  return (
    <View style={styles.bloco}>
      <Icon
        name="key-outline"
        type="ionicon"
        style={styles.icone}
        color={"#142a4c"}
        size={25}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Insira sua senha"
        placeholderTextColor={"#BABABA"}
        style={styles.textInput}
        onChangeText={(text) => props.captureText(text, "senha")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: "400",
  },
  container: {
    width: "98%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    color: "#FFF",
    gap: 5,
  },
  bloco: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#F2EFEF",
    height: 55,
    borderRadius: 5,
    margin: 10,
  },
  icone: {
    margin: 5,
    padding: 3,
    marginHorizontal: 15,
    resizeMode: "stretch",
    alignItems: "center",
  },
});
