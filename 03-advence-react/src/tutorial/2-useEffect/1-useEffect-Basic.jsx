import { useState, useEffect } from "react";

const UseEffectBasic = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("appel use effect");
    if (value > 0) {
      document.title = `new message ${value}`;
    }
  }, [value]);
  console.log("rendu");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        clique moi
      </button>
    </>
  );
};

export default UseEffectBasic;
