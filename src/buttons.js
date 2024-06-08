// import { setpage } from "./App.js";

export const Aboutbutton = ({ setpage }) => {
  const handleClick = () => {
    setpage("about");
  };
  return <button onClick={handleClick}>ABOUT</button>;
};

export const Homebutton = ({ setpage }) => {
  const handleClick = () => {
    setpage("home");
  };
  return <button onClick={handleClick}>HOME</button>;
};
