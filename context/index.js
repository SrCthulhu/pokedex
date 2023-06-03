import React, { createContext, useState, useEffect } from "react";
import { LOCALHOST } from '../constants';

export const CollectedContext = createContext();

export default function Provider({ children }) {
    const [collected, setCollected] = useState([]);
    const [flag, setFlag] = useState(true);

    useEffect(() => {
        async function retrieveCollected() {
            console.log("findCollected")
            const collectedRetrieved = await findCollected();
            setCollected(collectedRetrieved);
        }

        console.log("useEffect")
        if (flag) {
            setFlag(false);
            retrieveCollected();
        }

    }, [flag]);

    async function updateCollected() {
        /*
        const list = item.getItem('_favorites');
        if (list) {
            const tmp = JSON.parse(list);
            setFavorites(tmp);
        }
        */
    }

    const addCollected = async poke => {
        try {
            const newList = [...collected]; // El operador (...variable) indica que quieres clonar para no sobreescribir el elemento
            const found = newList.filter(element => element.name === poke.name);
            if (found.length === 0) {
                newList.push(poke);
                saveCollected(poke);
                //save en el API
                //await item.setItem('_favorites', JSON.stringify(newList));
                setCollected(newList);
            } else {
                const newListPokes = newList.filter(element => element.name !== poke.name);
                newList.push(poke);
                deleteCollected(poke);
                //save en el API
                //await item.setItem('_favorites', JSON.stringify(newListPokes));
                setCollected(newListPokes);
            }
        } catch (error) {
            console.log({ error });
        }
    };

    const saveCollected = async (poke) => {
        const rr = await fetch(`${LOCALHOST}/collected`, {
            method: 'POST',
            body: JSON.stringify(poke),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const res = await rr.json()
        console.log(res)
    };
    const findCollected = async () => {
        const rr = await fetch(`${LOCALHOST}/collected`)
        const res = await rr.json()

        return res.collected;
    };

    const deleteCollected = async (poke) => {
        const rr = await fetch(`${LOCALHOST}/collected`, {
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
        <CollectedContext.Provider value={{ collected, setCollected, updateCollected, addCollected, saveCollected, deleteCollected }}>
            {children}
        </CollectedContext.Provider>
    );
};

