import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forecast from './Forecast';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            forecast: {
                main: '-', description: '-', temp: 0
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/Peach(Edit)1.jpg')} style={styles.backdrop}>
                <View style={styles.flex}>
                    <Text style={styles.font}>Zip code is {this.props.zipCode}.</Text>
                    <Forecast {...this.state.forecast} /> 
                </View>  
                </ImageBackground>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
  container: { paddingTop: 0  },
  backdrop: { width: '100%', height: '100%'},
  font:{
    paddingTop:60,
    color:'#3300CC',
    fontSize: 25,
  },
  flex: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'},
});