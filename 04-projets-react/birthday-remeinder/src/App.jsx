import { useState } from "react";
import Birthdays from "./Birthdays";
import { data } from "./data";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} anniversaire aujourd'hui</h3>
          {people.map((person) => {
            return <Birthdays key={person.id} {...person} />;
          })}
          <button
            onClick={() => {
              setPeople([]);
            }}
          >
            enleve la liste
          </button>
        </section>
      </main>
    </>
  );
};

export default App;
