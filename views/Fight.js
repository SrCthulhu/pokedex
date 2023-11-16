import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, Modal, TouchableOpacity, FlatList } from 'react-native';
import { LOCALHOST } from '../constants';
import { Pokemon } from '../components/Pokemon'; //Para desplegar en modal a futuro
import { FightStyles as styles } from '../styles';
import { MessageBubble } from '../components/MessageBubble';
import RewardButton from '../components/RewardButton';
import { AuthenticationContext } from '../context/authentication';

export default function Fight({ navigation }) {
    const [userPokemon, setUserPokemon] = useState(null);
    const [enemyPokemon, setEnemyPokemon] = useState(null);
    const [enemyAbilities, setEnemyAbilities] = useState({});
    const [messages, setMessages] = useState([]);
    const { token } = useContext(AuthenticationContext);

    const handleAbilityPress = () => {
        if (userPokemon && userPokemon.ability) {
            const message = userPokemon.ability;
            sendMessage(message);
        }
    };
    const handleHiddenAbility2Press = () => {
        if (userPokemon && userPokemon.ability2) {
            const message = userPokemon.ability2;
            sendMessage(message);
        }
    };

    const handleHiddenAbilityPress = () => {
        if (userPokemon && userPokemon.hidden_ability) {
            const message = userPokemon.hidden_ability;
            sendMessage(message);
        }
    };

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
            setEnemyAbilities(data.enemyAbilities);
            return data.actualCombat; // Return the combat ID
        } catch (error) {
            console.error('Error fetching pokemons:', error);
            return null;
        }
    }
    const fetchMessages = async () => {
        try {
            const combatId = await actualCombat();
            const response = await fetch(`${LOCALHOST}/messages?token=${token}&combat_Id=${combatId}`);
            const data = await response.json();
            if (!response.ok) {
                console.error('Error fetching messages:', data.error);
            } else {
                // Update the (messages) state with the fetched messages
                setMessages(data.messages);
            }
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };
    useEffect(() => {
        actualCombat();
        fetchMessages();
    }, []);
    const sendMessage = async (message) => {
        try {
            const actualCombatId = await actualCombat(); // Call the function and await the result
            const response = await fetch(`${LOCALHOST}/messages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token,
                },
                body: JSON.stringify({ combat_Id: actualCombatId, message }),
            });
            const data = await response.json();
            if (response.ok) {
                // Llamar a la función fetchMessages para actualizar la lista de mensajes
                fetchMessages();
                // Después de un segundo, crea mensajes automáticos del enemigo
                setTimeout(async () => {
                    const enemyMessages = createEnemyMessages(data.enemyAbilities);
                    setMessages([...messages, ...enemyMessages]);
                }, 1000);
            } else {
                console.error('Error sending message:', data.error);
            }

            setMessages('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };
    /*   const generateEnemyMessage = () => {
           // Generate the enemy's message randomly (example)
           const randomMessage = 'Enemy message';
           setMessages((prevMessages) => [
               ...prevMessages,
               { id: prevMessages.length + 1, content: randomMessage, sender: 'bot' },
           ]);
       }; */

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

    const renderMessageBubble = ({ item }) => {
        const isUserMessage = item.sender === 'user';
        return (
            <MessageBubble     // Datos de la db para el componente
                key={item._id}
                content={item.message}
                sender={item.sender} // Verifica si el usuario actual es el remitente
            />
        );
    };
    /* const renderEnemyAbilitiesBubble = () => {
         if (enemyAbilities && (enemyAbilities.ability || enemyAbilities.hidden_ability)) {
             return (
                 <MessageBubble
                     content={`Enemy Abilities: ${enemyAbilities.ability || ''}, ${enemyAbilities.hidden_ability || ''}`}
                     sender="bot"
                 />
             );
         }
         return null;
     }; */

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
                <View style={[styles.messageContainer, styles.anotherBubble]}>
                    <Text style={styles.anotherText}>Escupir Hilo</Text>
                </View>
                <FlatList
                    data={messages.userMessages} //Nombre retornado en el GET MESSAGES PYTHON
                    renderItem={({ item, index }) => renderMessageBubble({ item, index })}
                    keyExtractor={(item, index) => item.id || index.toString()}

                />
                <View style={[styles.messageContainer, styles.anotherBubble]}>
                    <Text style={styles.anotherText}>Picadura</Text>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={handleAbilityPress}>
                    <Text style={styles.buttonText}>{userPokemon?.ability ?? ''}</Text>
                </TouchableOpacity>
                <View style={styles.separator} />
                <TouchableOpacity style={styles.button} onPress={handleHiddenAbility2Press}>
                    <Text style={styles.buttonText}>{userPokemon?.ability2 ?? ''}</Text>
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