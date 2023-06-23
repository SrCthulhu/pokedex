import React, { useState, useEffect } from 'react';
import { View, Text, Image, Modal, TouchableOpacity } from 'react-native';
import { LOCALHOST } from '../constants';
import { Pokemon } from '../components/Pokemon';
import { pokemonSelectionStyles as styles } from '../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function PokemonSelection({ navigation }) {
    const [pokemon, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await fetch(`${LOCALHOST}/initial/pokemons`);
                const data = await response.json();
                setPokemons(data.pokemon);
            } catch (error) {
                console.log('Error fetching pokemons:', error);
            }
        }
        fetchPokemons();
    }, []);
    return (
        <View style={styles.mainContainer}>
            <View style={styles.backgroundImageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://res.cloudinary.com/dpwaxzhnx/image/upload/v1685061058/Pokedex_db/dark_room_2_mpgwag.jpg' }}
                />
            </View>
            <View style={styles.header}>
                <Text style={styles.titleStyle}>Selecciona tu Pokémon inicial</Text>
            </View>
            <View style={styles.container}>
                {pokemon.map((poke, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => {
                            setSelectedPokemon(poke);
                            setModalVisible(true);
                        }}
                    >
                        <Image
                            style={styles.pokeballImage}
                            source={{ uri: 'https://res.cloudinary.com/dpwaxzhnx/image/upload/v1685061312/Pokedex_db/1_poke_hj0jm8.png' }}
                        />
                    </TouchableOpacity>
                ))}
            </View>
            <Modal visible={modalVisible} animationType="fade">
                <View style={styles.modalContainer}>
                    <View style={styles.modalBackImageContainer}>
                        <Image
                            style={styles.modalBackImage}
                            source={{ uri: 'https://res.cloudinary.com/dpwaxzhnx/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1685061058/Pokedex_db/particle_flow_juap89.jpg' }}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setModalVisible(false)}
                    >
                        <Icon name="close" size={50} color="#E00004" />
                    </TouchableOpacity>
                    <Pokemon
                        pokemon={selectedPokemon}
                        navigation={navigation}
                    />
                </View>
            </Modal>
        </View>
    );
}