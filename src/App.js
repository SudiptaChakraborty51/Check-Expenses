import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Dress',
      amount: 3498,
      date: new Date(2022, 6, 15),
    },
    { id: 'e2', 
      title: 'Food', 
      amount: 342, 
      date: new Date(2022, 6, 16) 
    },
    {
      id: 'e3',
      title: 'Shampoo',
      amount: 215,
      date: new Date(2022, 6, 17),
    },
    {
      id: 'e4',
      title: 'shoe',
      amount: 851,
      date: new Date(2022, 6, 18),
    },
  ];

  return (
    <div>
      <h2 className="heading">Check Your Expenses</h2>
      <NewExpense />
      <Expenses expenseData={expenses} />
    </div>
  );
}

export default App;