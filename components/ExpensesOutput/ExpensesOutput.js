import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2023-11-10')
    },
    {
        id : 'e2',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2022-01-05')
    },
    {
        id : 'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2023-10-05')
    },
    {
        id : 'e4',
        description: 'A book',
        amount: 14.99,
        date: new Date('2022-02-19')
    },
    {
        id : 'e5',
        description: 'A book',
        amount: 18.59,
        date: new Date('2022-02-18')
    }
]

function ExpensesOutput({expenses, expensesPeriod}) {
    return (
        <View>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList  expenses={DUMMY_EXPENSES} />
        </View>
    );
}

export default ExpensesOutput;