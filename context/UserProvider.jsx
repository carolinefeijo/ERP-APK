import { createContext, useState, useEffect } from "react";
import apiUser from "./../apiUser";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    console.log(apiUser.post("/"));
  }, []);

  const deslogar = () => {
    setSigned(false);
  };

  return (
    <UserContext.Provider value={{ signed, deslogar }}>
      {children}
    </UserContext.Provider>
  );
};
