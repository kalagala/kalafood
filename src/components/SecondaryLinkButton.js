import React from "react";
import "../assets/styles/SecondaryLinkButton.css";
const SecondaryLinkButton = props => {
  return <span className="secondary-link-button">{props.text}</span>;
};

export default SecondaryLinkButton;
