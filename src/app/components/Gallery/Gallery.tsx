import React from 'react'
import './Gallery.scss'
import ImagesCard from '../ImagesCard/ImagesCard'

const images = [
    {id: 1,
     img: '/A01.jpg',
     desc: 'Casa em Viana Photo 01 '},
    {id: 2,
     img: '/A02.jpg',
     desc: 'Casa em Viana Photo 02 '}, 
    {id: 3,
     img: '/A03.jpg',
     desc: 'Casa em Viana Photo 03 '}, 
    {id: 4,
     img: '/A04.jpg',
     desc: 'Casa em Viana Photo 04 '}, 
]

type Props = {}

function Gallery({}: Props) {
  return (
    <div className='galleryContainer'>
    {images.map(item => (
<ImagesCard item={item} key={item.id} />
    ))}
    </div>
  )
}

export default Gallery