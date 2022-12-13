import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import data from "./data";

// activeSlide / lastSlide / nextSlide

function App() {
  const [people, setPeople] = useState(data);
  const [indexItem, setIndexItem] = useState(0);
  // console.log(indexItem);
  // console.log(people);

  const buttonNext = () => {
    //nextBtn
    if (indexItem < people.length - 1) {
      setIndexItem(indexItem + 1);
    } else {
      setIndexItem(0);
    }
  };

  const buttonPrev = () => {
    if (indexItem > 0) {
      setIndexItem(indexItem - 1);
    } else {
      setIndexItem(people.length - 1);
    }
  };

  useEffect(() => {
    const inter = setInterval(buttonNext, 5000);

    return () => {
      console.log("clean");
      clearInterval(inter);
    };
  }, [people.length]);

  return (
    <>
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span>reviews
          </h2>
        </div>
        <div className="section-center">
          {people.map((person, index) => {
            const { image, name, title, quote } = person;
            let pos = "nextSlide";
            if (indexItem === index) {
              pos = "activeSlide";
            }
            if (
              index === indexItem - 1 ||
              (indexItem === 0 && index === people.length - 1)
            ) {
              pos = "lastSlide";
            }
            return (
              <>
                <article key={index} className={pos}>
                  <img src={image} alt={name} className="person-img" />
                  <h4>{name}</h4>
                  <p className="title">{title}</p>
                  <p className="text">{quote}</p>
                </article>
              </>
            );
          })}
          <button className="prev" onClick={buttonPrev}>
            <FaChevronLeft />
          </button>
          <button className="next" onClick={buttonNext}>
            <FaChevronRight />
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
