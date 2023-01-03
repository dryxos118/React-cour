import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
//pages
import About from "./About";
import Home from "./Home";
import Error from "./Error";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import Layout from "./Layout";
import Login from "./Login";
import Dashboard from "./Dashboard";
//components
import Navbar from "../components/StyledNav";

const RouterSetup = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route to="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default RouterSetup;
