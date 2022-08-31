import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class App extends Component{
  render(){
    return(
      <View style={styles.container} >
        <Text style={styles.welcome}>Welcome </Text>
        <Text style={styles.instructions}>App2.js </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions:{
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
  
});