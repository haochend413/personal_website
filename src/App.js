import { useEffect, React } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Experiencepage from "./pages/Experiencepage";
import Resumepage from "./pages/Resumepage";
import Navbar from "./components/Navbar";
import Titlebar from "./components/TitleBar";

import "./style/style.css";

function App() {
  return (
    <div>
      <script src="http://localhost:3000"></script>
      <Titlebar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/experiences" element={<Experiencepage />} />
        <Route path="/resume" element={<Resumepage />} />
      </Routes>
    </div>
  );
}

export default App;

/***** This version uses buttons to switch between pages. Seems good.  */

// import { useState } from "react";
// import { Homebutton, Aboutbutton, Experiencebutton, Resumebutton } from "./components/buttons";
// import "./style.css";

// export default function App() {
//   //use router to render different pages;

//   const [page, setpage] = useState("home");

//   if (page == "home") {
//     return (
//       <>
//         <section>
//           <Homebutton setpage={setpage} />
//           <Aboutbutton setpage={setpage} />
//           <Experiencebutton setpage={setpage} />
//           <Resumebutton setpage={setpage} />
//           <h1>Home</h1>
//           <p className="box u-textCenter">Welcome to my homepage!</p>
//         </section>
//       </>
//     );
//   } else if (page == "about") {
//     return (
//       <>
//         <section>
//           <Homebutton setpage={setpage} />
//           <Aboutbutton setpage={setpage} />
//           <Experiencebutton setpage={setpage} />
//           <Resumebutton setpage={setpage} />
//           <h1>About</h1>
//           <p className="box">
//             My name is Haochen Ding. I am a Sophomore in University of Illinois, Urbana-Champaign. I
//             am currently pursuing a Bachelor's Degree in Computer Engineering. Nice to meet you all!
//           </p>
//         </section>
//       </>
//     );
//   } else if (page == "experiences") {
//     return (
//       <>
//         <section>
//           <Homebutton setpage={setpage} />
//           <Aboutbutton setpage={setpage} />
//           <Experiencebutton setpage={setpage} />
//           <Resumebutton setpage={setpage} />
//           <h1>Experiences</h1>
//           <p className="box">
//             I have done many projects, and I am currently assisting research in computer vision.
//           </p>
//         </section>
//       </>
//     );
//   } else if (page == "resume") {
//     return (
//       <>
//         <section>
//           <Homebutton setpage={setpage} />
//           <Aboutbutton setpage={setpage} />
//           <Experiencebutton setpage={setpage} />
//           <Resumebutton setpage={setpage} />
//           <h1>Resume & Websites</h1>
//           <p className="box">
//             <a href="public/Resume.pdf">Resume</a>
//             <br></br>
//             <a href="https://github.com/haochend413">Github</a>
//             <br></br>
//             <a href="https://linkedin.com/in/hcd413">Linkedin</a>
//             <br></br>
//           </p>
//         </section>
//       </>
//     );
//   }
// }
