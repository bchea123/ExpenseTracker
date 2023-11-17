import axios from "axios";

export function storeExpense(expenseData) {
    axios.post(
        'https://expense-tracker-d3d48-default-rtdb.firebaseio.com/expenses.json',
        expenseData
    );
}