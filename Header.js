// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Trend-Shop</h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/collection">Collection</Link>
        <Link to="/about">About</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
