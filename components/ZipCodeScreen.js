import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, ImageBackground} from 'react-native';
import { Directions } from 'react-native-gesture-handler';

const availableZipItems = [
    {place: 'Hatyai', code: '90110'},
    {place: 'Trang', code: '92000'},
    {place: 'Chiangmai', code: '50000'},
    {place: 'KhonKaen', code: '40000'},
    {place: 'Chonburi', code: '20000'},
]

const ZipItem = ({place, code, navigate}) => ( 
    <TouchableHighlight onPress={() => navigate('Weather', {zipCode: code})}> 
        <View style={styles.zipItem}> 
            <Text style={styles.zipPlace}>{place}</Text> 
            <Text style={styles.zipCode}>{code}</Text> 
        </View> 
    </TouchableHighlight> 
)

const _keyExtractor = item => item.code

export default class WeatherScreen extends React.Component{
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle : (<Text>Choose a zip code</Text>)
        }
    }

    render(){
        const {navigate} = this.props.navigation;
        return (
            
            <View>
            <ImageBackground source={require('../assets/Backgound.jpg')} style={styles.backdrop}>
            <View style={styles.textbox}>
                <FlatList
                    data = {availableZipItems}
                    keyExtractor = {_keyExtractor}
                    renderItem = {({item}) => <ZipItem {...item} navigate={navigate} />}
                />
                </View>
            </ImageBackground> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    zipItem: {
        flexDirection: 'row', 
        justifyContent:'space-between',
        alignItems:'center'
    },

    zipPlace: {
        fontSize: 28,
        color:'#fff',
    },

    zipCode: {
        fontSize: 25,
        color:'#fff',
    },

    textbox: {
        flex: 2.5,
        backgroundColor:'#001',
        opacity: 0.6,

    },

    backdrop: { width: '100%', height: '100%'},
});