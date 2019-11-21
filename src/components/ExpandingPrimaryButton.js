import React from "react";

import "../assets/styles/ExpandingPrimaryButton.css";
const ExpandingPrimaryButton = props => {
  return <span className={`expandingButton ${props.side}`}>{props.text}</span>;
};

export default ExpandingPrimaryButton;
