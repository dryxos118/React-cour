import { useState, useEffect } from "react";

const UseEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);
  //   console.log(size);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);

    return () => {
      console.log("cleanUp");
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <>
      <h1>fenêtre</h1>
      <h2>{size}</h2>
    </>
  );
};

export default UseEffectCleanUp;
