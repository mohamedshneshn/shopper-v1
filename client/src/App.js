import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbarr from "./Components/shared/Navbarr/Navbarr";
import Footer from "./Components/shared/Footer/Footer";

import Shop from "./Pages/Shop/Shop";
import ShopCategory from "./Pages/ShopCategory/ShopCategory";
import Cart from "./Pages/Cart/Cart";
import Product from "./Pages/Product/Product";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";

import men_banner from "./Assets/banner_mens.png";
import kids_banner from "./Assets/banner_kids.png";
import women_banner from "./Assets/banner_women.png";

import "./App.css";
import ScrollToTopOnBack from "./Components/shared/ScrollToTopOnBack/ScrollToTopOnBack";

function App() {
  return (
    <Router>
      <Navbarr />
      <ScrollToTopOnBack />

      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/men"
          element={<ShopCategory category="men" image={men_banner} />}
        />
        <Route
          path="/women"
          element={<ShopCategory category="women" image={women_banner} />}
        />
        <Route
          path="/kids"
          element={<ShopCategory category="kid" image={kids_banner} />}
        />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
