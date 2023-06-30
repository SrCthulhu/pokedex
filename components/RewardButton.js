import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FightStyles as styles } from '../styles';
export default function RewardButton({ onPress, text, textColor }) {

    return (
        <TouchableOpacity
            style={styles.rewardInnerContainer}
            onPress={onPress}>
            <LinearGradient
                colors={['#000', '#fff']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={{ flex: 1, width: '100%' }}
            >
                <View style={{ flex: 1, paddingHorizontal: '10%', justifyContent: 'center' }}>
                    <Text style={[styles.rewardText, { color: textColor }]}>{text}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
}