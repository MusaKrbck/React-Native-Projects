import { useState } from "react";
import { Text, View, StyleSheet, } from "react-native";

import Title from "../components/title";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;S
    }
  };

function GameScreen() {
    const [currentGuess, setCurrentGuess] = useState();
    
    return (
    <View style={styles.screen}>
        <Text style={styles.title} >
            Opponent's Guess
        </Text>
            {/* {GUESS} */}
        <View>
            <Text>
                Higher or Lower? 
            </Text>
            {/* + - */}
        </View>
        {/* <View>LOG ROUNDS</View> */}
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
});


