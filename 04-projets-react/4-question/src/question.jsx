import React from "react";

const Question = ({ id, title, info, showInfo, handleClick }) => {
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => handleClick(id)}>
          {showInfo ? (
            <i className="fas fa-plus"></i>
          ) : (
            <i className="fas fa-minus"></i>
          )}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
