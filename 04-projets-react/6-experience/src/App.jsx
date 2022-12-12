import { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);

  //fetch l'API
  const [job, setJob] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchJobs = (index) => {
    console.log(index);
    setIndex(index);
  };

  const getJob = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setLoading(false);
      setJob(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJob();
  }, []);

  //le chargement
  if (loading) {
    return (
      <>
        <section className="section loading">
          <h1>loading...</h1>
        </section>
      </>
    );
  }
  //afficher l'API
  const { company, dates, title, duties } = job[index];
  return (
    <>
      <section className="section">
        <div className="title">
          <h2>experience</h2>
          <div className="underline"></div>
        </div>
        <div className="job-center">
          <div className="btn-container">
            {/* la c'est le map pour les btn */}
            {job.map((btn, index) => {
              return (
                <button
                  className={`job-btn ${index === index && "active-btn"}`}
                  key={index}
                  onClick={() => {
                    fetchJobs(index);
                  }}
                >
                  {btn.company}
                </button>
              );
            })}
          </div>
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
          </article>
          {duties.map(() => {
            return (
              <>
                <div className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duties}</p>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default App;
