import React from "react";
import "./style.css";
import Video from "../../../Video";

const VideoCollectionWidget = ({ thumb, curMode, showVideoCollection }) => {
  console.log(curMode);
  return (
    <div className={`VideoCollectionWidget ${curMode}`}>
      <Video style={{ marginLeft: "40px", marginTop: "40px" }} />
      <Video style={{ marginLeft: "20px", marginTop: "20px" }} />
      <Video
        style={{ backgroundImage: `url(${thumb})` }}
        triggerCascade={showVideoCollection}
      />
    </div>
  );
};

export default VideoCollectionWidget;
