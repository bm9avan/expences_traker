import React, {useState} from 'react';
import './App.css';
import AllItems from './components/expenceItems/AllItems'
import AddItem from './components/expenceItems/AddItem';

const expensesData = [
  {
    id: 'e1',
    title: 'Paper',
    price: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'New TV', 
    price: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    price: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    price: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses]= useState(expensesData)
  function addingNewItemHandler(newExpence){
    setExpenses(prevExpence => [newExpence, ...prevExpence])
  }

  return (
    <div className="App">
      <AddItem onAddingNewItem={addingNewItemHandler} />
      <header className="App-header">
        <div>Expences Traker</div>
      </header>
      <AllItems expenses={expenses}/>
    </div>
  );
}

export default App;
