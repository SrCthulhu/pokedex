import React, { useState, useContext } from "react";
import { View, Text, TextInput, Alert, Image } from 'react-native';
import { LOCALHOST } from '../constants';
import { registryStyles as styles } from '../styles';
import ButtonGradientRegistry from "../components/ButtonGradientRegistry";

import { AuthenticationContext } from '../context/authentication';


export default function Registry({ navigation }) {
    const [user, setNewUser] = useState('')
    const [email, setNewEmail] = useState('')
    const [pass, setNewPass] = useState('')
    const [validatePass, setValidateNewPass] = useState('')
    const { setToken } = useContext(AuthenticationContext);

    const registry = async () => {
        const rr = await fetch(`${LOCALHOST}/registry`, {
            method: 'POST',
            body: JSON.stringify({ user: user.toLowerCase(), email: email.toLowerCase(), pass, validatePass }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const res = await rr.json()

        if (res.success) {
            await setToken(res.token);

            navigation.navigate("Avatars");
        } else if (res.error1) {
            Alert.alert("Dirección de email inválida, introduzca algo como: @example.com");
            setNewUser("");
            setNewEmail("");
            setNewPass("");
            setValidateNewPass("");
        } else if (res.error2) {
            Alert.alert("Las contraseñas no coinciden, introduzca los datos de vuelta.");
            setNewUser("");
            setNewEmail("");
            setNewPass("");
            setValidateNewPass("");
        } else {
            Alert.alert("Usuario / Contraseña demasiado corta, intente nuevamente.");
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
                {/* <InputComponent 
                iconName="account-outline"
                placeholder='Nombre de usuario / Caracteres mínimos: 4 o más'
                /> */}

                {/* <InputComponent 
                iconName="email-outline"
                placeholder='Email / example@gmail.com'
                /> */}

                {/* <InputComponent 
                iconName="lock-outline"
                placeholder='Contraseña / Caracteres mínimos: 7 o más'
                /> */}

                {/* <InputComponent 
                placeholder='Confirma tu contraseña'
                /> */}
                <ButtonGradientRegistry onPress={registry} text="REGISTRARSE" textColor="#FFF" style={styles.buttonRegistryStyle} />
            </View>
        </View>
    );
}