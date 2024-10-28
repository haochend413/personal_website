import { useState } from "react";
import { Homebutton, Aboutbutton, Experiencebutton } from "./buttons";
import "./style.css";

export default function App() {
  const [page, setpage] = useState("home");

  if (page == "home") {
    return (
      <>
        <section>
          <Homebutton setpage={setpage} />
          <Aboutbutton setpage={setpage} />
          <Experiencebutton setpage={setpage} />
          <h1>Home</h1>
          <p className="box u-textCenter">Welcome to my homepage!</p>
        </section>
      </>
    );
  } else if (page == "about") {
    return (
      <>
        <section>
          <Homebutton setpage={setpage} />
          <Aboutbutton setpage={setpage} />
          <Experiencebutton setpage={setpage} />
          <h1>About</h1>
          <p className="box">
            My name is Haochen Ding. I am a Sophomore in University of Illinois, Urbana-Champaign. I
            am currently pursuing a Bachelor's Degree in Computer Engineering. Nice to meet you all!
          </p>
        </section>
      </>
    );
  } else if (page == "experiences") {
    return (
      <>
        <section>
          <Homebutton setpage={setpage} />
          <Aboutbutton setpage={setpage} />
          <Experiencebutton setpage={setpage} />
          <h1>Experiences</h1>
          <p className="box">
            I have done many projects, and I am currently assisting research in computer vision.
          </p>
        </section>
      </>
    );
  }
}
