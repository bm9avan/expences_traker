import React, { useEffect, useState } from 'react';
import './App.css';
import AllItems from './components/expenceItems/AllItems'
import AddItem from './components/expenceItems/AddItem';
import useFetch from './hooks/use-fetch';
import Account from './components/auth/Account';
import { auth } from './utils/firebase';
import Profile from './components/auth/Profile';

function App() {
  const [user, setUser] = useState(false)
  const [expenses, setExpenses] = useState([])
  const { callFetch: getData, loading } = useFetch();

  useEffect(()=>{
    auth.onAuthStateChanged(async (user)=>{
      setUser(user)
    })
  },[])

  function logoutHandler(){
    auth.signOut()
  }

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
    getData({ method: "GET", uid: user.uid }, (data) => refacter(data))
  }, [getData, user])

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

  function onDeleteHandler(id) {
    let exp = expenses.filter(element => {
      if (element.id === id) {
        return false
      }
      return true
    });
    setExpenses(exp)
  }

  return (
    <div className="App">
      {user ?
        <>
          <Profile user={user} logout={logoutHandler}/>
          <AddItem onAddingNewItem={addingNewItemHandler} uid={user.uid}/>
          <header className="App-header">
            <div>Expences Traker</div>
          </header>
          <AllItems expenses={expenses} onTitleChangeUp={updateExpenceHandeler} onDelete={onDeleteHandler} loading={loading} uid={user.uid} />
        </> : <div className='card new-expense'><Account /></div>}
    </div>
  );
}

export default App;
