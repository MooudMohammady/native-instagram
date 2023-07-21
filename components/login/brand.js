import React from "react";
import { Text } from "react-native";
import { View, StyleSheet, Image } from "react-native";

const Brand = () => {
  return (
    <View style={styles.logoContainer}>
      <Image style={styles.logoImg} source={require("../../assets/instagram-logo.png")} />
      <Text style={{fontSize:30}}>Denogram</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 60,
    alignItems: "center",
  },
  logoImg: {
    width: 100,
    height: 100,
  },
});

export default Brand;
