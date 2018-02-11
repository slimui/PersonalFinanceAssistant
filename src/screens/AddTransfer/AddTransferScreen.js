import React from 'react';
import { View, StyleSheet } from 'react-native';
import TransferForm from './components/TransferForm';

export default function AddTransferScreen({ addTransfer, options }) {
    return (
        <View style={styles.container}>
            <TransferForm
                enableReinitialize
                onSubmit={addTransfer}
                options={options}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 300
    }
});
