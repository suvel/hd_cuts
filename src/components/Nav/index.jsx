import React, { useContext } from "react";
import "./style.css";

const Nav = ({ children, navigate, disable }) => {
  return (
    <div className={`Nav disable${disable}`} onClick={navigate}>
      {children}
    </div>
  );
};

export default Nav;
