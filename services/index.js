import { GET_ALL_URL } from '../constants';
import { useInfiniteQuery, useQuery } from 'react-query';
/* Consumo de API, Obtenemos los Pokemons, pageParam es porque la API viene paginada 
y te va traer con el (1) los primeros 20 pokemons. Esto (``) se usa para crear
lógica en el fetch en este caso un if que indica si la página es la primera
obtendrá el link y si no se actualizará gracias a react queary el link a page=2
*/
const getAllPokemon = async ({ pageParam = 1 }) => {
    const res = await fetch(`${pageParam === 1 ? GET_ALL_URL : pageParam}`);
    return res.json();
};
/////// Esta sección pertenece al paso 6 de la búsqueda de un pókemon del home ///////
const getPokemon = async ({ queryKey }) => {
    const res = await fetch(`${GET_ALL_URL}/${queryKey[1]}`);
    return res.json();
};
//Obtener datos internos de cada Pokemon de la API.
/*
queryKey es una forma de react-query de facilitar el trabajo ya que getPokemon nos devuelve
el item, ayuda a acceder al index del elemento, en este caso [0] seria el id del pokemon y
[1] es la url.
*/
const getDetailsPokemon = async ({ queryKey }) => {
    const res = await fetch(queryKey[1]);
    return res.json();
};
export function useGetDetails(pokemon) {
    return useQuery
        (
            ['getPokemon', pokemon?.url], getDetailsPokemon
        );
}

export function useGetPokemon(search) {
    return useQuery(['getPokemon', search], getPokemon, { enabled: !!search, });
}
/*Enabled quiere decir si search es nulo no se ejecuta la query, de lo contrario realiza
la búsqueda del item. Info: el !!search es para convertirlo en booleano y luego en null */
////////////////////////////////////////////////////////////////////////////

export function useGetAllPokemon() {
    return useInfiniteQuery(['getAllPokemon'], getAllPokemon, {
        getNextPageParam: lastPage => {
            if (lastPage.next !== null) {
                return lastPage.next;
            }
            return lastPage;
        },
    });
}

