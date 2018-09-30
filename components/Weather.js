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

    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
        .then((response) => response.json())
        .then((json) => {
            this.setState(
        {
        forecast: {
            main: json.weather[0].main,
            description: json.weather[0].description,
            temp: json.main.temp
        }
        });
        })
        .catch((error) => {
        console.warn(error);
        });
    }
        componentDidMount = () => this.fetchData()

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