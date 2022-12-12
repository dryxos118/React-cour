const Categories = ({ category, filterBtn }) => {
  console.log(category);
  return (
    <>
      <div className="btn-container">
        {category.map((btn, index) => {
          return (
            <>
              <button
                className="filter-btn"
                key={index}
                onClick={() => filterBtn(btn)}
              >
                {btn}
              </button>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
