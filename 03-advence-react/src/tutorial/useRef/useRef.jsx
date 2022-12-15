import { useEffect, useState, useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  const pRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit" className="submit">
          submit
        </button>
      </form>
      <p ref={pRef}>hello world</p>
    </>
  );
};

export default UseRef;
