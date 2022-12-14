import { useState } from "react";

const MultiplyInputs = () => {
  const [people, setPeople] = useState([]);
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [age, setAge] = useState("");
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (person.firstName && person.lastName) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", lastName: "", age: "" });
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
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="lastName">nom :</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="lastName"
              value={person.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="lastName">age :</label>
            <input
              type="number"
              name="age"
              id="age"
              placeholder="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit">ajoute une personne</button>
        </form>
        {people.map((person) => {
          const { id, firstName, lastName, age } = person;
          return (
            <div className="item" key={id}>
              <h4>{lastName}</h4>
              <p>{firstName}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default MultiplyInputs;
