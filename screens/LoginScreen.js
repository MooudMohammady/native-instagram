import React from "react";
import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import LoginForm from "../components/login/LoginForm";
import Brand from "../components/login/brand";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <Brand />
      <LoginForm />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 12,
    backgroundColor: "white",
  },
});

export default LoginScreen;
