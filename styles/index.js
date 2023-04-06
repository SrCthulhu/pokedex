import { Dimensions, StyleSheet } from 'react-native';

/* Importamos Dimensions para saber las dimensiones de la 
pantalla y hacerlo responsivo en cualquier dispositivo
adaptamos en porcentaje el tamaño de la pantalla del usuario
para que en todos los moviles se vea igual.
*/
const { height } = Dimensions.get('screen');

// Exportamos cada estilo para cada componente o vista 
export const cardStyles = StyleSheet.create({
    container: {
        width: '45%',
        height: height * 0.40,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        marginRight: '5%',
        marginBottom: 20,
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 5,
    },
    name: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold", //Negrita
        marginBottom: 5,
    },
    abilities: {
        color: "#3D3D3D",
        fontSize: 13,
        fontWeight: "bold",
    },
    xp: {
        color: "#75AAF9",
        fontSize: 13,
        fontWeight: "bold",
    },
    number: {
        color: "#3D3D3D",
        fontSize: 13,
        fontWeight: "bold",
    },
});

export const headerStyles = StyleSheet.create({
    container: {
        marginRight: '5%',
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        color: '#000',
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        color: '#000',
        marginTop: 10,
    },
    search: {
        backgroundColor: '#18BDB2',
        borderRadius: 20,
        marginTop: 20,
        paddingLeft: 20,
    },

});

export const favoritesStyles = StyleSheet.create({
    container: {
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 20,
    },
});

export const homeStyles = StyleSheet.create({
    container: {
        marginLeft: '5%',
        marginTop: 20
    },
    conditions: {
        color: '#000',
        alignItems: "center",
    }
});
export const aboutStyles = StyleSheet.create({
    container: {
        marginLeft: '5%',
        marginTop: 20,
        marginRight: '5%',
        alignContent: 'center',
        alignItems: 'center',
    },
    textPrimary: {
        color: '#000'
    },
    textSecondary: {
        color: 'gray',
        fontSize: 10,
    },
    imageContainer: {
        marginTop: 10,
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: "center",
        borderRadius: 100
    },
});
export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginLeft: 18,
        marginRight: 18,
    },
    title: {
        fontSize: 28,
        color: '#000',
        fontWeight: 'bold',
        alignSelf: "center",
    },
    imageContainer: {
        marginTop: 10,
        marginBottom: 10,
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: "center",
    },
    textInputStyle: {
        backgroundColor: "#FFF",
        // Espaciado entre inputs
        padding: 6,
        marginTop: 4,
        marginBottom: 12,
        fontSize: 16,
        color: "black",
    },
    textPrimary: {
        color: "#000"
    },
    buttonStyle: {
        backgroundColor: "#BD3736",
    },
    textSecondary: {
        marginTop: 10,
        marginBottom: 10,
    },
    buttonStyle2: {
        backgroundColor: "gray",
    },
    buttonStyle3: {
        backgroundColor: "#18BDB2",
    },
});
export const registryStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginLeft: 18,
        marginRight: 18,
        marginBottom: 15,
        marginTop: 15,
    },
    title: {
        fontSize: 28,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 12,
    },
    textInputStyle: {
        backgroundColor: "#FFF",
        padding: 6,
        marginTop: 4,
        marginBottom: 12,
        fontSize: 16,
        color: "black",
    },
    textPrimary: {
        color: "#000"
    },
    buttonStyle: {
        backgroundColor: "#18BDB2",
    },
    headerContainer: {
        height: 250,
        //justificamos con respecto a la altura del contenedor (no a la derecha todavía)
        justifyContent: "center",
        alignSelf: "center",
        paddingLeft: 12,
        paddingRight: 12,
        marginBottom: 12,
    },
    image: {
        width: 370,
        height: 250,
    },
});