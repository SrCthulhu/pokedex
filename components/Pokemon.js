import React, { useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { cardStyles as styles } from '../styles';
import { CollectedContext } from '../context/collected';
import { colors } from '../constants';
import { AuthenticationContext } from '../context/authentication';

function translateTypeToEnglish(type) {
    switch (type.toLowerCase()) {
        case 'planta':
            return 'grass';
        case 'eléctrico':
            return 'electric';
        case 'fuego':
            return 'fire';
        case 'agua':
            return 'water';
        case 'roca':
            return 'rock';
        case 'fantasma':
            return 'ghost';
        case 'sombra':
            return 'shadow';
        case 'dragón':
            return 'dragon';
        case 'dragón':
            return 'dragon';
        case 'siniestro':
            return 'dark';
        case 'siniestro':
            return 'dark';
        case 'metal':
            return 'steel';
        case 'hada':
            return 'fairy';
        case 'bicho':
            return 'bug';
        case 'psíquico':
            return 'psychic';
        case 'volador':
            return 'flying';
        case 'tierra':
            return 'ground';
        case 'veneno':
            return 'poison';
        case 'lucha':
            return 'fighting';
        case 'hielo':
            return 'ice';
        case 'normal':
            return 'normal';
        case 'unknown':
            return 'unknown';
        default:
            return 'unknown';
    }
}
export function Pokemon({ pokemon, navigation }) {
    const { addCollected } = useContext(CollectedContext);
    const [isCollected, setIsCollected] = useState(false);
    const translatedType = translateTypeToEnglish(pokemon?.type);
    const backgroundColor = colors[translatedType];
    const { token } = useContext(AuthenticationContext);

    return (
        <TouchableOpacity
            onPress={() => {
                setIsCollected(true);
                addCollected(pokemon, token);
                navigation.navigate("NivelesTab");
            }}
            style={[styles.outlineBorderContainer, isCollected ? styles.selectedContainer : null]}
        >
            <View style={[styles.container, { backgroundColor }]}>
                <Image
                    style={styles.image}
                    source={{ uri: pokemon?.image }}
                />
                <Text style={styles.name}>{pokemon?.name}</Text>
                <View style={styles.separatorContainer}>
                    <View style={styles.separator} />
                </View>
                <Text style={styles.type}>Tipo: {pokemon?.type}</Text>
                <Text style={styles.level}>Nivel: {pokemon?.level}</Text>

            </View>
        </TouchableOpacity>
    );
}
