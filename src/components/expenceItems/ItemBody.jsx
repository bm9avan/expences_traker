import React, { useRef, useState } from 'react'
import BoxCard from '../UI/BoxCard'
import './ItemBody.css'
import { BiPencil, BiCheck } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

function ItemBody({ id, date, title, price, onTitleChange, deleteHandler }) {
  const [edit,setEdit] =useState(false)
  const [editTitle,setEditTitle] =useState(title)
  const editTitleInput = useRef(title);
  function capFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  function showchangeTitleHandler(){
    setEdit(true)
    setTimeout(()=>{
      editTitleInput.current && editTitleInput.current.focus()
    },10)
  }
  
  function sendTitleHandler(event){
    setEdit(false)
    onTitleChange(editTitle, id)
  }

  return (
    <div className='box'>
      <BoxCard className='date'>
        <div className='month'>{date.toLocaleString('en-US', { month: 'long' })}</div>
        <div className='year'>{date.getFullYear()}</div>
        <div className='day'>{date.toLocaleString('en-US', { day: '2-digit' })}</div>
      </BoxCard>
      <div className='title'>
        {!edit && capFirst(title)}
        {edit && <input type="text" ref={editTitleInput} value={editTitle} className='titleIn' onChange={(event) => setEditTitle(event.target.value)} />}
      </div>
      {!edit && <BiPencil className='editTitle' onClick={showchangeTitleHandler}/>}
      {edit && <BiCheck className='editTitle' onClick={sendTitleHandler}/>}
      <BoxCard className='price'>₹{price}</BoxCard>
      <RiDeleteBin6Line className='editTitle' onClick={()=>{deleteHandler(id)}}/>
    </div>
  )
}

export default ItemBody