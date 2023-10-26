import React from 'react'
import './TextCard.scss'


type Props = {item: any}

function TextCard({item}: Props) {
  return (
    <div className='textCard'>
        
        <h1>{item.title}</h1>
        <p>{item.description}</p>

    </div>
  )
}

export default TextCard