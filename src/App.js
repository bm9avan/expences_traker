import React, { useEffect, useState } from 'react';
import './App.css';
import AllItems from './components/expenceItems/AllItems'
import AddItem from './components/expenceItems/AddItem';
import useFetch from './hooks/use-fetch';

function App() {
  const [expenses, setExpenses] = useState([])
  const { callFetch: getData, loading } = useFetch();

  function refacter(data) {
    if (data) {
      let arr = Object.keys(data).reverse().map((each) => {
        return {
          id: each,
          title: data[each].title,
          price: data[each].price,
          date: new Date(data[each].date)
        }
      })
      setExpenses(arr)
    }
  }

  useEffect(() => {
    getData({method:"GET"}, (data) => refacter(data))
  }, [getData])

  function addingNewItemHandler(newExpence) {
    setExpenses(prevExpence => [newExpence, ...prevExpence])
  }

  function updateExpenceHandeler(changedTitle, id) {
    for (let i = 0; i < expenses.length; i++) {
      if (expenses[i].id === id) {
        setExpenses((prevExpence) => {
          prevExpence[i] = { ...prevExpence[i], id: id, title: changedTitle }
          return [...prevExpence]
        })
      }
    }
  }

  function onDeleteHandler(id){
    let exp = expenses.filter(element => {
      if(element.id === id){
          return false
      }
      return true
    });
    setExpenses(exp)
  }

  return (
    <div className="App">
      <AddItem onAddingNewItem={addingNewItemHandler} />
      <header className="App-header">
        <div>Expences Traker</div>
      </header>
      <AllItems expenses={expenses} onTitleChangeUp={updateExpenceHandeler} onDelete={onDeleteHandler} loading={loading} />
    </div>
  );
}

export default App;
