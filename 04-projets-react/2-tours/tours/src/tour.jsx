import { useState } from "react";

const Tour = ({ id, image, info, name, price, deleteTour }) => {
  const [read, setRead] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4>{price}€</h4>
        </div>
        <p>
          {read ? info : info.substring(0, 200)}
          <button onClick={() => setRead(!read)}>
            {read ? "show less" : "read more"}
          </button>
        </p>
        <button
          className="delete-btn"
          onClick={() => {
            deleteTour(id);
          }}
        >
          pas intereser
        </button>
      </footer>
    </article>
  );
};

export default Tour;
