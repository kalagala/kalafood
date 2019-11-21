import React from "react";
import "../assets/styles/AppBar.css";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import ExpandingPrimaryButton from "../components/ExpandingPrimaryButton";
const AppBarTransparent = () => {
  return (
    <div className="app-bar">
      <Logo />
      <Link to="login">
        <ExpandingPrimaryButton text="Ingia" side="right" />
      </Link>
    </div>
  );
};

export default AppBarTransparent;
