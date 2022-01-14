import React from "react";
import "./style.css";
import Video from "../../../Video";

const VideoCollectionList = ({ videoList, curMode, onVideoSelected }) => {
  return (
    <div className={`VideoCollectionList ${curMode}`}>
      {videoList.map((vid) => {
        return (
          <Video
            style={{ backgroundImage: `url(${vid.thumb})` }}
            triggerCascade={() => {
              onVideoSelected(vid);
            }}
          />
        );
      })}
    </div>
  );
};

export default VideoCollectionList;
