import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../src/Login/index.jsx";
import EsqueciSenha from "../src/Login/components/EsqueciSenha/index.jsx";
import RedefinirSenha from "../src/Login/components/RedefinirSenha/index.jsx";

const AuthStack = createNativeStackNavigator();

export default function Unsigned() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="EsqueciSenha"
        component={EsqueciSenha}
        options={{
          headerShown: false,
        }}
      />

      <AuthStack.Screen
        name="RedefinirSenha"
        component={RedefinirSenha}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
}
