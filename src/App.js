import React, { useState } from 'react';
import './App.css';
import AllItems from './components/expenceItems/AllItems'
import AddItem from './components/expenceItems/AddItem';

const expensesData = [
  {
    id: 'f4',
    title: 'collage cainteen',
    price: 60,
    date: new Date(2023, 6, 20),
  },
  {
    id: 'f3',
    title: 'fish food',
    price: 430,
    date: new Date(2023, 6, 18),
  },
  {
    id: 'f2',
    title: 'metro charge',
    price: 42,
    date: new Date(2023, 6, 18),
  },
  {
    id: 'f1',
    title: 'brought washing items',
    price: 95,
    date: new Date(2023, 6, 16),
  },
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
  const [expenses, setExpenses] = useState(expensesData)

  function addingNewItemHandler(newExpence) {
    setExpenses(prevExpence => [newExpence, ...prevExpence])
  }

  function updateExpenceHandeler(changedTitle, id){
    for(let i=0; i<expenses.length; i++){
      if(expenses[i].id === id){
        setExpenses((prevExpence)=>{
          prevExpence[i]={...prevExpence[i],id: id, title: changedTitle}
          return [...prevExpence ]
        })
      }
    }
  }

  return (
    <div className="App">
      <AddItem onAddingNewItem={addingNewItemHandler} />
      <header className="App-header">
        <div>Expences Traker</div>
      </header>
      <AllItems expenses={expenses} onTitleChangeUp={updateExpenceHandeler} />
    </div>
  );
}

export default App;
