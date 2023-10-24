'use client'

import React, { useEffect, useRef } from 'react';
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
    {id: 5,
      img: '/A05.jpg',
      desc: 'Ilfracombe Avenue'}, 
]



function Gallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleWheel = (evt: WheelEvent) => {
      evt.preventDefault();
      if (scrollContainer) {
        scrollContainer.scrollLeft += evt.deltaY;
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheel);
      }
    };
  }, []); 

  return (
    <div ref={scrollContainerRef} className='galleryContainer'>
      {images.map((item) => (
        <ImagesCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Gallery;