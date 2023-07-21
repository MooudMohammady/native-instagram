import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require('../../assets/instagram-text-logo.png')} style={styles.logo}/>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={require('../../assets/icons/plus.png')} style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/icons/heart.png')} style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/icons/messenger.png')} style={styles.icon}/>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>13</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center',
    marginHorizontal:20
  },
  iconContainer:{
    flexDirection:"row"
  },
  logo :{
    width:100,
    height:50,
    resizeMode:"contain"
  },
  icon:{
    width:30,
    height:30,
    marginLeft:10,
    resizeMode:"contain"
  },
  badge:{
    position:"absolute",
    backgroundColor:"tomato",
    width:25,
    height:18,
    left:25,
    bottom:15,
    borderRadius:25,
    alignItems:"center",
    justifyContent:"center"
  },
  badgeText:{
    color:"white",
    fontWeight:"bold"
  }
})

export default Header;
