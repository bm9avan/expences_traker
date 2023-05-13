import React, { useState } from 'react'
import './FormItem.css'


const date = new Date('2023-05-13');
const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date).split('/');
const todayDate = formattedDate[2]+'-'+formattedDate[0]+'-'+formattedDate[1]  // Output: "2023-05-13"
console.log(todayDate)

function FormItem(props) {

    const [titleVal, setTitleVal] = useState('Expence')
    const [priceVal, setPriceVal] = useState('0')
    const [dateVal, setDateVal] = useState(todayDate)
    
    return (
        <form action="submit" method="post" className={props.className}>
            <div className="controls">
                <div className="control">
                    <label htmlFor="addTitle">Title  : </label>
                    <input type="text" name="addTitle" id="addTitle" value={titleVal} onChange={(event) => { setTitleVal(event.target.value) }} />
                </div>
                <div className="control">
                    <label htmlFor="addPrice">Price  : </label>
                    <input type="number" min="10" name="addPrice" id="addPrice" value={priceVal} onChange={(event) => { setPriceVal(event.target.value) }} />
                </div>
                <div className="control">
                    <label htmlFor="addDate">Date  : </label>
                    <input type="date" name="addDate" id="addDate" value={dateVal} onChange={(event) => { setDateVal(event.target.value) }} />
                </div>
                <div className="action">
                    <button type="submit">Add Item</button>
                </div>
            </div>
        </form>
    )
}

export default FormItem