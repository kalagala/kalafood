import React from "react";
import { ReactComponent as TayariKuliwaIcon } from "../assets/icons/tayariKuliwa.svg";
const TayariKuliwa = () => {
  return (
    <div className="bottom-navigation-button">
      <TayariKuliwaIcon className="icon" />
      <br />
      <span>Tayari Kuliwa</span>
    </div>
  );
};

export default TayariKuliwa;
