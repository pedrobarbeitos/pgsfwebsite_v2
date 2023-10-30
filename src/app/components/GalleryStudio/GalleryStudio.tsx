"use client";

import React, { useState, useEffect, useRef } from "react";
import "./GalleryStudio.scss";
import TextCard from "../TextCard/TextCard";
import ContactCard from "../ContactCard/ContactCard";
import Image from "next/image";

const profileImages = [
  { id: 51, img: "/A51.jpg", desc: "Sara profile picture " },
  { id: 52, img: "/A52.jpg", desc: "Pedro profile picture " },
];

const textCard01 = {
  name: "about us",
  title: "",
  desc1:
    "We are an architecture practice run by a team of young and ambitious architects, who are passionate about creating innovative and sustainable designs that exceed our clients expectations.",
  desc2:
    "Our studio's work is centred around finding a considered solution to our client's brief by taking the big idea and resolving it back to its simplest form, to a point where there is nothing more to add or to take away.",
  desc3:
    "We strive to find the delicate balance between craft, materials, functionality, sustainability, light and nature, whilst sensitively considering each detail to create a refined design.",
};

const textCard02 = {
  name: "sara feio",
  title: "BArch(Hons) DipArch ARB",
  desc1: "",
  desc2:
    "Sara founded PGSF Architects with Pedro in 2015 with extensive experience working in residential architecture in the UK. He graduated from the University of Porto and is an ARB and RIBA qualified architect. He has a particular interest in construction-led design. Through his close involvement in the late stages of a wide range of projects he has explored the practical and theoretical aspects of construction in great depth.",
  desc3:
    "He has previously worked in Austria and UK based practices where he led several projects ranging from small scale private residential work through to new-build housing developments and larger multi-unit residential schemes.",
};

const textCard03 = {
  name: "pedro barbeitos gomes",
  title: "BArch(Hons) DipArch ARB RIBA",
  desc1: "",
  desc2:
    "Pedro founded PGSF Architects with Sara in 2015 with extensive experience working in residential architecture in the UK. He graduated from the University of Porto and is an ARB and RIBA qualified architect. He has a particular interest in construction-led design. Through his close involvement in the late stages of a wide range of projects he has explored the practical and theoretical aspects of construction in great depth.",
  desc3:
    "He has previously worked in Austria and UK based practices where he led several projects ranging from small scale private residential work through to new-build housing developments and larger multi-unit residential schemes.",
};

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
    <div ref={scrollContainerRef} className="galleryStudio">
      <TextCard
        name={textCard01.name}
        title={textCard01.title}
        description1={textCard01.desc1}
        description2={textCard01.desc2}
        description3={textCard01.desc3}
      />
      <Image
        key={profileImages[0].id}
        src={profileImages[0].img}
        alt={profileImages[0].desc}
        className="image"
        width={2800}
        height={3000}
        placeholder="blur"
        blurDataURL={profileImages[0].img}
      />
      <TextCard
        name={textCard02.name}
        title={textCard02.title}
        description1={textCard02.desc1}
        description2={textCard02.desc2}
        description3={textCard02.desc3}
      />
      <Image
        key={profileImages[1].id}
        src={profileImages[1].img}
        alt={profileImages[1].desc}
        className="image"
        width={2800}
        height={3000}
        placeholder="blur"
        blurDataURL={profileImages[1].img}
      />
      <TextCard
        name={textCard03.name}
        title={textCard03.title}
        description1={textCard03.desc1}
        description2={textCard03.desc2}
        description3={textCard03.desc3}
      />
      <Image
        key={profileImages[1].id}
        src={profileImages[1].img}
        alt={profileImages[1].desc}
        className="image"
        width={2800}
        height={3000}
        placeholder="blur"
        blurDataURL={profileImages[1].img}
      />

      <ContactCard />
    </div>
  );
}

export default GalleryStudio;
