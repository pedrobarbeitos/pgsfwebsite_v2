import React from 'react'
import './TextCard.scss'


type Props = {title: any, description1: any, description2: any}

function TextCard({title, description1, description2 }: Props) {
  return (
    <div className='textCard'>
        
        <h1><b>{title}</b></h1>
        <h1>{description1}</h1>
        <h1>{description2}</h1>

    </div>
  )
}

export default TextCard