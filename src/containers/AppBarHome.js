import React from "react";
import Logo from "../components/Logo";
import ProfilePicture from "../components/ProfilePicture";
import "../assets/styles/AppBarHome.scss";
const AppBarHome = () => {
  return (
    <div className="app-bar-home">
      <Logo />
      <ProfilePicture />
    </div>
  );
};

export default AppBarHome;
