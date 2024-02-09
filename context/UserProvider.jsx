import { createContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import apiUser from "./../apiUser";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigation = useNavigation();
  const [signed, setSigned] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);
  const [remindMe, setRemindMe] = useState(false);
  const [alert, setAlert] = useState({
    visible: false,
    title: "",
    placeholder: "",
    confirm: false,
    type: "none",
  });

  //LOGAR NO APP
  const logar = async (email, senha) => {
    try {
      const response = await apiUser.post("/login", { email, senha });
      const { success, message, token, id, nome } = response.data;
      console.log(response.data);
      if (success) {
        setSigned(true);
        setUser({ id, nome });
        setToken(token);
        apiUser.defaults.headers.common["authorization"] = token;
        await AsyncStorage.setItem("RT", token);
        console.log("Token salvo com sucesso no AsyncStorage:", token);
        navigation.navigate("Home");
      } else {
        setAlert({
          visible: true,
          title: "Atenção!",
          placeholder: message,
          confirm: false,
          type: "warning",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //ESQUECI SENHA
  const esqueciSenha = async (email) => {
    try {
      const response = await apiUser.post("/esqueci-senha", { email });
      const { success, message } = response.data;
      if (success) {
        setAlert({
          visible: true,
          title: "Verifique seu e-mail!",
          placeholder: message,
          confirm: false,
          type: "success",
        });
      } else {
        setAlert({
          visible: true,
          title: "Atenção!",
          placeholder: message,
          confirm: false,
          type: "warning",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // REDEFINIR SENHA
  const redefinirSenha = async (email, senha, hash) => {
    try {
      const response = await apiUser.post("/redefinir-senha", {
        email,
        senha,
        hash,
      });
      const { success, message } = response.data;
      if (success) {
        setAlert({
          visible: true,
          title: "Sucesso!",
          placeholder: message,
          confirm: false,
          type: "success",
        });
        navigate("/login");
      } else {
        setAlert({
          visible: true,
          title: "Atenção!",
          placeholder: message,
          confirm: false,
          type: "warning",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  //DESLOGAR DO APP

  const deslogar = () => {
    setSigned(false);
  };

  return (
    <UserContext.Provider
      value={{
        signed,
        user,
        alert,
        setAlert,
        token,
        logar,
        deslogar,
        remindMe,
        setRemindMe,
        esqueciSenha,
        redefinirSenha,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
