import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import Users from "../../assets/data/users";

const Storys = () => {
  return (
    <View style={{ marginTop: 5 }}>
      <ScrollView horizontal>
        <TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../assets/profile.jpg")}
              style={styles.yourStory}
            />
            <Text style={{ color: "white" }}>Your story</Text>
            <Text style={styles.yourStoryBadge}>+</Text>
          </View>
        </TouchableOpacity>
        {Users.map((s, i) => (
          <TouchableOpacity key={i}>
            <View style={{ alignItems: "center" }}>
              <Image source={{ uri: s.image }} style={styles.story} />
              <Text style={{ color: "white" }}>{s.username}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft: 10,
    borderWidth: 3,
    borderColor: "tomato",
  },
  yourStory:{
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft: 10,
  },
  yourStoryBadge: {
    color: "white",
    backgroundColor: "#58f",
    width: 25,
    height:25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    position: "absolute",
    bottom: 20,
    right: -4,
    borderWidth:1.5,
    borderColor:"white",
    textAlign:"center",
    verticalAlign:"middle",
    fontWeight:"900"
  },
});

export default Storys;
