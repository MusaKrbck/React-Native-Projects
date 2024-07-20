import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, FlatList} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import Title from "../components/ui/title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/card";
import InstructionText from "../components/ui/instructionText";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  };

let minBoundary = 1;
let maxBoundary = 100;


function GameScreen({userNumber, onGameOver, onStartNewGame}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [rounds, setRounds] = useState([initialGuess]);
    
    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(rounds.length); // Bu şekilde toplam tahmin sayısını geçiriyoruz
        }
    }, [currentGuess, userNumber, onGameOver, rounds]);

    function nextGuessHandler(direction) {
        if ((direction === 'lower' && currentGuess < userNumber) 
            || 
            (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert(
                "Don't lie!", "You are a bad guy..",
                [{text:"Forgive me!", style:'cancel'}]            
            );
            return;
        }
        
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setRounds(prevRounds => [newRndNumber, ...prevRounds]);
    }

    const guessRoundlistLength = rounds.length;

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>
                    Higher or Lower? 
                </InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Entypo name="minus" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Feather name="plus" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList 
                    data={rounds} 
                    renderItem={(itemData) => ( 
                        <GuessLogItem 
                            roundNumber={guessRoundlistLength - itemData.index} 
                            guess={itemData.item} 
                        />
                    )}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection:'row',
    },
    buttonContainer: {
        flex: 1,
    },
    instructionText: {
        marginBottom: 12,
    },
    listContainer: {
        flex: 1,
        padding: 16,
    }
});

