import React, { useState } from 'react';
import { SafeAreaView, StyleSheet,Alert, AsyncStorage, Text, TextInput, TouchableOpacity } from 'react-native';
import api from '../services/api'

export default function Book({ navigation }) {
    const [date, setDate] = useState('');
    const id = navigation.getParam('id');

    async function handleSubmit(){
        const user_id = await AsyncStorage.getItem('user');
        await api.post(`/spots/${id}/bookings`, {
            date
        },{
            headers: {user_id}
        })
        Alert.alert('Sua solicitação foi enviada');
        navigation.navigate('Home');
    }

    function cancel(){
        navigation.navigate('Home');
    }

    return (
        <SafeAreaView style={styles.container}> 
            <Text style={styles.label}>DIA PARA RESERVA*</Text>
            <TextInput
                style={styles.input}
                placeholder="Para qual dia você quer marcar?"
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
                value={date}
                onChangeText={setDate}
            />

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Reservar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={cancel} style={[styles.button, styles.cancelButton]}>
                <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        margin: 30,
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
        marginTop: 50
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },
    button: {
        height: 42,
        backgroundColor: "#f05a5b",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },
    cancelButton: {
        backgroundColor: "#3E3E3E",
        marginTop: 10
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
})