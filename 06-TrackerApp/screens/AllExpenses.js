import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

function AllExpenses() {
    const expensedCtx = useContext(ExpensesContext);

    return (
    <ExpensesOutput 
        expenses={expensedCtx.expenses} 
        expensesPeriod="Total"
        fallbackTest="No registered expenses found!" 
    />

    );
}

export default AllExpenses;