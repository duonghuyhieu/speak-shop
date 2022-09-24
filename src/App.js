import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { DefaultLayout } from "./Layout";
import Home from "./pages/Home";
import Clothes from "./pages/Clothes";
import Electronic from "./pages/Electronic";
import Furniture from "./pages/Furniture";
import Shoes from "./pages/Shoes";
import Others from "./pages/Others";
import DetailProductPage from "./pages/DetailProduct";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DefaultLayout children={<Home />} />} />
        <Route
          exact
          path="/clothes"
          element={<DefaultLayout children={<Clothes />} />}
        />
        <Route
          exact
          path="/electronics"
          element={<DefaultLayout children={<Electronic />} />}
        />
        <Route
          exact
          path="/furniture"
          element={<DefaultLayout children={<Furniture />} />}
        />
        <Route
          exact
          path="/shoes"
          element={<DefaultLayout children={<Shoes />} />}
        />
        <Route
          exact
          path="/others"
          element={<DefaultLayout children={<Others />} />}
        />
        <Route
          exact
          path="/product/:idProduct"
          element={<DefaultLayout children={<DetailProductPage />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
