import { NavLink } from "react-router-dom";

const StyledNav = () => {
  return (
    //   style={({ isActive }) => ({ color: isActive ? "red" : "grey" })}
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        products
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        se connecter
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        dashboard
      </NavLink>
    </nav>
  );
};

export default StyledNav;
