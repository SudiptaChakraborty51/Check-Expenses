import React, { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenseData.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    let expensesContent = <p className='message'>No expenses found.</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
        ));
    }
    
    return(
        <div>
            <Card className='expenses'>
                <ExpensesFilter 
                    selected={filteredYear} 
                    onChangeFilter={filterChangeHandler} /> 
                {expensesContent}      
            </Card>
        </div>
    )
}
export default Expenses;