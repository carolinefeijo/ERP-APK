import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./context/UserProvider";
import AppRoutes from "./routes/appRoutes";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <UserProvider>
        <StatusBar style="inverted" />
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
