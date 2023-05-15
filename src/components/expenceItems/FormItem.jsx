import React, { useState } from 'react'
import './FormItem.css'


const date = new Date();
const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date).split('/');
const todayDate = formattedDate[2]+'-'+formattedDate[0]+'-'+formattedDate[1]  // Output: "2023-05-13"

function FormItem(props) {
    
    const [input, setInput] = useState({title:'', price:'10', date: todayDate})
    
    const titleChangeHandler = (event) => { setInput(prevInput=>{return {...prevInput, title: event.target.value}}) }
    const priceChangeHandler = (event) => { setInput(prevInput=>{return {...prevInput, price: event.target.value}}) }
    const dateChangeHandler = (event) => { setInput(prevInput=>{return {...prevInput, date: event.target.value}}) }
    const submitHandler = (event) =>{
        event.preventDefault();
        props.onFormSubmit(input);
        setInput({title:'', price:'10', date: todayDate});
    }

    return (
        <form onSubmit={submitHandler} className={props.className}>
            <div className="controls">
                <div className="control">
                    <label htmlFor="addTitle">Title  : </label>
                    <input type="text" name="addTitle" id="addTitle" value={input.title} onChange={titleChangeHandler} />
                </div>
                <div className="control">
                    <label htmlFor="addPrice">Price  : </label>
                    <input type="number" min="10" name="addPrice" id="addPrice" value={input.price} onChange={priceChangeHandler} />
                </div>
                <div className="control">
                    <label htmlFor="addDate">Date  : </label>
                    <input type="date" name="addDate" id="addDate" value={input.date} onChange={dateChangeHandler} />
                </div>
                <div className="action">
                    <button type="submit">Add Item</button>
                </div>
            </div>
        </form>
    )
}

export default FormItem