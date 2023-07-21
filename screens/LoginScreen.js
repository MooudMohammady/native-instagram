import React from "react";
import { View, StyleSheet } from "react-native";
import LoginForm from "../components/login/LoginForm";
import Brand from "../components/login/brand";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Brand />
      <LoginForm/>
    </View>
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
