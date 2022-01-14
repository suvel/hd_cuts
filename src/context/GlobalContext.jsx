import React, { createContext, useState } from "react";

const GlobalContext = createContext();

const videoModes = {
  WIDGET: "widget",
  CASCADE: "cascade",
  THEATER: "theater",
  default: "theater",
};

export const GlobalProvider = ({ children }) => {
  const [vMode, setVMode] = useState(videoModes.default);

  return (
    <GlobalContext.Provider value={{ vMode, setVMode, vModeTypes: videoModes }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
