import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export const Navbar = props => {
    return (
       <View style={styles.navbar}>
           <Text style={styles.text}>Todo App</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
      backgroundColor: 'blue',
      height: 90,
      alignItems: 'center',
      justifyContent: 'center',
     
    },
    text:{
     fontSize: 18
    }
})


