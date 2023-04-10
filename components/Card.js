import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FavoritesContext } from '../context';
import { cardStyles as styles } from '../styles';
import { colors } from '../constants';
import { useGetDetails } from '../services';

// TouchableOpacity es como un Botón sin estilo, hace la función de un View pero clickable.
// El símbolo ? con el nombre es para validar que exista y no envíe al front un campo vacío con un error (evitamos crasheo).
export default function Card({ pokemon }) {
    const { favorites, addFavorite, saveFavorites } = useContext(FavoritesContext);
    const [isFavorite, setIsFavorite] = useState(false);

    /* 
    Hacemos un llamado al servidor con useQuery. 
    Para que no muestre un solo dato al realizar el llamado debemos brindar mas información,
    en este caso pokemon?.url
     */
    const { data, isLoading, error } = useGetDetails(pokemon);
    // [styles.container, {}] se utiliza para definir un estilo extra. En este caso para colocar el fondo del color del pokemon.

    useEffect(() => {
        async function getStatus() {
            const find = favorites.filter(element => element.name === pokemon.name);
            if (find.length > 0) {
                setIsFavorite(true);
            } else {
                setIsFavorite(false);
            }
        }
        getStatus();
    }, [favorites, pokemon.name]);


    if (error) {
        <View style={styles.container}>
            <Text>Ha ocurrido un error.</Text>
        </View>;
    }
    if (isLoading) {
        <View style={styles.container}>
            <Text>Cargando...</Text>
        </View>;
    }
    return (
        <View
            style={[
                styles.container,
                { backgroundColor: colors[data?.types[0]?.type?.name] },
            ]}>
            <TouchableOpacity onPress={() => addFavorite(pokemon)}>
                {
                    isFavorite && <Icon name="heart" size={40} color="#E04C50" /> // If corazon rojo (item agregado a la lista)
                }
                {
                    !isFavorite && <Icon name="heart-outline" size={40} color="#FFF" /> //If not corazon blanco (item sin agregar)
                }
            </TouchableOpacity>
            <Image
                style={styles.image}
                source={{ uri: data?.sprites?.other['official-artwork']?.front_default, }}

            />
            <Text style={styles.name}>{data?.name}</Text>
            <Text style={styles.abilities}>Ability: {data?.abilities[0]?.ability?.name}</Text>
            <Text style={styles.xp}>XP: {data?.base_experience}</Text>
            <Text style={styles.number}>N° {data && (data?.id).toString().padStart(3, '0')}</Text>
        </View>
    );
}


/* 
Agregar 0 a un número dado por API: Pasos:
1. Convertir un número en un string Ejemplo: (5).toString()
2. hacer .padStart y brindar dos parametros: cantidad de números
y el elemento con que se llenarán esos espacios en este caso ceros (0).
3. Hacemos verificación con un if (&&) decimos: si data existe ejecuta.
para evitar error cuando sea undefined la respuesta de la API.
*/


/* 
/////////////////////////// Creación de sección para elegir Favoritos ////////////////////////////
Implementamos libreria async storage para guardar datos de manera local (sección de favoritos)
1) .getItem nos permite atrapar el elemento seleccionado y meterlo en la lista que debe ser creada.
2) Hacemos una condicion de si la lista NO (!) es undefined porque no existe la creamos.
3) .push() sirve para agregar elementos al final de un arreglo y devuelve el nuevo peso del arreglo.
4) .setItem toma dos parámetros, en este caso un string, y el valor que va a recibir.
5) JSON.stringify(list) Sirve para convertir un arreglo en texto plano. Lo necesitamos porque
(asyncStorage) solo acepta el tipo de dato de texto plano, no acepta arreglos.
6) JSON.parse nos sirve para el caso contrario para convertir texto en un arreglo.
7) importamos {useEfect} que renderiza antes de cargar los componentes. (esto será para que no se vean)
ambos corazones(blanco/rojo), creamos lógica de uno u otro y useState.
8) Arriba se hizo const [isFavorite, setIsFavorite] = useState(false) para crear condición en el icono;
*/



