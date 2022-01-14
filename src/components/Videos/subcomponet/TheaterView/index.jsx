import React from "react";
import "./style.css";

const TheaterView = ({ videoSRC, curMode, play }) => {
  return (
    <div className={`TheaterView ${curMode}`}>
      {play && <iframe width="100%" height="100%" src={videoSRC}></iframe>}
    </div>
  );
};

export default TheaterView;
