import React from 'react'
import './TextCard.scss'


type Props = {name: any, title: any, description1: any, description2: any, description3: any}

function TextCard({name, title, description1, description2, description3 }: Props) {
  return (
    <div className='textCard'>
        <div className='topText'>
          <h1><b>{name}</b></h1>
          <h3>{title}</h3>
        </div>
        <br></br>
        <div className='botText'>
          <h2>{description1}</h2>
          <br></br>
          <h2>{description2}</h2>
          <br></br>
          <h2>{description3}</h2>
        </div>

    </div>
  )
}

export default TextCard