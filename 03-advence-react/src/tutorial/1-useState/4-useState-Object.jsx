import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "alex",
    age: 20,
    message: "au pif",
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "hello" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change le message
      </button>
    </>
  );
};

export default UseStateObject;
