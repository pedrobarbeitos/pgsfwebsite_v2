"use client";

import React, { useState, useEffect, useRef } from "react";
import "./Gallery.scss";
import Image from "next/image";

const images = [
  { id: 1, img: "/A01.jpg", desc: "Casa em Viana Photo 01 " },
  { id: 2, img: "/A02.jpg", desc: "Casa em Viana Photo 02 " },
  { id: 3, img: "/A03.jpg", desc: "Casa em Viana Photo 03 " },
  { id: 4, img: "/A04.jpg", desc: "Casa em Viana Photo 04 " },
  { id: 5, img: "/A05.jpg", desc: "Ilfracombe Avenue" },
];

function Gallery() {
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
      scrollContainer.addEventListener("wheel", handleWheel);
      scrollContainer.addEventListener("mousedown", handleMouseDown);
      scrollContainer.addEventListener("mouseleave", handleMouseLeave);
      scrollContainer.addEventListener("mouseup", handleMouseUp);
      scrollContainer.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleWheel);
        scrollContainer.removeEventListener("mousedown", handleMouseDown);
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
        scrollContainer.removeEventListener("mouseup", handleMouseUp);
        scrollContainer.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <div ref={scrollContainerRef} className="galleryContainer">
      {images.map((item) => (
        <Image
          key={item.id}
          src={item.img}
          alt={item.desc}
          className="image"
          width={3000}
          height={3000}
          placeholder="blur"
          blurDataURL={item.img}
        />
      ))}
    </div>
  );
}

export default Gallery;
