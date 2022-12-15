import { useState } from "react";
import data from "./data";

function App() {
  const [text, setText] = useState([]);
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(number) <= 0 || Number(number) > data.length - 1) {
      let random = Math.floor(Math.random() * data.length);
      setText(data.slice(0, random));
    } else {
      setText(data.slice(0, Number(number)));
    }
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum</h3>
      <form className="lorem-form">
        <label htmlFor="number">paragraphe :</label>
        <input
          type="number"
          name="number"
          id="number"
          placeholder="0"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button className="btn" onClick={handleSubmit}>
          génerer
        </button>
      </form>
      <article className="lorem-text">
        {text.map((txt, index) => {
          return <p key={index}>{txt}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
