import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Store, AppContext } from "./user/store";
import { DefaultLayout } from "./user/layout";
import { AdminLayout } from "./admin/layout";
import User from "./admin/pages/User";
import Product from "./admin/pages/Product";
import Home from "./user/pages/Home";
import Clothes from "./user/pages/Clothes";
import Electronic from "./user/pages/Electronic";
import Furniture from "./user/pages/Furniture";
import Shoes from "./user/pages/Shoes";
import Others from "./user/pages/Others";
import DetailProductPage from "./user/pages/DetailProduct";
import "./App.css";
function App() {
  const { state, dispatch } = Store();
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<DefaultLayout children={<Home />} />}
          />
          <Route
            exact
            path="/admin/user"
            element={<AdminLayout children={<User />} />}
          />
          <Route
            exact
            path="/admin/product"
            element={<AdminLayout children={<Product />} />}
          />
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
    </AppContext.Provider>
  );
}

export default App;
