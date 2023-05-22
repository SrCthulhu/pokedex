import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Image, TouchableOpacity } from 'react-native';
import { LOCALHOST } from '../constants';
import { loginStyles as styles } from '../styles';
import ButtonGradient from '../components/ButtonGradient';

export default function Login({ navigation }) {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const login = async () => {
        try {
            const rr = await fetch(`${LOCALHOST}/login`, {
                method: 'POST',
                body: JSON.stringify({ user: user.toLowerCase(), pass }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const text = await rr.text();
            console.log('Response Status:', rr.status);
            console.log('Response Text:', text);

            const res = JSON.parse(text);
            console.log('Response:', res);

            if (res.success) {
                navigation.navigate("Avatar");
            } else {
                Alert.alert("Datos inválidos, verifique los campos e intente nuevamente.");
                setUser("");
                setPass("");
            }
        } catch (e) {
            console.log("Error:", e);
        }
    };

    const handleSignInPress = () => {
        navigation.navigate("Registry");
    };
    return (
        <View style={styles.mainContainer}>
            <View style={styles.gradientContainer}>
                <Image
                    style={styles.gradientImage}
                    source={{ uri: 'https://res.cloudinary.com/dpwaxzhnx/image/upload/v1683907685/Pokedex_db/Degradado_ullhnp.png' }}
                />
            </View>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://icon-library.com/images/pokedex-icon/pokedex-icon-21.jpg' }}
                    />
                </View>
                <Text
                    style={styles.title}>
                    Hola</Text>
                <Text
                    style={styles.subTitle}>
                    Inicia sesión en tu cuenta
                </Text>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={setUser}
                    value={user}
                    placeholder='username / user@gmail.com'
                />
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={setPass}
                    value={pass}
                    secureTextEntry
                    placeholder='*******'
                />
                <Text
                    style={styles.textSecondary}
                >¿Olvidaste tu contraseña?</Text>
                <ButtonGradient onPress={login} />
                <View style={styles.registryContainer}>
                    <TouchableOpacity
                        onPress={handleSignInPress}
                    >
                        <Text style={styles.textRegistry}>No tengo cuenta, crear</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}