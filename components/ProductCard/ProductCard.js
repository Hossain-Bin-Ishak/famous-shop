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
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15 
    };
    const styleImage = {

          justifyContent: 'center',
          alignItems: 'center',
      }
    return(
        <View style={cardStyle}>
            <View style={styleImage}>
           
            <Image style={{width: '60%', height: 250}} source={{uri:image}}/>
            
            </View>
           <View style={{textAlign: 'center', paddingTop: '10'}}>
               
            <Text>{title}</Text>
            <Text style={{color:'red',padding:5}}>${price}</Text>
           </View>
            <Button onPress={()=>handleBuyNow()} title="Buy now" style={{color:'red'}}/>
        </View>
    )
}

export default ProductCard;