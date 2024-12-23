import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate("/")}>HOME</button>
      <button onClick={() => navigate("/about")}>ABOUT</button>
      <button onClick={() => navigate("/experiences")}>EXPERIENCES</button>
      <button onClick={() => navigate("/resume")}>RESUME</button>
      {/* Add more links as needed */}
    </nav>
  );
}

export default Navbar;
