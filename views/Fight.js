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
    const [userMessage, setUserMessage] = useState('');
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
            return data.actualCombat; // Return the combat ID
        } catch (error) {
            console.error('Error fetching pokemons:', error);
            return null;
        }
    }
    const handleAbilityPress = () => {
        if (userPokemon && userPokemon.ability) {
            const message = userPokemon.ability;
            sendMessage(message);
        }
    };

    const handleHiddenAbilityPress = () => {
        if (userPokemon && userPokemon.hidden_ability) {
            const message = userPokemon.hidden_ability;
            sendMessage(message);
        }
    };
    const sendMessage = async (message) => {
        try {
            const actualCombatId = await actualCombat(); // Call the function and await the result
            const response = await fetch(`${LOCALHOST}/messages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token,
                    'actualCombat': actualCombatId, // Pass the combat ID to the server
                },
                body: JSON.stringify({ message }),
            });
            const data = await response.json();
            // Update the messages state with the new message
            setMessages((prevMessages) => [
                ...prevMessages,
                { id: prevMessages.length + 1, content: message, sender: 'user' },
            ]);
            // Clear the user message input
            setUserMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };
    const generateEnemyMessage = () => {
        // Generate the enemy's message randomly (example)
        const randomMessage = 'Enemy message';
        setMessages((prevMessages) => [
            ...prevMessages,
            { id: prevMessages.length + 1, content: randomMessage, sender: 'bot' },
        ]);
    };

    useEffect(() => {
        actualCombat();
        // Fetch messages from the server and update the messages state
        const fetchMessages = async () => {
            try {
                const response = await fetch(`${LOCALHOST}/messages`, {
                    headers: {
                        'token': token,
                        'actualCombat': actualCombat(),
                    },
                });
                const data = await response.json();
                // Update the (messages) state with the fetched messages
                setMessages(data.messages);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };
        fetchMessages();
    }, []);

    const renderUserPokemon = () => {
        if (userPokemon) {
            return (
                <View style={styles.userObjectContainer}>
                    <View style={styles.pokemonDataContainer}>
                        <Text style={styles.pokemonData}>{userPokemon.name} / Nivel: {userPokemon.level} / Estado: {userPokemon.state}</Text>
                    </View>
                    <View style={styles.healthBarContainer}>
                        <Text style={styles.healthBarText}>{userPokemon.health} %</Text>
                    </View>
                    <Image
                        style={styles.userPokemonImage}
                        source={{ uri: userPokemon.image }}
                    />
                </View>
            );
        }
        return null;
    }
    const renderEnemyPokemon = () => {
        if (enemyPokemon) {
            return (
                <View style={styles.enemyObjectContainer}>
                    <View style={styles.pokemonDataContainer}>
                        <Text style={styles.pokemonData}>{enemyPokemon.name} / Nivel: {enemyPokemon.level} / Estado: {enemyPokemon.state}</Text>
                    </View>
                    <View style={styles.healthBarContainer}>
                        <Text style={styles.healthBarText}>{userPokemon.health} %</Text>
                    </View>
                    <Image
                        style={styles.enemyPokemonImage}
                        source={{ uri: enemyPokemon.image }}
                    />
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
                <TouchableOpacity style={styles.button} onPress={handleAbilityPress}>
                    <Text style={styles.buttonText}>{userPokemon?.ability ?? ''}</Text>
                </TouchableOpacity>
                <View style={styles.separator} />
                <TouchableOpacity style={styles.button} onPress={handleAbilityPress}>
                    <Text style={styles.buttonText}>(pendiente Agregar)</Text>
                </TouchableOpacity>
                <View style={styles.separator} />
                <TouchableOpacity style={styles.secretAbilityButton} onPress={handleHiddenAbilityPress}>
                    <Text style={styles.secretAbilityButtonText}>{userPokemon?.hidden_ability ?? ''}</Text>
                </TouchableOpacity>
            </View>
            <RewardButton text="Recompensas: 100 XP / Nuevo nivel" textColor="#FFF" />
            <View style={styles.additionalButtonsContainer}>
                <TouchableOpacity style={styles.additionalButton}>
                    <Text style={styles.additionalButtonText}>NIVELES</Text>
                </TouchableOpacity>
                <View style={styles.separator} />
                <TouchableOpacity style={styles.additionalButton}>
                    <Text style={styles.additionalButtonText}>REINICIAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}