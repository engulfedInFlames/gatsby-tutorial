import { Link } from "gatsby";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/brands">Brands</Link>
        </li>
      </ul>
    </nav>
  );
}
