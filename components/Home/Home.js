import React from 'react';
import { Button, ScrollView, Text } from 'react-native';
import Navigator from '../Navigator/Navigator';
import Products from '../Products/Products';


const Home = ()=>{
    return(
        <ScrollView>
            <Navigator/>
            <Products/>
        </ScrollView>
    )
}

export default Home;