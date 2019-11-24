import React from "react";
import { ReactComponent as SahaniIcon } from "../assets/icons/sahani.svg";
const Sahani = () => {
  return (
    <div className="bottom-navigation-button">
      <SahaniIcon className="icon" />
      <br />
      <span>Kwenye Sahani</span>
    </div>
  );
};

export default Sahani;
