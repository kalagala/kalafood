import React from "react";
import "../assets/styles/PrimaryLinkButton.css";
const PrimaryLinkButton = props => {
  return (
    <a className="primary-link-button" href={props.link}>
      {props.text}
    </a>
  );
};

export default PrimaryLinkButton;
