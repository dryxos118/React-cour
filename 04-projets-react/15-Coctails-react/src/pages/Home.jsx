import { useState, useEffect, useCallback } from "react";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";
import Loading from "../components/Loading";

const Home = () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");

  const [drink, setDrink] = useState([]);
  // console.log(drink);
  const getCocktail = useCallback(async () => {
    try {
      const resp = await fetch(`${url}${name}`);
      const { drinks } = await resp.json();
      // console.log(data);
      if (drinks) {
        setDrink(drinks);
      } else {
        setDrink([]);
      }
      setIsLoading(false);
      // console.log(data);
    } catch (error) {
      setIsLoading(false);
    }
  }, [name]);

  useEffect(() => {
    getCocktail();
  }, [getCocktail]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <SearchForm name={name} setName={setName} />
      <CocktailList drink={drink} />
    </main>
  );
};

export default Home;
