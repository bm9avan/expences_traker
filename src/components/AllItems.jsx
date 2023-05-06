import React from 'react'
import './AllItems.css'
import ItemBody from './ItemBody'

function AllItems(props) {
    let expenses = props.expenses
    return (
        <div className='outerBox'>
            {expenses.map(expense => {
                return (
                    <ItemBody date={expense.date} title={expense.title || "Title not given"} price={expense.price || "Price not given"} />
                );
            })}
        </div>
    )
}

export default AllItems