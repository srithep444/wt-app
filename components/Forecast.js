import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
  doIt =()=> {
    console.log("Hello from console")
  }
  render() {
    return (
      <View  style={styles.container}>
        <Text>{this.props.main}</Text>
        <Text>{this.props.dascription}</Text>
        <Text>{this.props.temp}</Text>
        <Text>C</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    justifyContent:'flex-end',
    alignItems:'flex-start'},
});