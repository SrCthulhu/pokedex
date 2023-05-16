import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, Image } from 'react-native';
import { LOCALHOST } from '../constants';
import { registryStyles as styles } from '../styles';
import ButtonGradientRegistry from "../components/ButtonGradientRegistry";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Registry({ navigation }) {
    const [user, setNewUser] = useState('')
    const [email, setNewEmail] = useState('')
    const [pass, setNewPass] = useState('')
    const [validatePass, setValidateNewPass] = useState('')


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
            navigation.navigate("Avatar");
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
            setValidateNewPass("");
        }
    };
    return (
        <View style={styles.mainContainer}>
            <View style={styles.backgroundImageContainer}>
                <Image
                    source={{ uri: 'https://res.cloudinary.com/dpwaxzhnx/image/upload/v1684262661/Pokedex_db/blaziken_hn3jku.jpg' }}
                    style={styles.image}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Crear cuenta</Text>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={setNewUser}
                    value={user}
                    iconName="account-outline"
                    placeholder='Nombre de usuario / Caracteres mínimos: 4 o más'
                />
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={setNewEmail}
                    value={email}
                    placeholder='Email / example@gmail.com'
                />
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={setNewPass}
                    value={pass}
                    secureTextEntry
                    placeholder='Contraseña / Caracteres mínimos: 7 o más'
                />
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={setValidateNewPass}
                    value={validatePass}
                    secureTextEntry
                    placeholder='Confirma tu contraseña'
                />
                <ButtonGradientRegistry onPress={registry} style={styles.buttonRegistryStyle} />
            </View>
        </View>
    );
}