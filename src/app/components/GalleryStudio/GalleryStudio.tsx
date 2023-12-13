"use client";

import React, { useState, useEffect, useRef } from "react";
import "./GalleryStudio.scss";
import TextCard from "../TextCard/TextCard";
import ContactCard from "../ContactCard/ContactCard";
import AboutCard from "../AboutCard/AboutCard";
import Image from "next/image";
import profileImages from "../../lib/profileImages";

const textCard02 = {
  name: "Sara Feio",
  title: "BArch(Hons) DipArch ARB",
  desc1:
    "Sara founded PGSF Architects with Pedro in 2016, having gained extensive experience leading residential projects in Essex and London. She graduated from the University of Porto and is an ARB and OA qualified architect. ",
  desc2:
    "She is particularly interested in the topic of sustainability and is determined to minimize the negative environmental impact of all our projects while carefully balancing economic and social factors.",
  desc3:
    "Sara has previously worked in Portugal and UK based practices where she specialised in delivering high end residential projects to an impressive level of detail. The experience and support she brings allows our clients to focus on the project outcomes, while we concentrate on the project process.",
};

const textCard03 = {
  name: "Pedro Barbeitos Gomes",
  title: "BArch(Hons) DipArch ARB RIBA",
  desc1:
    "Pedro founded PGSF Architects with Sara in 2016 with extensive experience working in residential architecture in the UK. He graduated from the University of Porto and is an ARB and RIBA qualified architect.",
  desc2:
    " He has a particular interest in construction-led design. Through his close involvement in the late stages of a wide range of projects he has explored the practical and theoretical aspects of construction in great depth.",
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
      <AboutCard />
      <Image
        key={profileImages[0].id}
        src={profileImages[0].img}
        alt={profileImages[0].desc}
        className="image"
        width={1500}
        height={2000}
        placeholder="blur"
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
        width={1500}
        height={2000}
        placeholder="blur"
      />
      <TextCard
        name={textCard03.name}
        title={textCard03.title}
        description1={textCard03.desc1}
        description2={textCard03.desc2}
        description3={textCard03.desc3}
      />

      <ContactCard />
    </div>
  );
}

export default GalleryStudio;
