// import { setpage } from "./App.js";

//ABOUT button
export const Aboutbutton = ({ setpage }) => {
  const handleClick = () => {
    setpage("about");
  };
  return <button onClick={handleClick}>ABOUT</button>;
};

//HOME button
export const Homebutton = ({ setpage }) => {
  const handleClick = () => {
    setpage("home");
  };
  return <button onClick={handleClick}>HOME</button>;
};
