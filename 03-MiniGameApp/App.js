import { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if (userNumber) {
    screen = <GameScreen />
  }
  
  return (
    <LinearGradient colors={['#4e0329','#ddb52f']} style={styles.rootScreen}>
      <ImageBackground 
      source={require('../03-MiniGameApp/assets/background.png')} 
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backGroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backGroundImage: {
    opacity: 0.15,
  },
});