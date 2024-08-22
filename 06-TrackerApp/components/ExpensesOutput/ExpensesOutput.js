import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";


function ExpensesOutput({ expenses , expensesPeriod, fallbackTest }) {
    let content = <Text style={styles.infoText}>{fallbackTest}</Text>;

    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses} />;
    }
    
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses}  periodName={expensesPeriod} />
            <ExpensesList expenses={expenses}/>
        </View>
    );
}


export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32,
    }
});