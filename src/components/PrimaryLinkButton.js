import React from "react";
import "../assets/styles/PrimaryLinkButton.css";
const PrimaryLinkButton = props => {
  return <span className="primary-link-button">{props.text}</span>;
};

export default PrimaryLinkButton;
