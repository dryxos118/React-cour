import { useState, useEffect } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import data from "./data";

function App() {
  const [menu, setMenu] = useState(data);
  const allCategory = ["all", ...new Set(data.map((item) => item.category))];
  const [cat, setCat] = useState(allCategory);

  const filterBtn = (cat) => {
    if (cat === "all") {
      setMenu(data);
      return;
    }
    const newData = data.filter((item) => {
      return item.category === cat;
    });
    console.log(newData);
    setMenu(newData);
  };

  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>menu</h2>
            <div className="underline"></div>
          </div>
          <Categories category={cat} filterBtn={filterBtn} />
          <Menu menu={menu} />
        </section>
      </main>
    </>
  );
}

export default App;
