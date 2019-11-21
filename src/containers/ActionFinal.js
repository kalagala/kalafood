import React from "react";
import PrimaryLinkButton from "../components/PrimaryLinkButton";
import "../assets/styles/ActionFinal.css";
import { Link } from "react-router-dom";
const ActionFinal = props => {
  return (
    <div className="final">
      <Link to="/login">
        <PrimaryLinkButton text="Jiunge Sasa" />
      </Link>
    </div>
  );
};

export default ActionFinal;
