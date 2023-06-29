import React from "react";
import { Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ButtonGradientRegistryStyle as styles } from "../styles";
export default function ButtonGradientRegistry({ onPress, text }) {

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}>

            <LinearGradient
                style={styles.button}
                colors={['#000', '#fff']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
            >
                <Text style={styles.text}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}