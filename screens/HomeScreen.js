import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import Header from "../components/home/Header";
import Storys from "../components/home/Storys";
import Posts from "../assets/data/posts";
import Post from "../components/home/Post";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <Storys />
      <FlatList data={Posts} renderItem={({ item }) => <Post post={item} />} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});

export default HomeScreen;
