import React from 'react'
import './TextCard.scss'


type Props = {title: any, description: any}

function TextCard({title, description}: Props) {
  return (
    <div className='textCard'>
        
        <h1>{title}</h1>
        <p>{description}</p>

    </div>
  )
}

export default TextCard