import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { LOCALHOST } from '../constants';
import { avatarScreenStyles as styles } from '../styles';

export default function Avatars({ navigation }) {
    const [flag, setFlag] = useState(true);
    const [avatarList, setAvatarList] = useState([]);

    /*
    // Si la lista esta vacia realiza el fecth una sola vez.
    if (flag) {
        fetch(`${LOCALHOST}/avatars`)
            .then(r => r.json())
            .then(({ avatars }) => {
                setFlag(false);
                setAvatarList(avatars);
            });
    }
    */
    // Organizo los elementos de la lista categoría: Canon primero y luego los misceláneos
    useEffect(() => {
        async function getAvatars() {
            try {
                const response = await fetch(`${LOCALHOST}/avatars`);
                const { avatars } = await response.json();
                const sortedAvatars = avatars.sort((a, b) => {
                    if (a.category === "canon" && b.category !== "canon") {
                        return -1;
                    } else if (a.category !== "canon" && b.category === "canon") {
                        return 1;
                    } else {
                        return a.name.localeCompare(b.name);
                    }
                });
                setFlag(false);
                setAvatarList(sortedAvatars);
            } catch (error) {
                console.log(error);
            }
        }
        if (flag) {
            getAvatars();
        }
    }, [flag]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titleHeader}>Selecciona tu avatar de entrenador</Text>
            </View>
            <View style={styles.categoryContainer}>
                <Text style={styles.categoryDescription}>Categoría de personajes: Canónicos</Text>
            </View>
            <FlatList
                data={avatarList}

                renderItem={({ item }) => <Character avatar={item} />}

            />
        </View>
    );
    function Character({ avatar }) {

        const handleAvatarSelected = async () => {
            const rr = await fetch(`${LOCALHOST}/avatarSelected`, {
                method: 'POST',
                body: JSON.stringify({ avatar }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const res = await rr.json()
            res.success
            navigation.navigate("PokedexTab");
        };
        return <TouchableOpacity
            onPress={handleAvatarSelected}
            style={styles.innercontainer}>
            <View style={[styles.circle, { backgroundColor: "#BDBDBD" }]} />
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: avatar?.img }}
                />
            </View>
            <View style={styles.descriptioncontainer}>
                <Text style={styles.nameTitle}>{avatar?.name}</Text>
                <Text style={styles.description}>Buff + {avatar?.buff}% de poder para los pokémons tipo: electrico y agua </Text>
                <View style={styles.separator} />
            </View>
        </TouchableOpacity>

    }
}