import React from "react";
import "../assets/styles/BottomNavigation.css";
import TayariKuliwa from "../components/TayariKuliwa";
import SearchButton from "../components/SearchButton";
import Sahani from "../components/Sahani";
const BottomNavigation = () => {
  return (
    <div className="bottom-nav">
      <TayariKuliwa />
      <SearchButton />
      <Sahani />
    </div>
  );
};

export default BottomNavigation;
