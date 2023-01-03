import React from "react";
import { useCallback } from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";

const SingleCocktail = () => {
  const { id } = useParams();
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  // console.log(id);
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState(null);

  const getSingleCocktail = useCallback(async () => {
    try {
      const resp = await fetch(url);
      const { drinks } = await resp.json();
      console.log(drinks);
      if (drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };
        console.log(ingredients);
        setCocktail(newCocktail);
      } else {
        setCocktail(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getSingleCocktail();
  }, [getSingleCocktail]);

  if (loading) {
    return <Loading />;
  }
  // console.log(cocktail);
  if (!cocktail) {
    return <h2 className="section-title">no cocktails</h2>;
  }

  const { name, image, category, info, glass, instructions, ingredients } =
    cocktail;

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients /</span>
            {ingredients.map((item, index) =>
              item ? <span key={index}>{item}</span> : null
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
