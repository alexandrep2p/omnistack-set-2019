import React, { useState, useEffect } from 'react';
import { SafeAreaView, Image, Text, ScrollView, StyleSheet, AsyncStorage, TouchableOpacity } from 'react-native';

import SpotList from '../components/SpotList'

import logo from '../assets/logo.png'

export default function Home({ navigation }) {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim());
            setTechs(techsArray);
        })
    }, []);

    function exit() {
        AsyncStorage.removeItem('user');
        AsyncStorage.removeItem('techs');
        navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <ScrollView>
                {techs.map(tech => <SpotList key={tech._id} tech={tech} />)}
                <TouchableOpacity onPress={exit} style={styles.button}>
                    <Text style={styles.buttonText}>SAIR</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: 35
    },

    button: {
        height: 42,
        backgroundColor: "#3E3E3E",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        margin: 10
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
})