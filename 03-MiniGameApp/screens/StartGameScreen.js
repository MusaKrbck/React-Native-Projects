import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/title";
import Card from "../components/ui/card";
import InstructionText from "../components/ui/instructionText";


function StartGameScreen({onPickNumber}) {
    const[enteredNumber, setEnteredNumber] = useState('');

    function resetInputHandler() {
        setEnteredNumber('');
    }
    
    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    };

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert(
                'Invalid Number',
                'Bro camonnn, between 1 and 99 :)',
                [{ text: 'Okay Bro', style: 'destructive', onPress: resetInputHandler}]
            );
            return;
        };

        onPickNumber(chosenNumber);
    };
    
    return(
        <View style={styles.rootContainer}>
            <Title>Guess my number!</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber} 
                />
                <View style={styles.buttonsContainer}>    
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
        </Card>
    </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },  
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection:'row',
    },
    buttonContainer: {
        flex: 1,
    }
})


export default StartGameScreen;





