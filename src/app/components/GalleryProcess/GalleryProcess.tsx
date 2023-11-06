"use client";

import React, { useState, useEffect, useRef } from "react";
import "./GalleryProcess.scss";
import TextCard from "../TextCard/TextCard";
import ContactCard from "../ContactCard/ContactCard";
import profileImages from "../../lib/profileImages";
import Image from "next/image";

const textCard50 = {
  name: "Our process",
  title: "how we work",
  desc1: "",
  desc2:
    "We provide architectural services based on the RIBA Schedule of Works. You can scroll through this page to better understand what a building project may entail and the services we can offer. We also provide one-off packages, including interior design and bespoke furniture design. Every project is unique, so this process can be scaled up or down, depending on your needs.",
  desc3:
    "Operating across London from our studio in Notting Hill, we are an ambitious and driven team, striving to ensure that each project is as enjoyable and successful as the last. We are an approachable studio and enjoy the opportunity to discuss any potential projects and collaborations. Do not hesitate to get in touch if you would like to discuss working together.",
};

const textCard51 = {
  name: "Stage 1",
  title: "Preparation and brief",
  desc1: "",
  desc2:
    "The design process begins with a meeting at your property. We will listen to your ideas and expectations and help you define a brief. A variety of design ideas will be put forward, including organisation of spaces, qualities of natural light and material finishes. We will help clarify your intentions and discuss alternative approaches for your project.",
  desc3:
    "We will commission an architectural survey on your property so we can have a rigorous base of drawings to work with and will also assess any soil or structural investigations required. This stage includes advising on the need for other consultants, from Surveyors to Structural Engineers.  Your budget will be discussed and agreed.",
};

const textCard52 = {
  name: "Stage 2 & 3",
  title: "Concept Design and planning",
  desc1: "",
  desc2:
    "We believe in a collaborative design process and we will discuss each aspect of the proposal in detail with you as the design develops. Weekly meetings will take place during this stage as we provide you with drawings, material samples, virtual and physical models that illustrate the qualities of your project and enable you to clearly envisage ideas.",
  desc3:
    "When the project reaches the desired objectives a Plannning Application will be submitted to your local council. For smaller projects there is usually an eight week determination period, in which time the planners will consult with neighbours and relevant bodies. Other consents may be required, depending on the scope of the project.",
};

const textCard53 = {
  name: "Stage 4",
  title: "Technical Design",
  desc1: "",
  desc2:
    "At this stage we will have full planning consent from the local authorities. We will produce a drawing package that will enable exact prices to be provided for construction. A building regulations package will be submitted to an approved inspector who will certify compliance. ",
  desc3:
    "We will advise on the selection of an appropriate building contract for the works, and explain the process of entering into a building contract. Tender documents will be prepared to supply to contractors for pricing.  Contractors will be invited to tender, allowing a period of 4 weeks to review the documents and return completed tender submissions. We will advise on the selection of the best contractor. ",
};

const textCard54 = {
  name: "Stage 5",
  title: "Construction",
  desc1: " ",
  desc2:
    "A pre-contract meeting will be arranged with the selected contractor/builder to discuss the project in detail and to present the building contract for signatures. Once all parts are in agreement a full set of construction drawings will be issued to the contractor and work will begin on site. We will deal with all queries and deliver formal Architect's Instructions to the contractor. ",
  desc3:
    "At regular intervals we will visit site to inspect all works, to ensure that it is completed to the required standard. Once this is agreed, we will certify the work completed and the sums due to the contractor. Site progress Valuations will normally happen every two weeks, with normal site visits happening at least once a week.",
};

const textCard55 = {
  name: "Stage 6",
  title: "Handover",
  desc1: "",
  desc2:
    "A 5% sum is typically retained until the end of the project. When we are completely satisfied with the finished works, we will issue an architect's practical completion certificate which transfers possession of the building back to the client. At this stage the rectification and defects period will begin.",
  desc3:
    "This is typically a 6 month period in which the contractor is instructed to return to rectify any relevant issues that may arise. Once the final certificate is issued at the end of this period the remaining retention sum of 5% is paid to the contractor. We reserve the right to photograph the property and the finished works for our record but we will never expose or publish any images without your consent.",
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
      <ContactCard />
    </div>
  );
}

export default GalleryStudio;
