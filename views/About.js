import React from 'react';
import { View, Text, Image } from 'react-native';
import { aboutStyles as styles } from '../styles';
import Header from '../components/Header';

export default function About() {
    return (
        <View style={styles.container}>
            <Header
                title='Info adicional'
                description='Desarrollado por Daniel Augusto Parucho'
            />
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: 'https://res.cloudinary.com/dpwaxzhnx/image/upload/v1700118047/Pokedex_db/ofmljnv2ok9gtjz95gok.jpg' }}
                    style={styles.image}
                />
            </View>
            <Text style={styles.textPrimary}>Email: danielparucho@gmail.com</Text>
            <Text style={styles.textPrimary}>Telf: +54 9 11 5643-2312</Text>
            <Text style={styles.textPrimary}>Instagram: danparucho_</Text>
            <Text style={styles.textSecondary}>Developed March, 2023</Text>
        </View>
    );
}