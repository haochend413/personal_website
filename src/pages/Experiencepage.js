import React, { use } from "react";
import Item from "../components/experience_item";

import "../style/style.css";

function Experiencepage() {
  const handleitemclick = (link) => {
    window.open(link);
  };
  return (
    <>
      <h1 className="section-title"> Statement </h1>
      <p className="box">
        I am keen on participating in projects, academic researches and internships to improve my
        skills and widen my horizon. I am currently seeking for opportunities in ECE related fields.
      </p>
      <h1 className="section-title"> Projects </h1>
      {/* align, imglink, imgname, project_title, project_description, Project_link */}
      {/* this can be done with .map() function; */}
      <Item
        onClick={() =>
          handleitemclick("https://haochend413.github.io/personal_website/ECE_198_Final_Report.pdf")
        }
        align={0}
        imglink={"images/PID_HGV_1.png"}
        imgname={"PID_HGV"}
        project_title={"PID AGV"}
        project_description={
          "Using hardware components to achieve obstacle sensing and smooth speed change. (ECE 198)"
        }
        Project_link={"ECE_198_Final_Report.pdf"}
      />
      <Item
        onClick={() => handleitemclick("https://github.com/haochend413/FFT-Calculator")}
        align={1}
        imglink={"images/FFT_Calculator_1.png"}
        imgname={"FFT"}
        project_title={"FFT Calculator"}
        project_description={
          "Rust-based FFT calculator with SIMD and multithread optimization (CS 199-128)"
        }
        Project_link={"https://github.com/haochend413/FFT-Calculator"}
      />
      <Item
        onClick={() =>
          handleitemclick(
            "Synthesis of Selenomethylene Blue and its Application in Type I, II Photodynamic Therapy.pdf"
          )
        }
        align={0}
        imglink={"images/MBSe MTT.jpg"}
        imgname={"MTT"}
        project_title={"Synthesis of MBSe and Application in Photodynamic Therapy"}
        project_description={
          "Synthesized MBSe photosensitizer and studied its therapeutic effects on cancer cells and simulated tumor organisms."
        }
        Project_link={
          "Synthesis of Selenomethylene Blue and its Application in Type I, II Photodynamic Therapy.pdf"
        }
      />
    </>
  );
}

export default Experiencepage;
