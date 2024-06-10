import { useState } from "react";
import { Homebutton, Aboutbutton } from "./buttons";
import "./style.css";

export default function App() {
  const [page, setpage] = useState("home");

  if (page == "home") {
    return (
      <>
        <section>
          <Homebutton setpage={setpage} />
          <Aboutbutton setpage={setpage} />
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
          <h1>About</h1>
          <p className="box">
            My name is Haochen Ding. I am a freshman in University of Illinois, Urbana-Champaign. I
            am currently pursuing a Math / Engineering degree. Nice to meet you all!
          </p>
        </section>
      </>
    );
  }
}
