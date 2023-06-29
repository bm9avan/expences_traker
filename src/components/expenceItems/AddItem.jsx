import React, { useState } from 'react'
import './AddItem.css'
import FormItem from './FormItem'
import BoxCard from '../UI/BoxCard'
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import useFetch from '../../hooks/use-fetch';

function AddItems({ onAddingNewItem }) {
    const [hide, setHide] = useState(true)
    const addData = useFetch();

    function formSubmitHandler(newExpence) {
        addData({
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newExpence)
        }, dataHandler.bind(null, newExpence))
    }

    function dataHandler(newExpence, data) {
        console.log(data)
        onAddingNewItem({ id: data.name, ...newExpence, price: (+newExpence.price), date: new Date(newExpence.date) })
    }

    return (
        <BoxCard className='new-expense'>
            <header onClick={() => { setHide(!hide) }} className="App-header">
                <div className='App-header-title'>Add Expences</div>
                <span className='icon-right'>
                    <BiChevronDown onClick={() => { setHide(!hide) }} className={`${!hide ? 'hide' : ''}`} />
                    <BiChevronUp onClick={() => { setHide(!hide) }} className={`${hide ? 'hide' : ''}`} />
                </span>
            </header>
            <FormItem className={`${hide ? 'hide' : ''}`} onFormSubmit={formSubmitHandler} />
        </BoxCard>
    )
}

export default AddItems
