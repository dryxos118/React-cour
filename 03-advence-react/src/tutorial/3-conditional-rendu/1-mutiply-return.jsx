import { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultiplyReturn = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("utilisateur");

  console.log(user);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);
  if (isLoading) {
    return (
      <div>
        <h1>chargement...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>error...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{user ? user : "pas d'utilisateur"}</h1>
    </div>
  );
};

export default MultiplyReturn;
