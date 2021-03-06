import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Dress',
    amount: 3498,
    date: new Date(2022, 6, 15),
  },
  { id: 'e2', 
    title: 'Food', 
    amount: 342, 
    date: new Date(2022, 8, 16) 
  },
  {
    id: 'e3',
    title: 'Shampoo',
    amount: 215,
    date: new Date(2022, 3, 17),
  },
  {
    id: 'e4',
    title: 'shoe',
    amount: 851,
    date: new Date(2023, 6, 18),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    })
  }
  
  return (
    <div>
      <h2 className="heading">Check Your Expenses</h2>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses expenseData={expenses} />
    </div>
  );
}

export default App;