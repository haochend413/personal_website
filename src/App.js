import { useState } from "react";

export default function Home() {
  //function that shows when hitting home button
  // const handleClick = () => {
  //   return (
  //     <>
  //       <section>
  //         <img src="images/IMG_20230320_164331.jpg" width="400" height="auto" class="piccenter" />
  //         <h1>Introduction</h1>
  //         <Mybutton></Mybutton>
  //         <p class="box">
  //           Hi! My name is Haochen Ding. I am a freshman in University of Illinois,
  //           Urbana-Champaign. I am currently pursuing a Math / Engineering degree. Nice to meet you
  //           all! Welcome to my webpage!
  //         </p>
  //       </section>
  //     </>
  //   );
  // };

  //this is ok. but React element must be capitalized.
  const Homebutton = () => {
    const handleClick = () => {
      return (
        <>
          <section>
            <p className="box">This is the homepage! Enjoy!</p>
          </section>
        </>
      );
    };

    return <button onClick={handleClick}>HOME</button>;
  };

  return (
    <>
      <section>
        <img src="images/IMG_20230320_164331.jpg" width="400" height="auto" className="piccenter" />
        <h1>Introduction</h1>
        <Homebutton />
        <p className="box">
          Hi! My name is Haochen Ding. I am a freshman in University of Illinois, Urbana-Champaign.
          I am currently pursuing a Math / Engineering degree. Nice to meet you all! Welcome to my
          webpage!
        </p>
      </section>
    </>
  );
}
