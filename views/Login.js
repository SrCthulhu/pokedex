import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, Image } from 'react-native';
import { LOCALHOST } from '../constants';
import { loginStyles as styles } from '../styles';

export default function Login({ navigation }) {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')


    const login = async () => {
        const rr = await fetch(`${LOCALHOST}/login`, {
            method: 'POST',
            body: JSON.stringify({ user, pass }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const res = await rr.json()

        if (res.success) {
            navigation.navigate("Home");
        } else {
            Alert.alert("Datos incorrectos, verifique e intente nuevamente.");
            setUser("");
            setPass("");
        }
    };

    const handleSignInPress = () => {
        navigation.navigate("Registry");
    };
    return (
        <View style={styles.container}>
            <Text
                style={styles.title}>
                ¡Bienvenido!</Text>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://icon-library.com/images/pokedex-icon/pokedex-icon-21.jpg' }}
                />
            </View>
            <Text
                style={styles.textPrimary}
            >Usuario/Email</Text>
            <TextInput
                style={styles.textInputStyle}
                onChangeText={setUser}
                value={user}
                placeholder='user@example.com'
            />
            <Text
                style={styles.textPrimary}
            >Contraseña</Text>
            <TextInput
                style={styles.textInputStyle}
                onChangeText={setPass}
                value={pass}
                secureTextEntry
                placeholder='*******'
            />
            <Button
                style={styles.buttonStyle}
                title='Login'
                onPress={login} />
            <Text
                style={styles.textSecondary}
            >¿Olvidaste tu contraseña?</Text>
            <Button
                style={styles.buttonStyle2}
                title='Recuperar clave'
            />
            <Text
                style={styles.textSecondary}
            >No tengo cuenta</Text>
            <Button
                style={styles.buttonStyle3}
                title='Registrarse'
                onPress={handleSignInPress}
            />
        </View>
    );
}