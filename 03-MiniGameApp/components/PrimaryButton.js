import { Text, View, Pressable, StyleSheet } from "react-native";


function PrimaryButton({children, onPress}) { 
    return(
        <View style={styles.buttonOuterContainer}>
            <Pressable 
            style={({ pressed }) => 
            pressed 
            ? [styles.buttonInnerContainer, styles.pressed] 
            : styles.buttonInnerContainer}
            onPress={onPress}
            android_ripple={{ color: '#6403233' }} 
            >
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    }
}); 

export default PrimaryButton;

