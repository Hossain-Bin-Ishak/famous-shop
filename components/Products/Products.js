import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Text, View } from 'react-native';
import ProductCard from '../ProductCard/ProductCard'

const Products = ()=>{
    const [products, setProducts ] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return(
        <View>
            {
                products.map( product => <ProductCard product={product}/>)
            }
        </View>
    )
}

export default Products;