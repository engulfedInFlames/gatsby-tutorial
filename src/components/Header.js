import React from "react";
import Navbar from "./Navbar";
import { Link } from "gatsby";

export default function Header({ title }) {
  return (
    <header>
      <Link to="/">
        <h1>{title}</h1>
      </Link>
      <Navbar />
    </header>
  );
}
