import React, { useContext } from "react";
import "./Videos.css";
import GlobalContext from "../context/GlobalContext";

function Video({ style, triggerCascade }) {
  const { vMode } = useContext(GlobalContext);
  return (
    <div className={`Video ${vMode}`} style={style} onClick={triggerCascade} />
  );
}
//styles={marginLeft: "10px", marginTop: "10px" }

function Videos() {
  const { vModeTypes, setVMode } = useContext(GlobalContext);
  return (
    <div className="Videos">
      <Video style={{ marginLeft: "40px", marginTop: "40px" }} />
      <Video style={{ marginLeft: "20px", marginTop: "20px" }} />
      <Video
        triggerCascade={() => {
          setVMode(vModeTypes.CASCADE);
        }}
      />
    </div>
  );
}

export default Videos;
