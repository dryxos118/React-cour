const Book = ({ img, author, title }) => {
  const handleClick = (e) => {
    console.log(e);
    alert("hey t'a cliqué");
  };

  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <>
      <article className="book">
        <img src={img} alt="" />
        <h2>{title}</h2>
        <h4>{author}</h4>
        <button type="button" onClick={handleClick}>
          example
        </button>
        <button type="button" onClick={() => complexExample(author)}>
          example plus complexe
        </button>
      </article>
    </>
  );
};

export default Book;
