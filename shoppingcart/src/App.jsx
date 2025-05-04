import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import React from "react";
import NotFound from "./components/NotFound";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import PrivateComp from "./components/PrivateComp";
import PublicComp from "./components/PublicComp";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<PrivateComp />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route element={<PublicComp />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
