import Link from "next/link";
import React from "react";
import "./navbar.scss";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="navbar">
      <div className="navbarLeft">
        <Link href="/">
          <b>pgsf</b>architects
        </Link>
      </div>
      <div className="navbarRight">
        <Link href="/studio">studio</Link>
        <Link href="/work">work</Link>
        <Link href="/process">process</Link>
      </div>
    </div>
  );
}

export default Navbar;
