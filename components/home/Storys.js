import React from "react";
import { View, StyleSheet, ScrollView, Image, Text } from "react-native";
import Users from "../../assets/data/users";

const Storys = () => {
  return (
    <View style={{ marginTop: 5 }}>
      <ScrollView horizontal>
        {Users.map((s, i) => (
          <View key={i} style={{alignItems:"center"}}>
            <Image source={{ uri: s.image }} style={styles.story} />
            <Text style={{ color: "white" }}>{s.username}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: { 
    width: 70,
    height: 70,
    borderRadius:35,
    marginLeft:10,
    borderWidth:3,
    borderColor:'tomato'
  },
});

export default Storys;
