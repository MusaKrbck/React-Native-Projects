import { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal, Image } from "react-native";

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      };

      function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
      };
    
    return (
        <Modal visible={props.visible} animationType="fade">    
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/Assassins_creed_logo.png')} />
                <TextInput style={styles.textInput} 
                placeholder='Your course goal!' 
                onChangeText={goalInputHandler}
                value={enteredGoalText} 
                />
                <View style={styles.buttonContainer}>   
                    <View style={styles.button}>   
                        <Button color="#ff4500" title='Cancel' onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button color="#228b22" title='Add Goal' onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'Column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
      },
      image: {
        width: 90,
        height: 110,
        margin: 20,
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#ffffff',
        width: '100%',
        padding: 15,
        borderRadius: 12
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
      },
      button: {
        width: 100,
        marginHorizontal: 8
      }
});

export default GoalInput;

