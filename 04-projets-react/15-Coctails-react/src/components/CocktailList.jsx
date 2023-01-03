import React from "react";
import Cocktail from "../components/Cocktail";

const CocktailList = ({ drink }) => {
  if (drink.length === 0) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <>
      <section className="section">
        <h2 className="section-title">cocktails</h2>
        <div className="cocktails-center">
          {drink.map((cocktail) => {
            return <Cocktail key={cocktail.idDrink} {...cocktail} />;
          })}
        </div>
      </section>
    </>
  );
};

export default CocktailList;
