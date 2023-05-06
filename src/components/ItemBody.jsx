import React from 'react'
import './ItemBody.css'

function ItemBody({ date, title, price }) {
  return (
    <div className='box'>
      <div className='date'>
        <div className='month'>{date.toLocaleString('en-US', { month: 'long' })}</div>
        <div className='year'>{date.getFullYear()}</div>
        <div className='day'>{date.toLocaleString('en-US', { day: '2-digit' })}</div>
      </div>
      <div className='title'>{title}</div>
      <div className='price'>₹{price}</div>
    </div>
  )
}

export default ItemBody