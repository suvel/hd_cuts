import React, { useContext } from "react";
import "./style.css";
import GlobalContext from "../../context/GlobalContext";
import TheaterModeInfo from "./subcomponent/TheaterModeInfo";
import IntroductionInfo from "./subcomponent/IntroductionInfo";
import CascadeModeInfo from "./subcomponent/CascadeModeInfo";

const Info = () => {
  const { vMode, vModeTypes, theaterVideo } = useContext(GlobalContext);

  const isWidgetMode = vMode == vModeTypes.WIDGET;
  const isCascadeMode = vMode == vModeTypes.CASCADE;
  const isTheaterMode = vMode == vModeTypes.THEATER;

  return (
    <div className="Info">
      {isWidgetMode && <IntroductionInfo />}
      {isCascadeMode && <CascadeModeInfo />}
      {isTheaterMode && (
        <TheaterModeInfo title={theaterVideo.title} desc={theaterVideo.desc} />
      )}
    </div>
  );
};

export default Info;
