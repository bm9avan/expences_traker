import React from 'react'
import BoxCard from '../UI/BoxCard'
import './ItemBody.css'

function ItemBody({ date, title, price }) {
  return (
    <div className='box'>
      <BoxCard className='date'>
        <div className='month'>{date.toLocaleString('en-US', { month: 'long' })}</div>
        <div className='year'>{date.getFullYear()}</div>
        <div className='day'>{date.toLocaleString('en-US', { day: '2-digit' })}</div>
      </BoxCard>
      <div className='title'>{title}</div>
      <BoxCard className='price'>₹{price}</BoxCard>
    </div>
  )
}

export default ItemBody