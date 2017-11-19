import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import LogInForm from './components/LogInForm';

export default function LogInScreen({ onLogInUser, onNewUser }) {
    return (
        <View style={styles.container}>
            <LogInForm onSubmit={onLogInUser}/>
            <TouchableOpacity style={styles.newUserBtn} onPress={onNewUser}>
                <Text style={styles.newUserLabel}>I am a new user</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    newUserBtn: {
        marginVertical: 12
    },
    newUserLabel: {
        textDecorationLine: 'underline',
        fontStyle: 'italic'
    }
});
