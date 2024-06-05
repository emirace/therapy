import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import Login from "./src/screen/Login";
import { RootStackParamList } from "./src/types/notification";
import Home from "./src/screen/Home";
import Providers from "./Providers";
import { Navigate, Route, Routes } from "react-router-native";
import Register from "./src/screen/Register";
import Profile from "./src/screen/Profile";
import PrivateRoute from "./src/components/containers/PrivateRoute";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Providers>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home/*" element={<PrivateRoute component={Home} />} />
          <Route
            path="/perfil/*"
            element={<PrivateRoute component={Profile} />}
          />
        </Routes>
      </Providers>
    </KeyboardAvoidingView>
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
