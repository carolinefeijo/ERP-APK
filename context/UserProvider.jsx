import { createContext, useState, useEffect } from "react";
import apiUser from "./../apiUser";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [signed, setSigned] = useState(false);
  const [remindMe, setRemindMe] = useState(false);

  // useEffect(() => {
  //   console.log(apiUser.post("/"));
  // }, []);

  const deslogar = () => {
    setSigned(false);
  };

  return (
    <UserContext.Provider value={{ signed, deslogar, remindMe, setRemindMe }}>
      {children}
    </UserContext.Provider>
  );
};
