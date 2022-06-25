import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

function NewExpense(props) {
    const [isAdding, setIsAdding] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsAdding(false);
    };

    const startAddingHandler = () => {
        setIsAdding(true);
    }

    const stopAddingHandler = () => {
        setIsAdding(false);
    }

    return(
        <div className="new-expense">
            {!isAdding && (
                <button onClick={startAddingHandler}>Add New Expenses</button>
            )}
            {isAdding && (
                <ExpenseForm 
                    onSaveExpenseData={saveExpenseDataHandler} 
                    onCancel={stopAddingHandler}
                />
            )}
        </div>
    )
}
export default NewExpense;