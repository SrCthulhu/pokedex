import React, { useState, useEffect, useRef, useContext } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { LOCALHOST } from '../constants';
import { towerStyles as styles } from '../styles';
import ButtonGradientRegistry from "../components/ButtonGradientRegistry";
import { AuthenticationContext } from '../context/authentication';

export default function Tower() {
    const [pokemons, setPokemons] = useState([]);
    const [userPokemon, setUserPokemon] = useState(null);
    const flatListRef = useRef(null);
    const lastWonRef = useRef(0);
    const { token } = useContext(AuthenticationContext);

    useEffect(() => {
        getPokemons();
        getUserPokemon();
    }, []);

    useEffect(() => {
        if (pokemons.length && flatListRef && lastWonRef) {
            flatListRef.current.scrollToIndex({ index: Number(lastWonRef.current) });
        }
    }, [pokemons, flatListRef, lastWonRef]);

    const getPokemons = async () => {
        try {
            const response = await fetch(`${LOCALHOST}/pokemons`);
            const data = await response.json();
            setPokemons(data.pokemons);
        } catch (error) {
            console.error('Error fetching pokemons:', error);
        }
    }
    const getUserPokemon = async () => {
        try {
            const response = await fetch(`${LOCALHOST}/userPokemon`, {
                headers: {
                    'token': token, // Include the token in the headers
                },
            });
            const data = await response.json();
            lastWonRef.current = 0;
            setUserPokemon(data.userPokemon);
            console.log("data in front side:", data)
        } catch (error) {
            console.error('Error fetching the user pokemon:', error);
        }
    }

    ////////// Componente /////////////
    const PokemonItem = React.memo(({ item, index }) => {
        // Busco el último item de la lista y creo condición para agregar padding al final.
        const isLastItem = index === pokemons.length - 1;
        return (
            <View style={[styles.pokemonContainer, isLastItem && styles.lastPokemonContainer]}>
                <Image
                    style={styles.pokemonImage}
                    source={{ uri: item.image }}
                />
                <Text style={styles.pokemonName}>{item.name}</Text>
                <View style={styles.separator} />
            </View>
        );
    }, (prevProps, nextProps) => {
        return prevProps.item === nextProps.item; // Comparamos item para memoization (React.memo optimiza la carga de la lista de items)
    });
    const renderUserPokemon = () => {
        if (userPokemon) {
            return (
                <View style={styles.userPokemonContainer}>
                    <Image
                        style={styles.pokemonImage}
                        source={{ uri: userPokemon.image }}
                    />
                    <Text style={styles.pokemonName}>{userPokemon.name}</Text>
                </View>
            );
        }
        return null;
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.backgroundImageContainer}>
                <Image
                    style={styles.backgroundImage}
                    source={{ uri: 'https://res.cloudinary.com/dpwaxzhnx/image/upload/v1685662774/Pokedex_db/polygonal_conections_zbaerj.jpg' }}
                />
            </View>
            <View style={styles.header}>
                <Text style={styles.titleStyle}>Batallas Pokémon</Text>
            </View>
            <View style={styles.subHeader}>
                <Text style={styles.subHeaderDescription}>Modo campaña, sube de nivel y gana recompensas.</Text>
            </View>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Nivel: {lastWonRef.current + 1}</Text>
            </View>
            <View style={styles.container}>
                {renderUserPokemon()}
                <View style={styles.Innercontainer}>
                    <Image
                        style={styles.vsImage}
                        source={{ uri: 'https://res.cloudinary.com/dpwaxzhnx/image/upload/v1685746508/Pokedex_db/Street_Fighter_VS_logo_rywkgv.png' }}
                    />
                </View>
                <View style={styles.flatlistContainer}>
                    <FlatList
                        ref={flatListRef}
                        data={pokemons}
                        renderItem={({ item, index }) => <PokemonItem item={item} index={index} />}
                        keyExtractor={(item) => item._id.$oid}
                        contentContainerStyle={{
                            paddingBottom: pokemons.length > 0 ? 100 : 0, // Adjust paddingBottom
                        }}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <ButtonGradientRegistry text="COMENZAR" />
                </View>
            </View>
        </View>
    );
}