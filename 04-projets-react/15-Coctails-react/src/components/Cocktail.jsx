import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({
  strDrink: name,
  strDrinkThumb: img,
  strAlcoholic,
  strGlass: glass,
  idDrink: id,
}) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{strAlcoholic}</p>
        <Link
          to={`/singleCocktail/${id}`}
          className="btn btn-primary btn-details"
        >
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
