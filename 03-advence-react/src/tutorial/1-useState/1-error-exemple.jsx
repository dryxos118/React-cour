const ErrorExemple = () => {
  let title = "titre au pif";

  const handleClick = () => {
    title = "bonjour";
  };

  return (
    <>
      <h2>{title}</h2>
      <button className="btn" onClick={handleClick}>
        change le titre
      </button>
    </>
  );
};

export default ErrorExemple;
