import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
  doIt =()=> {
    console.log("Hello from console")
  }
  render() {
    return (
      <View  style={styles.container}>
        <Text style={styles.font}>{this.props.main}</Text>
        <Text style={styles.font}>{this.props.dascription}</Text>
        <Text style={styles.font}>{this.props.temp}</Text>
        <Text style={styles.font}>C</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'},
  font:{
    color:'#3300CC',
    fontSize: 25,
  },
});