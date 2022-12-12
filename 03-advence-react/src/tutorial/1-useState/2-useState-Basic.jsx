import { useState } from "react";

const UseStateBasic = () => {
  const [title, setTitle] = useState("hello world");

  const handleClick = () => {
    if (title === "hello world") {
      setTitle("bonjour");
    } else {
      setTitle("hello world");
    }
  };

  return (
    <>
      <h2>{title}</h2>
      <button className="btn" onClick={handleClick}>
        change le titre
      </button>
    </>
  );
};

export default UseStateBasic;
