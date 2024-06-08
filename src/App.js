import { useState } from "react";
import { Homebutton, Aboutbutton } from "./buttons";

export default function App() {
  const [page, setpage] = useState("home");

  if (page == "home") {
    return (
      <>
        <section>
          <h1>Homepage</h1>
          <Homebutton setpage={setpage} />
          <Aboutbutton setpage={setpage} />
          <p className="box">Welcome to my homepage!</p>
        </section>
      </>
    );
  } else if (page == "about") {
    return (
      <>
        <section>
          <h1>About</h1>
          <Homebutton setpage={setpage} />
          <Aboutbutton setpage={setpage} />
          <p className="box">
            My name is Haochen Ding. I am a freshman in University of Illinois, Urbana-Champaign. I
            am currently pursuing a Math / Engineering degree. Nice to meet you all!
          </p>
        </section>
      </>
    );
  }
}
