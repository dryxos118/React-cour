import { useState, useEffect } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  const firstValue = text || "hello world";
  const secondValue = text && "hello people";
  //   console.log(secondValue);
  return (
    <>
      <h2>{text || "hello world"}</h2>
      <h2>valeur : {text && "hello world"}</h2>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle
      </button>
      {isError && <h2>error...</h2>}
      {isError ? <h2>il y a une error...</h2> : <h2>il y a pas d'error...</h2>}
      {/* moins utiliser */}
      {/* <h2>{text ? text : "hello world"}</h2> */}
    </>
  );
};

export default ShortCircuit;
