import React from "react";
import "./Footer.css";
import Logo from "../../asset/images/logo.svg";

function Footer() {
  return (
    <div className="Footer">
      <img className="logo" src={Logo} />
    </div>
  );
}

export default Footer;
