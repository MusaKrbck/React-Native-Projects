import { View, StyleSheet, Text } from "react-native";
import Button from "../UI/Button";
import Input from "./Input";
import { useState } from "react";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {
    const [inputs, setInputs] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true,
        },
        date: {
            value: defaultValues ? getFormattedDate(defaultValues.date) : '',
            isValid: true,
        },
        description: {
            value: defaultValues ? defaultValues.description : '',
            isValid: true,
        }
    });

    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputs((curInputs) => {
            return {
                ...curInputs,
                [inputIdentifier]: { value: enteredValue, isValid: true },
            };
        });
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value,
        };
    
        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString()  !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;
    
        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            setInputs((curInputs) => ({
                amount: { value: curInputs.amount.value, isValid: amountIsValid },
                date: { value: curInputs.date.value, isValid: dateIsValid },
                description: { value: curInputs.description.value, isValid: descriptionIsValid },
            }));
            return;
        }
    
        onSubmit(expenseData);
    }
    

    const formIsInvalid =
        !inputs.amount.isValid ||
        !inputs.date.isValid ||
        !inputs.description.isValid;

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Para Var Huzur Var..</Text>
            <View style={styles.inputRow}>
                <Input
                    style={styles.rowInput}
                    label="Miktar"
                    inValid={!inputs.amount.isValid}
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChangeHandler.bind(this, 'amount'),
                        value: inputs.amount.value,
                    }} />
                <Input 
                    label="Tarih"
                    style={styles.rowInput}
                    inValid={!inputs.date.isValid}
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: inputChangeHandler.bind(this, 'date'),
                        value: inputs.date.value,
                    }} />
            </View>
            <Input 
                label="Açıklama"
                inValid={!inputs.description.isValid}
                textInputConfig={{
                    multiline: true,
                    onChangeText: inputChangeHandler.bind(this, 'description'),
                    value: inputs.description.value,
                }} />
            {formIsInvalid && (
                <Text style={styles.errorText}>Invalid input values - please check your entered data!</Text>
            )}
            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={onCancel}>
                    Vazgeç
                </Button>
                <Button style={styles.button} onPress={submitHandler}>
                    {submitButtonLabel}
                </Button>
            </View>
        </View>
    );
}

export default ExpenseForm;

const styles = StyleSheet.create({
    form: {
        marginTop: 40,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    errorText: {
        textAlign: 'center',
        color: GlobalStyles.colors.error500,
        margin: 8,
    },
    rowInput: {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
});
