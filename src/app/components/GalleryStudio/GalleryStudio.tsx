'use client'

import React, { useState, useEffect, useRef } from 'react';
import './GalleryStudio.scss'
import ImageCard from '../ImageCard/ImageCard'


const profileImages = [
    {id: 51,
     img: '/A51.jpg',
     desc: 'Sara profile picture '},
    {id: 52,
     img: '/A52.jpg',
     desc: 'Pedro profile picture '}, 
]



function GalleryStudio() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleWheel = (evt: WheelEvent) => {
      
      if (scrollContainer) {
        scrollContainer.scrollLeft += evt.deltaY;
      }
    };

    const handleMouseDown = (evt: MouseEvent) => {
      setIsDragging(true);
      setStartX(evt.pageX - scrollContainer!.offsetLeft);
      setScrollLeft(scrollContainer!.scrollLeft);
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (evt: MouseEvent) => {
      if (!isDragging) return;
      evt.preventDefault();
      const x = evt.pageX - scrollContainer!.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      scrollContainer!.scrollLeft = scrollLeft - walk;
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheel);
      scrollContainer.addEventListener('mousedown', handleMouseDown);
      scrollContainer.addEventListener('mouseleave', handleMouseLeave);
      scrollContainer.addEventListener('mouseup', handleMouseUp);
      scrollContainer.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheel);
        scrollContainer.removeEventListener('mousedown', handleMouseDown);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        scrollContainer.removeEventListener('mouseup', handleMouseUp);
        scrollContainer.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <div ref={scrollContainerRef} className='galleryContainer'>
      {profileImages.map((item) => (
        <ImageCard item={item} key={item.id} />
      ))}
      
    </div>
  );
};

export default GalleryStudio;