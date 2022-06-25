import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

function ExpensesList(props) {
    if(props.expenseData.length === 0){
        return <p className="expenses-list__fallback">No expenses found.</p>
    }

    return(
        <ul className="expenses-list">
            {props.expenseData.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    );
}

export default ExpensesList;
