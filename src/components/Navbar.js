import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/style.css";

function Navbar() {
  // useNavigate to handle route navigation
  const navigate = useNavigate();

  // State to track the active button
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (label, route) => {
    setActiveButton(route);
    navigate(route);
  };

  //Data
  const buttons = [
    { label: "HOME", route: "/" },
    { label: "ABOUT", route: "/about" },
    { label: "EXPERIENCES", route: "/experiences" },
    { label: "RESUME", route: "/resume" },
  ];

  //maping data to structure
  return (
    <nav className="navT">
      {buttons.map(({ label, route }, index) => (
        <button
          key={index}
          className={`button ${activeButton === route ? "active" : ""}`}
          onClick={() => handleButtonClick(label, route)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
