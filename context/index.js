import React, { createContext, useState, useEffect } from "react";
import { LOCALHOST } from '../constants';

export const FavoritesContext = createContext();

export default function Provider({ children }) {
    const [favorites, setFavorites] = useState([]);
    const [flag, setFlag] = useState(true);

    useEffect(() => {
        async function retrieveFavorites() {
            console.log("findFavorites")
            const favoritesRetrieved = await findFavorites();
            setFavorites(favoritesRetrieved);
        }

        console.log("useEffect")
        if (flag) {
            setFlag(false);
            retrieveFavorites();
        }

    }, [flag]);

    async function updateFavorites() {
        /*
        const list = item.getItem('_favorites');
        if (list) {
            const tmp = JSON.parse(list);
            setFavorites(tmp);
        }
        */
    }

    const addFavorite = async poke => {
        try {
            const newList = [...favorites]; // El operador (...variable) indica que quieres clonar para no sobreescribir el elemento
            const found = newList.filter(element => element.name === poke.name);
            if (found.length === 0) {
                newList.push(poke);
                saveFavorites(poke);
                //save en el API
                //await item.setItem('_favorites', JSON.stringify(newList));
                setFavorites(newList);
            } else {
                const newListPokes = newList.filter(element => element.name !== poke.name);
                newList.push(poke);
                deleteFavorites(poke);
                //save en el API
                //await item.setItem('_favorites', JSON.stringify(newListPokes));
                setFavorites(newListPokes);
            }
        } catch (error) {
            console.log({ error });
        }
    };

    const saveFavorites = async (poke) => {
        const rr = await fetch(`${LOCALHOST}/favorites`, {
            method: 'POST',
            body: JSON.stringify(poke),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const res = await rr.json()
        console.log(res)
    };
    const findFavorites = async () => {
        const rr = await fetch(`${LOCALHOST}/favorites`)
        const res = await rr.json()

        return res.favorites;
    };


    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites, updateFavorites, addFavorite, saveFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};

