import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <NavLink>
          <img src={logo} alt="" className="logo" />
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#476a2e" : "#222",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "#476a2e" : "#222",
              })}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
