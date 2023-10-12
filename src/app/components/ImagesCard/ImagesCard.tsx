import React from 'react'
import './ImagesCard.scss'
import Image from 'next/image'

type Props = {item: any}

function ImagesCard({item}: Props) {
  return (
    <div className='imageContainer'>
        <Image 
        src= {item.img}
        alt= {item.desc}
        fill
        object-fit= 'contain'
        placeholder='blur'
        blurDataURL='grey'
        />
    </div>
  )
}

export default ImagesCard