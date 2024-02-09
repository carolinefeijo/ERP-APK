import React, { useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon } from "@rneui/themed";
import { UserContext } from "../context/UserProvider";
import Home from "./../src/Home/index";

const AuthStack = createNativeStackNavigator();

export default function Signed() {
  const { deslogar } = useContext(UserContext);

  const renderLogout = () => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => deslogar()}>
          <Icon
            name="log-out-outline"
            type="ionicon"
            size={25}
            color={"#FFF"}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => renderLogout(),
          headerStyle: {
            backgroundColor: "#142a4c",
          },
          headerTintColor: "#fff",
        }}
      />
    </AuthStack.Navigator>
  );
}
