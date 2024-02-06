import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../context/UserProvider";
import Confirm from "./types/confirm";
import Success from "./types/sucess";
import Negative from "./types/negative";
import Warning from "./types/warning";

export default function Alert() {
  const context = useContext(UserContext);
  const { alert, setAlert } = context;
  const [alertType, setAlertType] = useState("none");

  useEffect(() => {
    if (alert) {
      const typ = alert.type || "none";
      setAlertType(typ);
    }
  }, [alert]);

  function quitAlert() {
    setAlert({
      visible: false,
      title: "",
      placeholder: "",
      confirm: false,
      type: "none",
    });
  }

  function quitAlertConfirm() {
    alert?.callback(alert.params);
    setAlert({
      visible: false,
      title: "",
      placeholder: "",
      confirm: true,
      type: "none",
    });
  }

  const myAlerts = {
    success: <Success quitAlert={quitAlert} alert={alert} />,
    confirm: (
      <Confirm
        quitAlert={quitAlert}
        quitAlertConfirm={quitAlertConfirm}
        alert={alert}
      />
    ),
    negative: <Negative quitAlert={quitAlert} alert={alert} />,
    warning: <Warning quitAlert={quitAlert} alert={alert} />,
    none: <></>,
  };

  return <>{myAlerts[alertType]}</>;
}
