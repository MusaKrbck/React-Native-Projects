import { useContext, useEffect, useState } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { fetchExpenses } from '../util/http';
import ErrorOverlay from '../components/UI/ErrorOverlay';

function RecentExpenses() {

    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();

  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
        setIsFetching(true);
        try {
            const expenses = await fetchExpenses();
            expensesCtx.setExpenses(expenses);
        } catch (error) {
            setError('Could not fetch expenses!');
        }
        setIsFetching(false);
    }

    getExpenses();
  }, []);

  if (error && !isFetching) {
    return (
        <ErrorOverlay message={error} /> 
    )
  }

  if (isFetching) {
    return (
        <LoadingOverlay />
    )
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Son 7 Gün"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpenses;