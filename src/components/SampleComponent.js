import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SampleComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is a sample component!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
});

export default SampleComponent;