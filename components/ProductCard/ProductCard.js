import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import img from '../../assets/adaptive-icon.png'

const ProductCard = ({product})=>{
    const {title, price, image} = product;
    const handleBuyNow = ()=>{
        alert('Thanks for buying the product')
    }




    const cardStyle = {
        borderColor:'gray',
        borderWidth:1,
        padding:5,
        margin:5,
        height:450
    }
    return(
        <View style={cardStyle}>
            <Image source={{uri:image}}
            style={{width:'100%', height:330}}/>
            <Text >{title}</Text>
            <Text style={{color:'red',padding:5}}>${price}</Text>
            <Button onPress={()=>handleBuyNow()} title="Buy now" style={{color:'red'}}/>
        </View>
    )
}

export default ProductCard;