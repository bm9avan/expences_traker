import React, { useState } from 'react'
import ItemBody from './ItemBody'
import BoxCard from '../UI/BoxCard'
import ExpensesFilter from './ExpensesFilter'
import Chart from '../chart/Chart'
import './AllItems.css'

function AllItems({ expenses, onTitleChangeUp, loading }) {

    const [year, setYear] = useState('all')

    function SetYearHandler(yearpassed) {
        setYear(yearpassed)
    }

    function onTitleChangeHandler(changedTitle, id) {
        onTitleChangeUp(changedTitle, id)
    }

    let filteredExpenses = (year === 'all' ? expenses : expenses.filter((expense) => { return expense.date.getFullYear().toString() === year }))

    return (
        <BoxCard className='outerBox'>
            <div className='box-header'>{year === 'all' ? 'All Years' : year}</div>
            <ExpensesFilter yearSlected={year} onSetYear={SetYearHandler} />
            <Chart expenses={filteredExpenses} />
            {filteredExpenses.length === 0 ? <div className='box-header'>{loading ? 'Loading...' : 'No Expenses Added'}</div> : filteredExpenses.map(expense => {
                return (
                    <ItemBody key={expense.id} id={expense.id} date={expense.date} title={expense.title || "Title not given"} price={expense.price || "00"} onTitleChange={onTitleChangeHandler} />
                );
            })}
        </BoxCard>
    )
}

export default AllItems