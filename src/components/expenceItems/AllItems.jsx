import React, { useState } from 'react'
import ItemBody from './ItemBody'
import BoxCard from '../UI/BoxCard'
import ExpensesFilter from './ExpensesFilter'
import Chart from '../chart/Chart'
import './AllItems.css'
import useFetch from '../../hooks/use-fetch'

function AllItems({ expenses, onTitleChangeUp, loading: isLoading, onDelete }) {

    const { callFetch, loading } = useFetch()
    const [year, setYear] = useState('all')

    function SetYearHandler(yearpassed) {
        setYear(yearpassed)
    }

    async function onTitleChangeHandler(changedTitle, id) {
        callFetch({
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(changedTitle),
                    id
    }, (data)=>onTitleChangeUp(data, id))
    }

    let filteredExpenses = (year === 'all' ? expenses : expenses.filter((expense) => { return expense.date.getFullYear().toString() === year }))

    async function deleteHandler(id){
        callFetch({method:"DELETE",id },(d) => { onDelete(id) })
      }

    return (
        <BoxCard className='outerBox'>
            <div className='box-header'>{year === 'all' ? 'All Years' : year}</div>
            <ExpensesFilter yearSlected={year} onSetYear={SetYearHandler} />
            <Chart expenses={filteredExpenses} />
            {filteredExpenses.length === 0 ? <div className='box-header'>{isLoading ? 'Loading...' : 'No Expenses Added'}</div> : filteredExpenses.map(expense => {
                return (
                    <ItemBody key={expense.id} id={expense.id} date={expense.date} title={expense.title || "Title not given"} price={expense.price || "00"} onTitleChange={onTitleChangeHandler} deleteHandler={deleteHandler} />
                );
            })}
        </BoxCard>
    )
}

export default AllItems