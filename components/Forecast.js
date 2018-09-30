import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
  doIt =()=> {
    console.log("Hello from console")
  }
  render() {
    return (
      <View  style={styles.container}>
        <Text style={styles.mainFont}>{this.props.main}</Text>
        <Text style={styles.descriptionFont}>{this.props.description}</Text>
        <Text style={styles.c}><Text style={styles.tempFont}>{this.props.temp}</Text>  ํC</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'},

  mainFont : {
      paddingTop : 10,
      color : '#fff',
      fontSize : 40,
  },

  descriptionFont : {
      paddingTop : 20,
      color : '#fff',
      fontSize : 15,
  },

  tempFont:{
    color:'#fff',
    fontSize: 30,
  },

  c:{
    paddingTop:20,
    color:'#fff',
    fontSize: 20,
  },
});