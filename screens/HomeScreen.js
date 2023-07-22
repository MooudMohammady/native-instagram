import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  StatusBar,
  ScrollView,
  FlatList,
  RefreshControl,
} from "react-native";
import Header from "../components/home/Header";
import Storys from "../components/home/Storys";
import Posts from "../assets/data/posts";
import Post from "../components/home/Post";

const HomeScreen = () => {
  const [refresh, setRefresh] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => {
              setRefresh(true);
              setTimeout(() => {
                setRefresh(false);
              }, 1000);
            }}
          />
        }>
        <Storys />
        {
          Posts.map((p,i)=>(
            <Post key={i} post={p} />
          ))
        }
      </ScrollView>
      {/* <FlatList
        data={Posts}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => {
              setRefresh(true);
              setTimeout(() => {
                setRefresh(false);
              }, 1000);
            }}
          />
        }
        renderItem={({ item }) => (
          <>
            {item.length < 1 && <Storys />}
            <Post post={item} />
          </>
        )}></FlatList> */}
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
