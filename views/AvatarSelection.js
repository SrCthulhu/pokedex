import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { LOCALHOST } from '../constants';
import { avatarScreenStyles as styles } from '../styles';
import { AuthenticationContext } from '../context/authentication';

export default function Avatars({ navigation }) {
    const [avatarList, setAvatarList] = useState([]);
    const { token } = useContext(AuthenticationContext);

    useEffect(() => {
        const getAvatars = async () => {
            const response = await fetch(`${LOCALHOST}/avatars`, {
                headers: {
                    'Content-Type': 'application/json',
                    'token': token,
                },
            });
            const data = await response.json();
            const { avatars } = data;

            setAvatarList(avatars);
        }

        getAvatars();
    }, [token]);

    const handleAvatarSelected = async (selectedAvatarName) => {

        const selectedAvatar = avatarList.find((avatar) => avatar.name === selectedAvatarName);
        const accessToken = token;

        console.log('Avatar:', selectedAvatar);
        const response = await fetch(`${LOCALHOST}/avatarSelected`, {
            method: 'POST',
            body: JSON.stringify({ token: accessToken, selectedAvatar }),
            headers: {
                'Content-Type': 'application/json',
                'token': `container ${accessToken}`,
            },
        });

        const data = await response.json();
        if (data.success) {
            navigation.navigate("PokemonSelection");
        }
    };

    const flatListData = avatarList.sort((a, b) => {
        if (a.category < b.category) return -1;
        if (a.category > b.category) return 1;
        // Si la categoría es la misma organiza el avatar por el nombre.
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    }).reduce((data, avatar) => {
        const categoryName = avatar.category;

        const existingCategory = data.find((item) => item.category === categoryName);

        if (!existingCategory) {
            // Agrega nuevo header de categoría
            data.push({
                category: categoryName,
                isCategory: true,
            });
        }

        // Agrega el avatar a la categoría actual
        data.push({
            avatar,
            isCategory: false,
        });

        return data;
    }, []);

    const renderItem = ({ item }) => {
        if (item.isCategory) {
            // Render del header de categoría
            return (
                <View style={styles.categoryContainer}>
                    <Text style={styles.categoryDescription}>Categoría: {item.category}</Text>
                </View>
            );
        } else {
            // Render del componente avatar
            return <Character avatar={item.avatar} handleAvatarSelected={handleAvatarSelected} />;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titleHeader}>Selecciona tu avatar de entrenador</Text>
            </View>
            <FlatList
                data={flatListData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

function Character({ avatar, handleAvatarSelected }) {
    return (
        <TouchableOpacity onPress={() => handleAvatarSelected(avatar.name)} style={styles.innercontainer}>
            <View style={[styles.circle, { backgroundColor: "#BDBDBD" }]} />
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: avatar?.img }} />
            </View>
            <View style={styles.descriptioncontainer}>
                <Text style={styles.nameTitle}>{avatar?.name}</Text>
                <Text style={styles.description}>Buff + {avatar?.buff}% de poder para los pokémons tipo: eléctrico y agua</Text>
                <View style={styles.separator} />
            </View>
        </TouchableOpacity>
    );
}
