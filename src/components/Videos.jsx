import React, { useContext } from "react";
import "./Videos.css";
import GlobalContext from "../context/GlobalContext";

function Video({ style, triggerCascade }) {
  return <div className={`Video`} style={style} onClick={triggerCascade} />;
}
//styles={marginLeft: "10px", marginTop: "10px" }

function Videos() {
  const { vMode, vModeTypes, setVMode } = useContext(GlobalContext);
  return (
    <div className={`Videos`}>
      <div className={`widget_container ${vMode}`}>
        <Video style={{ marginLeft: "40px", marginTop: "40px" }} />
        <Video style={{ marginLeft: "20px", marginTop: "20px" }} />
        <Video
          triggerCascade={() => {
            setVMode(vModeTypes.CASCADE);
          }}
        />
      </div>
      <div className={`cascade_container ${vMode}`}>
        <Video
          triggerCascade={() => {
            setVMode(vModeTypes.THEATER);
          }}
        />
        <Video
          triggerCascade={() => {
            setVMode(vModeTypes.THEATER);
          }}
        />{" "}
        <Video
          triggerCascade={() => {
            setVMode(vModeTypes.THEATER);
          }}
        />{" "}
        <Video
          triggerCascade={() => {
            setVMode(vModeTypes.THEATER);
          }}
        />
      </div>
      <div className={`theater_container ${vMode}`}>
        <iframe
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </div>
    </div>
  );
}

export default Videos;
