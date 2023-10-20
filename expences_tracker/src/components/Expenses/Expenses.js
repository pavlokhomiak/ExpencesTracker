import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('all');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    
    const getFilteredExpenseItems = (arr, year) => {
        const filteredExpenses = year === 'all' ? arr : arr.filter(e => e.date.getFullYear().toString() === year);

        return filteredExpenses.map(expense => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
                {getFilteredExpenseItems(props.items, filteredYear)}
            </Card>
        </div>
    );
}

export default Expenses;
