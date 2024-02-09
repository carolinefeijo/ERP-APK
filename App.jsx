import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./context/UserProvider";
import AppRoutes from "./routes/appRoutes";
import Alert from "./src/components/Alert";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

export default function App() {
  const linking = {
    prefixes: ["exp://192.168.3.57:8081/--/"],
    config: {
      screens: {
        Confirmar: {
          path: "Confirmar/:hashConfirmacao",
        },
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <UserProvider>
        <StatusBar style="inverted" />
        {/* <Alert /> */}
        <AppRoutes />
      </UserProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
