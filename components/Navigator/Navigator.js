import React from 'react';
import { Text, View } from 'react-native';

const Navigator = () => {
    const navigatorStyle = {
        textAlign:'center',
        color:'blue',
    }
    return (
        <View style={{backgroundColor:'#bdc3c7',padding:5}}>
            <Text style={navigatorStyle}>Menu</Text>
        </View>
    );
};

export default Navigator;