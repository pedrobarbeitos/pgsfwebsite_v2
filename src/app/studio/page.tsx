import React from "react";
import GalleryStudio from "../components/GalleryStudio/GalleryStudio";
import "./page.scss";

type Props = {};

function studio({}: Props) {
  return (
    <div className="containerMain">
      <GalleryStudio />
    </div>
  );
}

export default studio;
