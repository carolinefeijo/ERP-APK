import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import logoVoxVertical from "../../../../assets/Vox_Logo_Vertical.png";

const Confirm = ({ alert, quitAlertConfirm, quitAlert }) => {
  return (
    <View style={styles.backgroundModal}>
      <View style={styles.alertContainer}>
        <Image source={logoVoxVertical} style={styles.logo} />
        <View style={styles.alertContent}>
          <Text style={styles.alertTitle}>{alert.title}</Text>
          <Text style={styles.alertSpan}>{alert.placeholder}</Text>
        </View>
        <View style={styles.alertContainerButton}>
          <TouchableOpacity
            style={styles.alertWarningOkButton}
            onPress={quitAlertConfirm}
          >
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.alertSuccessOkButton}
            onPress={quitAlert}
          >
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = {
  backgroundModal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(28, 28, 28, 0.765)",
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: "100%",
  },
  alertContainer: {
    width: 300,
    minHeight: 250,
    padding: 20,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    position: "relative",
    animationName: "maximize",
    animationDuration: "0.2s",
    animationTimingFunction: "linear",
  },
  logo: {
    width: "70%",
    height: 100,
    maxHeight: 200,
    margin: 10,
  },
  alertTitle: {
    textAlign: "center",
    fontSize: 20,
    color: "#142a4c",
    padding: 10,
  },
  alertContent: {
    flexDirection: "column",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  alertIcon: {
    width: "30%",
    height: "30%",
    padding: 10,
    color: "#142a4c",
  },
  alertSpan: {
    textAlign: "center",
    fontSize: 15,
    padding: 2,
    color: "rgb(94, 94, 94)",
  },
  alertContainerButton: {
    flexDirection: "row",
    width: "100%",
    gap: 10,
  },
  alertSuccessOkButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "lighter",
    fontSize: 15,
    color: "white",
    backgroundColor: "#9ac31c",
    border: "none",
    borderRadius: 3,
    padding: 15,
    transition: "all 0.1s linear",
  },
  alertSuccessOkButtonHover: {
    backgroundColor: "#142a4c",
    fontWeight: 500,
  },
  alertWarningOkButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "lighter",
    fontSize: 15,
    color: "white",
    backgroundColor: "#e74e4e",
    border: "none",
    borderRadius: 3,
    padding: 15,
    transition: "all 0.1s linear",
  },
  alertWarningOkButtonHover: {
    backgroundColor: "#be3030",
    fontWeight: 500,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  maximize: {
    from: {
      opacity: 0,
      transform: [{ scale: 0 }],
    },
    to: {
      opacity: 1,
      transform: [{ scale: 1 }],
    },
  },
};

export default Confirm;
