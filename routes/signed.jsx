import React, { useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon } from "@rneui/themed";
import { UserContext } from "../context/UserProvider";

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
          headerTitleAlign: "center",
          headerTintColor: "#FFF",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </AuthStack.Navigator>
  );
}
