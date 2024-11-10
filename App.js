// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import CartPage from "./pages/CartPage";
import Footer from "./components/Footer";
import SignUpPage from "./pages/SignUpPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";

function App() {
  const [products] = useState([
    { id: 1, name: "Product 1", price: 100, image: "/images/image1.jpg" },
    { id: 2, name: "Product 2", price: 150, image: "/images/image2.jpg" },
    { id: 3, name: "Product 3", price: 200, image: "/images/image3.jpg" },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/collection" element={<CollectionPage />} /> {/* Correct path */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
