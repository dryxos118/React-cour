import { useState } from "react";
import { reviews } from "./data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { img, id, name, job, text } = reviews[index];
  return (
    <>
      <article className="review" key={id}>
        <div className="img-container">
          <img src={img} alt="" className="person-img" />
          <span className="quote-icon">
            <i className="fas fa-quote-right"></i>
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button_container">
          <button
            className="prev-btn"
            onClick={() =>
              index > 0 ? setIndex(index - 1) : setIndex(reviews.length - 1)
            }
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="next-btn"
            onClick={() =>
              index < reviews.length - 1 ? setIndex(index + 1) : setIndex(0)
            }
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <button className="random-btn" onClick={randomPerson}>
          random user
        </button>
      </article>
    </>
  );
};

export default Review;
