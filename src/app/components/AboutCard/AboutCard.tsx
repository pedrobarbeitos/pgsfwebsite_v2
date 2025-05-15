import React from "react";
import "./AboutCard.scss";

function AboutCard() {
  return (
    <div className="textCard">
      <div className="topText">
        <h1>
          <b>About us</b>
        </h1>
      </div>
      <br></br>
      <div className="botText">
        <h2>
          We are a local architecture practice based in West London and run by a
          team of young and ambitious architects. We work on a variety of
          projects, from refurbishments and extensions to newly constructed
          homes.
        </h2>
        <br></br>
        <h2>
          Every commission is approached individually by carefully balancing the
          unique challenges and opportunities of each site, programme and
          budget. Our work seeks to be contemporary while rooted in a strong
          sense of context and a deep concern for the economic and environmental
          aspects of sustainability.
        </h2>
        <br></br>
        <br></br>
        <h2>81 Shirland Road, London W9 2EL</h2>
        <h2>
          <b>
            <a href="mailto: pedro@pgsfarchitects.co.uk">
              pedro@pgsfarchitects.co.uk
            </a>
          </b>
        </h2>
        <h2>07787 416800</h2>
      </div>
    </div>
  );
}

export default AboutCard;
