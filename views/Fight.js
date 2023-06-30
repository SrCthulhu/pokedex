import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, Modal, TouchableOpacity, FlatList } from 'react-native';
import { LOCALHOST } from '../constants';
import { Pokemon } from '../components/Pokemon'; //Para desplegar en modal
import { FightStyles as styles } from '../styles';
import { MessageBubble } from '../components/MessageBubble';
import RewardButton from '../components/RewardButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthenticationContext } from '../context/authentication';

export default function Fight({ navigation }) {
    const [userPokemon, setUserPokemon] = useState(null);
    const [enemyPokemon, setEnemyPokemon] = useState(null);
    const [messages, setMessages] = useState([
        { id: 1, content: 'Pokemon 1: lorem', sender: 'user' },
        { id: 2, content: 'Pokemon 2: lorem', sender: 'bot' },
    ]);
    const { token } = useContext(AuthenticationContext);

    const actualCombat = async () => {
        try {
            const response = await fetch(`${LOCALHOST}/findFighters`, {
                headers: {
                    'token': token,
                },
            });
            const data = await response.json();
            setUserPokemon(data.userPokemon);
            setEnemyPokemon(data.enemyPokemon);

        } catch (error) {
            console.error('Error fetching pokemons:', error);
        }
    }
    useEffect(() => {
        actualCombat();
    }, []);

    const renderUserPokemon = () => {
        if (userPokemon) {
            return (
                <View style={styles.userImageContainer}>
                    <Image
                        style={styles.userPokemonImage}
                        source={{ uri: userPokemon.image }}
                    />
                    <Text style={styles.pokemonName}>{userPokemon.name}</Text>
                </View>
            );
        }
        return null;
    }
    const renderEnemyPokemon = () => {
        if (enemyPokemon) {
            return (
                <View style={styles.enemyImageContainer}>
                    <Image
                        style={styles.enemyPokemonImage}
                        source={{ uri: enemyPokemon.image }}
                    />
                    <Text style={styles.pokemonName}>{enemyPokemon.name}</Text>
                </View>
            );
        }
        return null;
    }

    const renderMessageBubble = ({ item }) => (
        <MessageBubble
            key={item.id}
            content={item.content}
            sender={item.sender}
        />
    );

    return (
        <View style={styles.mainContainer}>
            <View style={styles.mapBackImageContainer}>
                <Image
                    style={styles.mapBackImage}
                    source={{ uri: 'https://res.cloudinary.com/dpwaxzhnx/image/upload/v1687485079/Pokedex_db/map_forest_oljzaz.jpg' }}
                />
            </View>
            {renderUserPokemon()}
            {renderEnemyPokemon()}

            <View style={styles.textMessagesContainer}>
                <FlatList
                    data={messages}
                    renderItem={renderMessageBubble}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>attack 1</Text>
                </TouchableOpacity>
                <View style={styles.separator} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>attack 2</Text>
                </TouchableOpacity>
                <View style={styles.separator} />
                <TouchableOpacity style={styles.secretAbilityButton}>
                    <Text style={styles.secretAbilityButtonText}>special attack </Text>
                </TouchableOpacity>
            </View>
            <RewardButton text="Recompensas: 100 XP / Nuevo nivel" textColor="#FFF" />
            <View style={styles.additionalButtonsContainer}>
                <TouchableOpacity style={styles.additionalButton}>
                    <Text style={styles.additionalButtonText}>Volver a los niveles</Text>
                </TouchableOpacity>
                <View style={styles.separator} />
                <TouchableOpacity style={styles.additionalButton}>
                    <Text style={styles.additionalButtonText}>Reiniciar el combate</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}