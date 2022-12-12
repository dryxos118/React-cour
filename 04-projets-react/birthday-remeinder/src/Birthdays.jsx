const Birthdays = ({ id, name, image, age }) => {
  return (
    <>
      <article className="person" key={id}>
        <img src={image} alt="" />
        <div>
          <h4>{name}</h4>
          <p>{age}</p>
        </div>
      </article>
    </>
  );
};

export default Birthdays;
