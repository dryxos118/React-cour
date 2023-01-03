import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Accueil</Link>
      <Link to="/about">About</Link>
      <Link to="/products">products</Link>
    </nav>
  );
};

export default Navbar;
