import React, { useState } from 'react';
import { View, FlatList, RefreshControl, Text } from 'react-native';
import Card from '../components/Card';
import Header from '../components/Header';
import { homeStyles as styles } from '../styles';
import { GET_ALL_URL } from '../constants';
import { useGetAllPokemon, useGetPokemon } from '../services';

export default function Home() {

    /*
    Creando el buscador, Pasos:
    1. importamos {useState}.
    2. Variables:
    */
    const [tmp, setTmp] = useState('');
    const [search, setSearch] = useState(null);
    /* 
    3. Le pasamos tmp y setTmp al header en el Flatlist
    4. Le pasamos value = {tmp}, onChangeText, onEndEditing al TextInput en Header.js
    5. En el header hacemos una condición if de search indicando: si search es nulo
    que es su estado natural y mostrará todos los pokemons de Flatlist sino no 
    mostrará ninguno, solo el resultado de la búsqueda.
    */

    const { data: searchResult,
        isLoading: searchLoading,
        isFetching: searchFetching,
        error: searchError,
    } = useGetPokemon(search);

    /* En esta sección usamos los elementos que requiere useInfiniteQuery para mostrar
    las diferentes páginas de pokemons y hacemos un if que indica si no existen más paginas
    regresa la última.
    */
    const { data,
        isLoading,
        hasNextPage,
        fetchNextPage,
        isFetching,
        refetch,
        error
    } = useGetAllPokemon();

    // Esta función será para traer más pokemons 
    const loadMore = () => {
        if (hasNextPage) {
            fetchNextPage();
        }
    };
    return (
        <View style={styles.container}>

            <Header
                title='Pokédex 👾'
                description='Busca un pokémon usando su nombre o número.'
                tmp={tmp}
                setTmp={setTmp}
                setSearch={setSearch}
                showSearch
            />

            {!search && (
                <FlatList
                    /* pages, page, results son elementos internos de infinitequery, usamos
                    map para organizar mejor toda la información que nos devolverá. Adicional
                    flat() lo usamos para tomar todos los arreglos y devolverselos a Flatlist
                    de manera sencilla. El data? es para que no marque error la app al no conseguir 
                    elementos. "Info adicional" si quieres un header que no sea estático escribe:
                    ListHeaderComponent={<Header/>} dentro del Flatlist.
                    */
                    data={data?.pages.map(page => page.results).flat()}
                    renderItem={({ item }) => <Card pokemon={item} />}
                    //Número de columnas para mostrar los items
                    numColumns={2}
                    //Acá indicamos que al llegar al final del flatlist, cargue más pokemons
                    onEndReached={loadMore}
                    /* Esto es para indicarle a la app cuánto tiene que esperar para cargar más.
                     en este caso le estamos indicando 20% de los pokemons Ejemplo: al alcanzar
                     8 de 10 items empezará la carga de más elementos. Debe ser en porcentaje.
                     */
                    onEndReachedThreshold={0.2}
                    /*Importamos componente de react RefreshControl para mostrarle al usuario lo que está
                    sucediendo con un icono.
                    */
                    refreshControl={
                        <RefreshControl
                            refreshing={isLoading || isFetching}
                            size="large"
                            tintColor={"#F4F4F4"} />
                    }
                    // (||) significa or de  comparación, devuelve booleano true or false. 
                    refreshing={isLoading || isFetching}
                    onRefresh={refetch}
                />
                /* 
                Acá empezamos los render condicionales, el primero trae el pokemon por el id.
                el segundo indica: si está cargando o (||) está haciendo fetch muestra el mensaje. 
                el tercero si la busqueda es fallida devuelve searchError = true entonces mostramos 
                siguiente mensaje. El cuarto si hay un error de la lista de pokemons de la api.
                */
            )}
            {
                searchResult && (
                    <Card pokemon={{ url: `${GET_ALL_URL}/${searchResult.id}` }} />
                )
            }
            {(searchLoading || searchFetching || isLoading || isFetching) && <Text style={styles.conditions}>Buscando... 🔍</Text>}
            {searchError && <Text style={styles.conditions}>Pokemón no encontrado 👻</Text>}
            {error && <Text style={styles.conditions}>Ha ocurrido un error 💥</Text>}
        </View>
    );
}
