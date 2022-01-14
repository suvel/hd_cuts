import React from "react";
import "./style.css";

const Video = ({ style, triggerCascade }) => {
  return <div className={`Video`} style={style} onClick={triggerCascade} />;
};

export default Video;
