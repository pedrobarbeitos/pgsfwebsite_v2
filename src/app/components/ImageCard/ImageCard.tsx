import React from 'react'
import './ImageCard.scss'
import Image from 'next/image'

type Props = {item: any}

function ImageCard({item}: Props) {
  return (
    <div className='imageCard'>
        <Image 
        src= {item.img}
        alt= {item.desc}
        fill={true}
        placeholder='blur'
        blurDataURL= {item.img}
        />
    </div>
  )
}

export default ImageCard