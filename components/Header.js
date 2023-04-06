import React from "react";
import { View, Text, TextInput } from "react-native";
import { headerStyles as styles } from "../styles";

export default function Header({ showSearch, tmp, setTmp, setSearch, title, description, }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            {
                showSearch && (<TextInput
                    style={styles.search}
                    placeholder="Comenzar la búsqueda, ingresa"
                    value={tmp}
                    //Ver lo que el usuario escriba
                    onChangeText={(text) => setTmp(text)}
                    /* Evitamos que se busque cada letra haciendo peticiones al servidor 
                    y será solo cuando termine de escribir y le de click a ok. */
                    onEndEditing={() => setSearch(tmp)}
                />)
            }


        </View>
    );
};
