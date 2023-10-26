'use client'

import React, { useState, useEffect, useRef } from 'react';
import './GalleryStudio.scss'
import ImageCard from '../ImageCard/ImageCard'
import TextCard from '../TextCard/TextCard';


const profileImages = [
    {id: 51,
     img: '/A51.jpg',
     desc: 'Sara profile picture '},
    {id: 52,
     img: '/A52.jpg',
     desc: 'Pedro profile picture '}, 
]


const textCard01 = {
  title: 'About us',
  desc: "We are an architecture practice run by a team of young and ambitious architects, who are passionate about creating innovative and sustainable designs that exceed our clients expectations. Our studio&apos;s work is centred around finding a considered solution to our client&apos;s brief by taking the big idea and resolving it back to its simplest form, to a point where there is nothing more to add or to take away. We strive to find the delicate balance between craft, materials, functionality, sustainability, light and nature, whilst sensitively considering each detail to create a refined design."
}



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
    <div ref={scrollContainerRef} className='galleryStudio'>
      <TextCard title={textCard01.title} description={textCard01.desc}/>
      {profileImages.map((item) => (
        <ImageCard item={item} key={item.id} />
      ))}
      <TextCard title={textCard01.title} description={textCard01.desc}/>

    </div>
  );
};

export default GalleryStudio;