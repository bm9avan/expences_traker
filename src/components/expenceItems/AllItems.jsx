import React, {useState} from 'react'
import ItemBody from './ItemBody'
import BoxCard from '../UI/BoxCard'
import ExpensesFilter from './ExpensesFilter'
import './AllItems.css'

function AllItems({expenses}) {

    const [year, setYear]= useState('all')

    function SetYearHandler(yearpassed){
        setYear(yearpassed)
    }

    return (
        <BoxCard className='outerBox'>
            <div className='box-header'>{year==='all'? 'All Years': year}</div>
            <ExpensesFilter yearSlected={year} onSetYear={SetYearHandler} />
            {(year==='all'?expenses : expenses.filter((expense)=>{return expense.date.getFullYear().toString() === year})).map(expense => {
                return (
                    <ItemBody key={expense.id} date={expense.date} title={expense.title || "Title not given"} price={expense.price || "00"} />
                );
            })}
        </BoxCard>
    )
}

export default AllItems