import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/experiences">EXPERIENCES</Link>
        </li>
        <li>
          <Link to="/resume">RESUME</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;
