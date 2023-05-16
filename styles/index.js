import { Dimensions, StyleSheet } from 'react-native';

/* Importamos Dimensions para saber las dimensiones de la 
pantalla y hacerlo responsivo en cualquier dispositivo
adaptamos en porcentaje el tamaño de la pantalla del usuario
para que en todos los moviles se vea igual.
*/
const { height } = Dimensions.get('screen');

export const loginStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradientContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    gradientImage: {
        width: 500,
        height: 500,
        position: 'absolute',
    },
    title: {
        paddingTop: 80,
        fontSize: 70,
        color: '#1E2D3E',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        paddingLeft: 20
    },
    subTitle: {
        fontSize: 20,
        color: '#fff',
        alignSelf: 'flex-start',
        paddingLeft: 20
    },
    imageContainer: {
        marginTop: 30,
        marginBottom: 10,
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: "center",
        position: 'absolute'
    },
    textInputStyle: {
        padding: 10,
        paddingStart: 30,
        width: '90%',
        height: 50,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#fff',
        elevation: 10,
    },
    textSecondary: {
        paddingTop: 5,
        color: '#fff',
        alignSelf: 'flex-end',
        paddingRight: 25,
        paddingBottom: 90
    },
    registryContainer: {
        marginTop: 35
    },
    textRegistry: {
        paddingTop: 70,
        color: '#000',
        alignSelf: 'center',
    },
});
export const ButtonGradientStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: 150,
        marginTop: 20,
    },
    button: {
        width: '90%',
        height: 50,
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold'
    }
});
export const ButtonGradientRegistryStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: 150,
        marginTop: 20,
        marginLeft: -10
    },
    button: {
        width: '90%',
        height: 50,
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold'
    }
});
export const registryStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 30
    },
    backgroundImageContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 660,
        alignSelf: 'center',
        position: 'absolute'
    },
    title: {
        fontSize: 30,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 8,
        marginTop: 20,
    },
    textInputStyle: {
        paddingStart: 15,
        height: 50,
        marginTop: 15,
        borderRadius: 30,
        backgroundColor: '#fff',
        elevation: 15,
        justifyContent: 'center',

    },
    buttonRegistryStyle: {
        marginLeft: -100
    }
});
export const avatarScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 15,
    },
    header: {
        paddingTop: 12,
        backgroundColor: "#E00004",
        paddingBottom: 12,
    },
    categoryContainer: {
        paddingTop: 12,
        backgroundColor: "#1E2D3E",
        paddingBottom: 12,
    },
    categoryDescription: {
        paddingLeft: 18,
        fontSize: 15,
        color: '#FFF'
    },
    innercontainer: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        marginBottom: 10

    },
    titleHeader: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 18,
    },
    imageContainer: {
        marginTop: 10,
        bottom: 20,
        right: 80
    },
    image: {
        width: 95,
        height: 95,
        resizeMode: 'contain',
        position: 'absolute',
        justifyContent: 'center'
    },
    circle: {
        marginTop: 5,
        width: 70,
        height: 70,
        borderRadius: 100,
    },
    nameTitle: {
        color: "#000",
        fontSize: 16,
        paddingLeft: 10,
        marginTop: 10
    },
    description: {
        paddingLeft: 10,
        marginRight: 10,
        fontSize: 14,
    },
    descriptioncontainer: {
        flex: 1,
        flexDirection: 'column',
    },
    separator: {
        flexDirection: 'column',
        marginTop: 20,
        flex: 1,
        borderTopWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        borderColor: '#E0E6ED'
    },
});
export const pokemonSelectionStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dialogSquare: {
        paddingTop: 12,
        backgroundColor: "#E00004",
        paddingBottom: 12,
    },
    titleSquare: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 18,
    },
    backgroundImage: {
        width: '100%',
        height: height * 0.90,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        marginBottom: 10
    },
    image: {
        width: 95,
        height: 95,
        resizeMode: 'contain',
        position: 'absolute',
        justifyContent: 'center'
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
        borderWidth: 1.5,
        borderColor: '#1E2D3E',
        borderRadius: 15,
        marginTop: 15,
        paddingLeft: 20,
    },

});
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


export const collectedStyles = StyleSheet.create({
    container: {
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 20,
    },
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
