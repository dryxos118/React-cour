import { useEffect, useState } from "react";
import Loading from "./loading";
import Tours from "./tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const deleteTour = (id) => {
    const setTour = tours.filter((settour) => settour.id !== id);
    setTours(setTour);
  };

  const [tours, setTours] = useState([]);

  const getTours = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setIsLoading(false);
      setTours(data);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getTours();
  }, []);

  if (isLoading) {
    return (
      <>
        <main>
          <Loading />
        </main>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <main>
          <div className="loading">
            <h1>il y a une Error...</h1>
          </div>
        </main>
      </>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>il y a plus de tours</h2>
          <button className="btn" onClick={getTours}>
            revoir les tours
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour} />
    </main>
  );
};

export default App;
