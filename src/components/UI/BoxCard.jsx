import React from 'react'
import './BoxCard.css'

function BoxCard(props) {
  return (
    <div className={'card '+ props.className}>{props.children}</div>
  )
}

export default BoxCard