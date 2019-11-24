import React from "react";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
const SearchButton = () => {
  return (
    <div className="bottom-navigation-button">
      <SearchIcon className="icon" />
      <br />
      <span>Tafuta Chakula</span>
    </div>
  );
};

export default SearchButton;
