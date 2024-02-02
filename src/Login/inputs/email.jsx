import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Icon } from "@rneui/themed";

export default function Email(props) {
  const { bloco, icone, textInput } = styles;
  return (
    <View style={bloco}>
      <Icon
        name="mail-outline"
        type="ionicon"
        style={icone}
        color={"#142a4c"}
        size={25}
      />
      <TextInput
        placeholder="Insira seu e-mail"
        placeholderTextColor={"#BABABA"}
        style={textInput}
        onChangeText={(text) => props.captureText(text, "email")}
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
