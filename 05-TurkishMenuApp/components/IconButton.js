// IconButton.js
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({ icon, color, onPress }) {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => pressed ? styles.buttonPressed : null}>
            <Ionicons name={icon} size={24} color={color} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonPressed: {
        opacity: 0.6,
    },
});

export default IconButton;
