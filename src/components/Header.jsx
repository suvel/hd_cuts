import React, { useContext } from "react";
import "./Header.css";
import GlobalContext from "../context/GlobalContext";

const Nav = ({ children, navigate, disable }) => {
  return (
    <div className={`Nav disable${disable}`} onClick={navigate}>
      {children}
    </div>
  );
};

const Header = () => {
  const { vModeTypes, setVMode, vMode } = useContext(GlobalContext);

  const isWidgetMode = vMode == vModeTypes.WIDGET;
  const isCascadeMode = vMode == vModeTypes.CASCADE;

  return (
    <div className="Header">
      <Nav disable={isWidgetMode} navigate={() => setVMode(vModeTypes.WIDGET)}>
        Home Page
      </Nav>
      <Nav
        disable={isCascadeMode}
        navigate={() => setVMode(vModeTypes.CASCADE)}
      >
        {" "}
        High rated videos
      </Nav>
    </div>
  );
};

export default Header;
