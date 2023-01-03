import { useParams, Link } from "react-router-dom";
import { products } from "../../../data";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);
  const info = products.find((prod) => prod.id === id);

  const { name, image } = info;
  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to="/products">voir les produits</Link>
    </section>
  );
};

export default SingleProduct;
