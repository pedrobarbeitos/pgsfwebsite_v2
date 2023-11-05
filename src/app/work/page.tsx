import React from "react";
import Gallery from "../components/GalleryWorks/Gallery";
import "./page.scss";

type Props = {};

function work({}: Props) {
  return (
    <div className="containerMain">
      <Gallery />
    </div>
  );
}

export default work;
