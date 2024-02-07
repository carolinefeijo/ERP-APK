import { createContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
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

  // useEffect(() => {
  //   console.log(apiUser.post("/"));
  // }, []);

  // const validateToken = async () => {
  //   let refreshToken = document.cookie.split("=")[1];

  //   if (refreshToken && !signed) {
  //     try {
  //       apiUser.defaults.headers.common["authorization"] = refreshToken;
  //       const response = await apiUser.post("/validate-token");
  //       const { success, token, id, nome } = response.data;
  //       if (success) {
  //         setSigned(true);
  //         setToken(token);
  //         setUser({ id, nome });
  //         apiUser.defaults.headers.common["authorization"] = token;
  //         navigate("/home");
  //       } else {
  //         document.cookie = `RT=; path=/; max-age=0`;
  //         setSigned(false);
  //         navigate("/login");
  //       }
  //     } catch (error) {
  //       console.error("Error validating token:", error);
  //     }
  //   }
  // };

  // LOGAR
  const logar = async (email, senha) => {
    try {
      const response = await apiUser.post("/login", { email, senha });
      const { success, message, token, id, nome } = response.data;
      if (success) {
        setSigned(true);
        setUser({ id, nome });
        setToken(token);
        apiUser.defaults.headers.common["authorization"] = token;
        document.cookie = `RT=${token}; path=/; max-age=86400`;
        navigate("/home");
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
      console.log(response.data);
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
        // alterarSenha,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
