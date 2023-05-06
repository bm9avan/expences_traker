import React from 'react'
import ItemBody from './ItemBody'
import BoxCard from './BoxCard'
import './AllItems.css'

function AllItems(props) {
    let expenses = props.expenses
    return (
        <BoxCard className='outerBox'>
            {expenses.map(expense => {
                return (
                    <ItemBody date={expense.date} title={expense.title || "Title not given"} price={expense.price || "00"} />
                );
            })}
        </BoxCard>
    )
}

export default AllItems