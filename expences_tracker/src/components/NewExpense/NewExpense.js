import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (expenseData) => {
        const newExpenseData = {
            ...expenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(newExpenseData);
    };
    
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;