import React from "react";
import "../assets/styles/ActionButtons.css";
import PrimaryLinkButton from "../components/PrimaryLinkButton";
import SecondaryLinkButton from "../components/SecondaryLinkButton";
import { Link } from "react-router-dom";
const ActionButtons = () => {
  return (
    <div className="action-button-container">
      <Link to="/login">
        <PrimaryLinkButton text="Jiunge" />
      </Link>
      <a href="#faq">
        <SecondaryLinkButton text="Jifunze Zaidi" />
      </a>
    </div>
  );
};

export default ActionButtons;
