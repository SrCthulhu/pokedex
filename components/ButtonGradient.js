import React from "react";
import { Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ButtonGradientStyle as styles } from "../styles";
export default function ButtonGradient({ onPress }) {

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}>

            <LinearGradient
                style={styles.button}
                colors={['#E4E4E4', '#E00004']}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
            >
                <Text style={styles.text}>INICIAR SESIÓN</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}