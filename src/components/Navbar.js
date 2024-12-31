import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/style.css";

function Navbar() {
  //use navigate to direct between routes
  const navigate = useNavigate();

  //get the function with handling
  const buttons = document.querySelectorAll(".button");
  // Add click event listener to each button
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove the 'active' class from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));
      // Add 'active' class to the clicked button
      button.classList.add("active");
    });
  });

  return (
    <nav className="navT">
      <button className="button" onClick={() => navigate("/")}>
        HOME
      </button>
      <button className="button" onClick={() => navigate("/about")}>
        ABOUT
      </button>
      <button className="button" onClick={() => navigate("/experiences")}>
        EXPERIENCES
      </button>
      <button className="button" onClick={() => navigate("/resume")}>
        RESUME
      </button>
      {/* Add more links as needed */}
    </nav>
  );
}

export default Navbar;
