import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
// import { BiQuestionMark } from "react-icons/bi";

const Confirm = ({ alert, quitAlertConfirm, quitAlert }) => {
  return (
    <View style={styles.backgroundModal}>
      <View style={styles.alertContainer}>
        <View style={styles.alertContent}>
          {/* <BiQuestionMark style={styles.alertIcon} /> */}
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.765)",
  },
  alertContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: 300,
    backgroundColor: "white",
    borderRadius: 5,
    position: "relative",
    minHeight: 250,
    padding: 20,
    alignItems: "center",
    animationName: "maximize",
    animationDuration: "0.2s",
    animationTimingFunction: "linear",
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
  },
  alertSuccessOkButton: {
    flex: 1,
    fontWeight: "lighter",
    fontSize: 15,
    color: "white",
    backgroundColor: "#9ac31c",
    border: "none",
    padding: 15,
    transition: "all 0.1s linear",
    cursor: "pointer",
  },
  alertSuccessOkButtonHover: {
    backgroundColor: "#142a4c",
    fontWeight: 500,
  },
  alertWarningOkButton: {
    flex: 1,
    fontWeight: "lighter",
    fontSize: 15,
    color: "white",
    backgroundColor: "#e74e4e",
    border: "none",
    padding: 15,
    transition: "all 0.1s linear",
    cursor: "pointer",
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
