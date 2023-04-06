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
                    source={{ uri: 'https://instagram.faep24-1.fna.fbcdn.net/v/t51.2885-19/72487654_2261525107284685_1971596924683288576_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.faep24-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=4iDwwzHoiQAAX9_a1hS&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfARsdZd39xPk5Ze6ocPTH52YsUW0VFLgLgh5s3uxROl8Q&oe=642B4516&_nc_sid=1527a3' }}
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