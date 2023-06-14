import React, { createContext, useState, useEffect } from "react";
import { LOCALHOST } from '../constants';

export const FavoritesContext = createContext();

export default function Provider({ children }) {
    const [favorite, setFavorite] = useState([]);
    const [flag, setFlag] = useState(true);

    useEffect(() => {
        async function getFavorites() {
            console.log("Find Favorites")
            const dataFinded = await findFavorites();
            setFavorite(dataFinded);
        }

        console.log("useEffect")
        if (flag) {
            setFlag(false);
            getFavorites();
        }

    }, [flag]);

    async function updateFavorite() {
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
            const newList = [...favorite]; // El operador (...variable) indica que quieres clonar para no sobreescribir el elemento
            const found = newList.filter(element => element.name === poke.name);
            if (found.length === 0) {
                newList.push(poke);
                saveFavorite(poke);
                setFavorite(newList);
            } else {
                const newListPokes = newList.filter(element => element.name !== poke.name);
                newList.push(poke);
                deleteFavorite(poke);
                setFavorite(newListPokes);
            }
        } catch (error) {
            console.log({ error });
        }
    };
    const findFavorites = async () => {
        const rr = await fetch(`${LOCALHOST}/favorite`)
        const res = await rr.json()

        return res.favorite;
    };
    const saveFavorite = async (poke) => {
        try {
            const { _id, ...pokemon } = poke;
            console.log({ pokemon });

            const rr = await fetch(`${LOCALHOST}/favorite`, {
                method: 'POST',
                body: JSON.stringify(pokemon),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const res = await rr.json();
            console.log(res);
        } catch (e) {
            console.log("http error", { e });
        }
    };

    const deleteFavorite = async (poke) => {
        const rr = await fetch(`${LOCALHOST}/favorite`, {
            method: 'DELETE',
            body: JSON.stringify(poke),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const res = await rr.json()
        console.log(res)
    };


    return (
        <FavoritesContext.Provider value={{ favorite, setFavorite, updateFavorite, addFavorite, saveFavorite, deleteFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

