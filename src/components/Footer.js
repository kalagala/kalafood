import React from "react";
import whatsappIcon from "../assets/icons/whatsapp.svg";
import gmailIcon from "../assets/icons/gmail.svg";
import "../assets/styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <span>Mawasiliano</span>
      <br />
      <a href="mailto:kalagalakapunda@gmail.com" target="blank">
        <img src={gmailIcon} />
      </a>
      <a href="https://wa.me/255753304771" target="blank">
        <img src={whatsappIcon} />
      </a>
    </div>
  );
};

export default Footer;
