import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./index.css";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import About from "./pages/About";
import Home from "./pages/Home";
import SingleCocktail from "./pages/SingleCocktail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route to="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/SingleCocktail/:id" element={<SingleCocktail />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
