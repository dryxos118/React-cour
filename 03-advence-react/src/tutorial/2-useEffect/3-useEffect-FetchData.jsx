import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>utilisateur Github</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;

          return (
            <li key={id}>
              <img src={avatar_url} alt="" />
              <div>
                <h4>{login}</h4>
                <a href={html_url} target="_blank">
                  profil
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
