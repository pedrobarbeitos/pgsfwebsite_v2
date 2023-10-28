import React from "react";
import GalleryProcess from "../components/GalleryProcess/GalleryProcess";
import "./page.scss";

type Props = {};

function process({}: Props) {
  return (
    <div className="containerMain">
      <GalleryProcess />
    </div>
  );
}

export default process;
