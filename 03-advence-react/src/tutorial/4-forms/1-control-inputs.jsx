import { useState } from "react";

const ControlInputs = () => {
  const [people, setPeople] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName && lastName) {
      const person = {
        id: new Date().getTime().toString(),
        firstName: firstName,
        lastName: lastName,
      };
      setPeople([...people, person]);
      setFirstName("");
      setLastName("");
    } else {
      console.log("vide");
    }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">prenom :</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="lastName">nom :</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <button type="submit">ajoute une personne</button>
        </form>
        {people.map((person) => {
          const { id, firstName, lastName } = person;
          return (
            <div className="item" key={id}>
              <h4>{lastName}</h4>
              <p>{firstName}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlInputs;
