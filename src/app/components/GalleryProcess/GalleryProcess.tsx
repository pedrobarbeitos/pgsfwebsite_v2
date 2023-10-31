"use client";

import React, { useState, useEffect, useRef } from "react";
import "./GalleryProcess.scss";
import TextCard from "../TextCard/TextCard";
import Image from "next/image";
import ContactCard from "../ContactCard/ContactCard";

const profileImages = [
  { id: 51, img: "/A51.jpg", desc: "Sara profile picture " },
  { id: 52, img: "/A52.jpg", desc: "Pedro profile picture " },
];

const textCard50 = {
  name: "our process",
  title: "",
  desc1:
    "We are an architecture practice run by a team of young and ambitious architects, who are passionate about creating innovative and sustainable designs that exceed our clients expectations.",
  desc2:
    "Our studio's work is centred around finding a considered solution to our client's brief by taking the big idea and resolving it back to its simplest form, to a point where there is nothing more to add or to take away.",
  desc3:
    "We strive to find the delicate balance between craft, materials, functionality, sustainability, light and nature, whilst sensitively considering each detail to create a refined design.",
};

const textCard51 = {
  name: "Stage 1",
  title: "Concept Design",
  desc1: "",
  desc2:
    "Sara founded PGSF Architects with Pedro in 2015 with extensive experience working in residential architecture in the UK. He graduated from the University of Porto and is an ARB and RIBA qualified architect. He has a particular interest in construction-led design. Through his close involvement in the late stages of a wide range of projects he has explored the practical and theoretical aspects of construction in great depth.",
  desc3:
    "He has previously worked in Austria and UK based practices where he led several projects ranging from small scale private residential work through to new-build housing developments and larger multi-unit residential schemes.",
};

const textCard52 = {
  name: "Stage 2",
  title: "Concept Design",
  desc1: "",
  desc2:
    "Pedro founded PGSF Architects with Sara in 2015 with extensive experience working in residential architecture in the UK. He graduated from the University of Porto and is an ARB and RIBA qualified architect. He has a particular interest in construction-led design. Through his close involvement in the late stages of a wide range of projects he has explored the practical and theoretical aspects of construction in great depth.",
  desc3:
    "He has previously worked in Austria and UK based practices where he led several projects ranging from small scale private residential work through to new-build housing developments and larger multi-unit residential schemes.",
};

const textCard53 = {
  name: "Stage 3",
  title: "Concept Design",
  desc1: "",
  desc2:
    "Pedro founded PGSF Architects with Sara in 2015 with extensive experience working in residential architecture in the UK. He graduated from the University of Porto and is an ARB and RIBA qualified architect. He has a particular interest in construction-led design. Through his close involvement in the late stages of a wide range of projects he has explored the practical and theoretical aspects of construction in great depth.",
  desc3:
    "He has previously worked in Austria and UK based practices where he led several projects ranging from small scale private residential work through to new-build housing developments and larger multi-unit residential schemes.",
};

const textCard54 = {
  name: "Stage 4",
  title: "Concept Design",
  desc1: "",
  desc2:
    "Pedro founded PGSF Architects with Sara in 2015 with extensive experience working in residential architecture in the UK. He graduated from the University of Porto and is an ARB and RIBA qualified architect. He has a particular interest in construction-led design. Through his close involvement in the late stages of a wide range of projects he has explored the practical and theoretical aspects of construction in great depth.",
  desc3:
    "He has previously worked in Austria and UK based practices where he led several projects ranging from small scale private residential work through to new-build housing developments and larger multi-unit residential schemes.",
};

const textCard55 = {
  name: "Stage 5",
  title: "Concept Design",
  desc1: "",
  desc2:
    "Pedro founded PGSF Architects with Sara in 2015 with extensive experience working in residential architecture in the UK. He graduated from the University of Porto and is an ARB and RIBA qualified architect. He has a particular interest in construction-led design. Through his close involvement in the late stages of a wide range of projects he has explored the practical and theoretical aspects of construction in great depth.",
  desc3:
    "He has previously worked in Austria and UK based practices where he led several projects ranging from small scale private residential work through to new-build housing developments and larger multi-unit residential schemes.",
};

const textCard56 = {
  name: "Stage 6",
  title: "Concept Design",
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
    <div ref={scrollContainerRef} className="galleryProcess">
      <TextCard
        name={textCard50.name}
        title={textCard50.title}
        description1={textCard50.desc1}
        description2={textCard50.desc2}
        description3={textCard50.desc3}
      />
      <TextCard
        name={textCard51.name}
        title={textCard51.title}
        description1={textCard51.desc1}
        description2={textCard51.desc2}
        description3={textCard51.desc3}
      />
      <TextCard
        name={textCard52.name}
        title={textCard52.title}
        description1={textCard52.desc1}
        description2={textCard52.desc2}
        description3={textCard52.desc3}
      />
      <TextCard
        name={textCard53.name}
        title={textCard53.title}
        description1={textCard53.desc1}
        description2={textCard53.desc2}
        description3={textCard53.desc3}
      />
      <TextCard
        name={textCard54.name}
        title={textCard54.title}
        description1={textCard54.desc1}
        description2={textCard54.desc2}
        description3={textCard54.desc3}
      />
      <TextCard
        name={textCard55.name}
        title={textCard55.title}
        description1={textCard55.desc1}
        description2={textCard55.desc2}
        description3={textCard55.desc3}
      />
      <TextCard
        name={textCard56.name}
        title={textCard56.title}
        description1={textCard56.desc1}
        description2={textCard56.desc2}
        description3={textCard56.desc3}
      />
      <Image
        key={profileImages[0].id}
        src={profileImages[0].img}
        alt={profileImages[0].desc}
        className="image"
        width={600}
        height={1000}
        placeholder="blur"
        blurDataURL={profileImages[0].img}
      />
      <ContactCard />
    </div>
  );
}

export default GalleryStudio;
