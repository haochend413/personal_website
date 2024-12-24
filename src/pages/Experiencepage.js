import React from "react";
import Item from "../components/experience_item";
import "../style/style.css";

function Experiencepage() {
  return (
    <>
      <h1> Statement </h1>
      <p className="box">
        I am keen on participating in projects, academic researches and internships to improve my
        skills and widen my horizon. I am currently seeking for opportunities in ECE related fields.
      </p>
      <h1> Projects </h1>
      {/* align, imglink, imgname, project_title, project_description, Project_link */}
      <Item
        align={0}
        imglink={"images/PID_HGV_1.png"}
        imgname={"PID_HGV"}
        project_title={"PID_HGV"}
        project_description={
          "Using hardware components to achieve obstacle sensing and smooth speed change. (ECE 198)"
        }
        Project_link={"ECE_198_Final_Report.pdf"}
      />
      <Item align={1} />
    </>
  );
}

export default Experiencepage;
