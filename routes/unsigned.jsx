import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../src/Login/index.jsx";

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
    </AuthStack.Navigator>
  );
}
