import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert, Image } from 'react-native';
import { LOCALHOST } from '../constants';
import { registryStyles as styles } from '../styles';

export default function Registry({ navigation }) {
    const [user, setNewUser] = useState('')
    const [email, setNewEmail] = useState('')
    const [pass, setNewPass] = useState('')

    const registry = async () => {
        const rr = await fetch(`${LOCALHOST}/registry`, {
            method: 'POST',
            body: JSON.stringify({ user, email, pass }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const res = await rr.json()

        if (res.success) {
            navigation.navigate("Login");
            /*      } else if (res.error) {
                      Alert.alert("El email debe terminar en @gmail.com o @hotmail.com");
                      setNewUser("");
                      setNewEmail("");
                      setNewPass("");
            */
        } else {
            Alert.alert("Usuario / contraseña demasiado corta, intente nuevamente.");
            setNewUser("");
            setNewEmail("");
            setNewPass("");
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Crear cuenta</Text>
            <View style={styles.headerContainer}>
                <Image
                    source={{ uri: 'https://wallpaperaccess.com/full/3600151.jpg' }}
                    style={styles.image}
                />
            </View>
            <Text
                style={styles.textPrimary}
            >Usuario</Text>
            <TextInput
                style={styles.textInputStyle}
                onChangeText={setNewUser}
                value={user}
                placeholder='Debe contener entre 4 o más caracteres'
            />
            <Text
                style={styles.textPrimary}>
                Email</Text>
            <TextInput
                style={styles.textInputStyle}
                onChangeText={setNewEmail}
                value={email}
                placeholder='user@example.com'
            />
            <Text
                style={styles.textPrimary}>
                Contraseña</Text>
            <TextInput
                style={styles.textInputStyle}
                onChangeText={setNewPass}
                value={pass}
                secureTextEntry
                placeholder='Debe contener entre 7 o más caracteres'
            />
            <Button
                style={styles.buttonStyle}
                title='Enviar Registro'
                onPress={registry} />
        </View>
    );
}