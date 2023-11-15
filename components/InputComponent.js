import React from "react";
import { View, TextInput, Text } from "react-native";
import { InputComponentStyles as styles } from "../styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from "react-native-svg";

const InputComponent = ({
    iconName,
    error,
    password,
    onFocus = () => { }, ...props }) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hidePassword, setHidePassword] = React.useState(password);
    return (
        <View>
            <Icon name={iconName} style={styles.iconStyle} />
            <TextInput {...props}
                style={[styles.textInputStyle,
                {
                    borderColor: error ? styles.errorInputStyle : isFocused
                        ? styles.focusedInputStyle : styles.unfocusedInputStyle
                },]}
                secureTextEntry={hidePassword}
                autoCorrect={false}
                onFocus={() => {
                    onFocus();
                    setIsFocused(true);
                }}
                onBlur={() => {
                    setIsFocused(false);
                }}
                onChangeText={setNewUser}
                value={user}
            />
            {password && (
                <Icon
                    style={styles.iconStyle}
                    onPress={() => setHidePassword(!hidePassword)}
                    name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                />
            )}
            {error && (
                <Text style={styles.errorMessage}>
                    {error}
                </Text>
            )}
        </View>
    );
};
export default InputComponent;