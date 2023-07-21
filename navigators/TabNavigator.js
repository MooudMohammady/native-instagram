import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  FontAwesome,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "black",
        },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:({color,size})=>(
        <Entypo size={size} color={color} name='home' />
      )}}/>
      <Tab.Screen name="Search" component={HomeScreen} options={{tabBarIcon:({color,size})=>(
        <FontAwesome size={size} color={color} name='search' />
      )}}/>
      <Tab.Screen name="Reals" component={HomeScreen} options={{tabBarIcon:({color,size})=>(
        <MaterialIcons size={size} color={color} name='video-collection' />
      )}}/>
      <Tab.Screen name="Shopping" component={HomeScreen} options={{tabBarIcon:({color,size})=>(
        <Feather size={size} color={color} name='shopping-bag' />
      )}}/>
      <Tab.Screen name="Profile" component={HomeScreen} options={{tabBarIcon:({color,size})=>(
        <Image source={require('../assets/profile.jpg')} style={{width:30,height:30,borderRadius:15}}/>
      )}}/>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default TabNavigator;
