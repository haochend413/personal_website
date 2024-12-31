import { React } from "react";
import { useNavigate } from "react-router-dom";
import "../style/style.css";

function TitleBar() {
  const navigate = useNavigate();
  const title_onclick_redirect = () => {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((btn) => btn.classList.remove("active"));
    navigate("/");
  };
  return (
    <div class="navContainer">
      <h1 class="pagetitle" onClick={title_onclick_redirect}>
        Haochen Ding's Website
      </h1>
    </div>
  );
}

export default TitleBar;
