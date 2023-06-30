import React from 'react';
import { View, Text } from 'react-native';
import { FightStyles as styles } from '../styles';

export function MessageBubble({ content, sender }) {
    const isUser = sender === 'user';
    const bubbleStyle = isUser ? styles.userBubble : styles.botBubble;
    const textStyle = isUser ? styles.userText : styles.botText;

    return (
        <View style={[styles.messageContainer, bubbleStyle]}>
            <Text style={textStyle}>{content}</Text>
        </View>
    );
}
