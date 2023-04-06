import React, { createContext, useState, useEffect } from "react";
import { LOCALHOST } from '../constants';

export const FavoritesContext = createContext();

export default function Provider({ children }) {
    const [favorites, setFavorites] = useState([]);
    // Traemos los favoritos desde el localStorage
    useEffect(() => {
        async function getFavorites() {
            const list = await AsyncStorage.getItem('_favorites');
            if (list) {
                const tmp = JSON.parse(list);
                setFavorites(tmp);
            }
        }
        getFavorites();
    }, []);

    async function updateFavorites() {
        const list = await AsyncStorage.getItem('_favorites');
        if (list) {
            const tmp = JSON.parse(list);
            setFavorites(tmp);
        }
    }

    const addFavorite = async poke => {
        try {
            const newList = [...favorites]; // El operador (...variable) indica que quieres clonar para no sobreescribir el elemento
            const find = newList.filter(element => element.name === poke.name);
            if (find.length === 0) {
                newList.push(poke);
                await AsyncStorage.setItem('_favorites', JSON.stringify(newList));
                setFavorites(newList);
            } else {
                const newListPokes = newList.filter(element => element.name !== poke.name);
                await AsyncStorage.setItem('_favorites', JSON.stringify(newListPokes));
                setFavorites(newListPokes);
            }
        } catch (error) {
            console.log({ error });
        }
    };

    const saveFavorites = async () => {
        const rr = await fetch(`${LOCALHOST}/saveFavorites`, {
            method: 'POST',
            body: JSON.stringify({ favorites, setFavorites }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const res = await rr.json()
        console.log(res)
        res.success
    };
    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites, updateFavorites, addFavorite, saveFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};

