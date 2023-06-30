import { Dimensions, StyleSheet } from 'react-native';

/* Importamos Dimensions para saber las dimensiones de la 
pantalla y hacerlo responsivo en cualquier dispositivo
adaptamos en porcentaje el tamaño de la pantalla del usuario
para que en todos los moviles se vea igual.
*/
const { height, width } = Dimensions.get('screen');

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
        flexDirection: 'row',
        marginVertical: 5

    },
    buttonRegistryStyle: {
        marginLeft: -100
    }
});
export const InputComponentStyles = StyleSheet.create({
    textInputStyle: {
        paddingStart: 15,
        height: 50,
        marginTop: 15,
        borderRadius: 30,
        backgroundColor: '#fff',
        elevation: 15,
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 5
    },
    iconStyle: {
        fontSize: 22,
        color: '#E00004',
        marginRight: 10
    },
    errorInputStyle: {
        color: '#1f62ff',
    },
    focusedInputStyle: {
        color: '#000'
    },
    unfocusedInputStyle: {
        color: 'gray'
    },
    errorMessage: {
        color: '#1f62ff',
        fontSize: 12,
        marginTop: 7
    },
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
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center',
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
    mainContainer: {
        flex: 1,
    },
    backgroundImageContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    image: {
        width: 415,
        height: 660,
        alignSelf: 'center',
        position: 'absolute'
    },
    container: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
    },
    pokeballImage: {
        width: 90,
        height: 90,
        marginRight: 5,
        marginLeft: 5,
        alignItems: 'center',
    },
    header: {
        paddingTop: 12,
        backgroundColor: "#E00004",
        paddingBottom: 12,
    },
    titleStyle: {
        fontSize: 22,
        fontWeight: "bold",
        color: '#FFF',
        alignSelf: 'center',
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalBackImageContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    modalBackImage: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 110,
        left: 280,
    },
});
export const cardStyles = StyleSheet.create({
    container: {
        width: 160,
        height: height * 0.40,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 30,
        paddingTop: 10,
        paddingBottom: 10,
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 5,
    },
    name: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },
    type: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 5,
    },
    level: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5
    },
    outlineBorderContainer: {
        borderWidth: 0,
        borderRadius: 30,
        //    borderColor: 'transparent',
    },
    selectedContainer: {
        borderColor: '#E00004',
        borderWidth: 4,
    },
    separatorContainer: {
        width: '100%',
        alignItems: 'center',
    },
    separator: {
        width: '90%',
        height: 1,
        backgroundColor: '#E0E6ED',
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
export const towerStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    backgroundImageContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    backgroundImage: {
        width: 415,
        height: 615,
        alignSelf: 'center',
        position: 'absolute'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 7,
    },
    header: {
        paddingTop: 12,
        backgroundColor: "#E00004",
        paddingBottom: 12,
    },
    titleStyle: {
        fontSize: 26,
        fontWeight: "bold",
        color: '#fff',
        alignSelf: 'center',
    },
    subHeader: {
        paddingTop: 12,
        backgroundColor: "#1E2D3E",
        paddingBottom: 12,
    },
    subHeaderDescription: {
        fontSize: 16,
        color: '#FFF',
        alignSelf: 'center',
    },
    subtitleContainer: {
        marginTop: 170,
        alignSelf: 'center',
        position: 'absolute'
    },
    subtitle: {
        fontSize: 26,
        fontWeight: "bold",
        color: '#fff',
        alignSelf: 'center',
    },
    pokemonContainer: {
        paddingTop: 30,
        alignItems: 'center',
    },
    pokemonImage: {
        width: 160,
        height: 160,
        resizeMode: 'contain',
    },
    pokemonName: {
        color: "#E00004",
        fontWeight: "bold",
        alignSelf: 'center',
        fontSize: 20,
    },
    Innercontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userPokemonContainer: {
        alignItems: 'center',
    },
    vsImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    flatlistContainer: {
        marginTop: 133,
    },
    lastPokemonContainer: {
        marginBottom: 100, // estilo para Condición del flatlist.
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 100,
    },
});
export const FightStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    mapBackImageContainer: {
        justifyContent: 'flex-start',
    },
    mapBackImage: {
        width: 415,
        height: height * 0.40,
        alignSelf: 'center',
        position: 'absolute'
    },
    textMessagesContainer: {
        width: 420,
        height: height * 0.35,
        backgroundColor: '#1E2D3E',
        marginTop: 292,
        position: 'absolute',
        flexDirection: 'column',
    },
    messageContainer: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        borderRadius: 30,
        width: 190,
        height: height * 0.05,
        alignSelf: 'flex-start',
        backgroundColor: '#ababab',
    },
    userBubble: {
        alignSelf: 'flex-end',
        backgroundColor: '#007AFF',
    },
    botBubble: {
        alignSelf: 'flex-start',
        backgroundColor: '#ababab',
    },
    userText: {
        paddingTop: 4.5,
        fontSize: 20,
        color: '#FFF',
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    botText: {
        paddingTop: 4.5,
        fontSize: 20,
        color: '#000',
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    buttonsContainer: {
        position: 'absolute',
        top: 500,
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        paddingBottom: 74,
    },
    button: {
        flex: 1,
        backgroundColor: '#E00004',
        paddingVertical: 28,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        position: 'absolute',
        paddingVertical: 15,
    },
    secretAbilityButton: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingVertical: 28,
    },
    secretAbilityButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        position: 'absolute',
        paddingVertical: 15,
    },
    separator: {
        paddingVertical: 25,
        width: 2,
        height: '100%',
        backgroundColor: '#dbdbdb',
    },
    rewardInnerContainer: {
        position: 'absolute',
        top: height * 0.76,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: height * 0.08,
    },
    rewardText: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    additionalButtonsContainer: {
        flexDirection: 'row',
        marginTop: 650,
        justifyContent: 'space-between',
    },
    additionalButton: {
        flex: 1,
        backgroundColor: '#ababab',
        paddingVertical: 10,
    },
    additionalButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    userImageContainer: {
        position: 'absolute',
        top: height * 0.18,
        left: 40,
    },
    enemyImageContainer: {
        position: 'absolute',
        top: height * 0.09,
        right: 50,
    },
    userPokemonImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    enemyPokemonImage: {
        width: 115,
        height: 115,
        resizeMode: 'contain',
    },
    pokemonName: {
        color: "#E00004",
        fontWeight: "bold",
        alignSelf: 'center',
        fontSize: 20,
    },
})

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
