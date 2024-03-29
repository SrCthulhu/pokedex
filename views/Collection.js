import React, { useState, useContext } from 'react';
import { View, FlatList, Text } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import { CollectedContext } from '../context/collected';
import { GET_ALL_URL } from '../constants';
import { collectedStyles as styles } from '../styles';

// Reutilizamos el componente del Card y del Header y tambien el Flatlist del home
export default function Collection() {
    const { collected } = useContext(CollectedContext);
    return (
        <View style={styles.container}>
            <Header title='Colección' description='Los pokémons que posees' />
            <FlatList
                data={collected}
                renderItem={({ item }) => <Card pokemon={item} />}
                numColumns={2}
                onEndReachedThreshold={0.2}
            />
        </View>
    );
}