import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forecast from './Forecast';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            forecast: {
                main: 'main', description: 'description', temp: 0
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/Backgound.jpg')} style={styles.backdrop}>
                <View style={styles.textbox}>
                    <Text style={styles.font}>Zip code is {this.props.zipCode}.</Text>
                    <Forecast {...this.state.forecast} /> 
                </View>  
                <View style={styles.blankContainer}></View>
            </ImageBackground>
        </View>
            
        );
    }
}

const styles = StyleSheet.create({
  container: { paddingTop: 20  },

  backdrop: { width: '100%', height: '100%'},

  blankContainer : {
    flex : 3
  },

  font:{
    paddingTop:25,
    color:'#fff',
    fontSize: 25,
  },

  position: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'},

  textbox: {
      flex: 2,
      backgroundColor:'#001',
      opacity: 0.3,
      alignItems:'center'
  }
});