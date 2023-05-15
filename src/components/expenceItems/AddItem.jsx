import React, {useState} from 'react'
import './AddItem.css'
import FormItem from './FormItem'
import BoxCard from '../UI/BoxCard'
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

function AddItems({onAddingNewItem}) {
    const [hide, setHide] = useState(true)

    function formSubmitHandler(newExpence){
        onAddingNewItem({id:Math.random() , ...newExpence, date:new Date(newExpence.date)})
    }

    return (
        <BoxCard className='new-expense'>
            <header onClick={()=>{setHide(!hide)}} className="App-header">
                <div className='App-header-title'>Add Expences</div>
                <span className='icon-right'>
                <BiChevronDown onClick={()=>{setHide(!hide)}} className={`${!hide ? 'hide': ''}`}/>
                <BiChevronUp onClick={()=>{setHide(!hide)}} className={`${hide ? 'hide': ''}`}/>
                </span>
            </header>
            <FormItem className={`${hide ? 'hide': ''}`} onFormSubmit={formSubmitHandler} />
        </BoxCard>
    )
}

export default AddItems
