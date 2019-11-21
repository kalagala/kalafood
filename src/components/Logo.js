import React from "react";
import "../assets/styles/logo.css";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/">
      <h2 className="logo">KalaFood</h2>
    </Link>
  );
};

export default Logo;
