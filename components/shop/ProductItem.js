import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

import Colors from '../../constants/Colors';

const ProductItem = props => {
    return (
        <View style={sytles.product}>
            <View style={sytles.imageContainer}>
                <Image style={sytles.image} source={{ uri: props.image }} />
            </View>
            <View style={sytles.details}>
                <Text style={sytles.title}>{props.title}</Text>
                <Text style={sytles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={sytles.actions}>
                <Button
                    color={Colors.primary}
                    title="View Details"
                    onPress={props.onViewDetail}
                />
                <Button
                    color={Colors.primary}
                    title="To Cart"
                    onPress={props.onAddToCart}
                />
            </View>
        </View>
    );
};

const sytles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    title: {
        fontSize: 18,
        marginVertical: 4
    },
    price: {
        fontSize: 14,
        color: '#888'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        paddingHorizontal: 20
    },
    details: {
        alignItems: 'center',
        height: '15%',
        padding: 10
    },
});

export default ProductItem;