import React, { useContext, useState, useEffect } from "react";
import "./Videos.css";
import GlobalContext from "../context/GlobalContext";
import { getPopularVideo } from "../API/youtube";

function Video({ style, triggerCascade }) {
  return <div className={`Video`} style={style} onClick={triggerCascade} />;
}
//styles={marginLeft: "10px", marginTop: "10px" }

function Videos() {
  const { vMode, vModeTypes, setVMode } = useContext(GlobalContext);

  const [popVidImg, setPopVidImg] = useState("");
  const [top10Vid, setTop10Vid] = useState([]);
  const [selectedVidId, setSelectedVideoId] = useState("");

  async function updatePopularVideoImg() {
    const response = await getPopularVideo(1);
    const jsonResponse = await response.json();
    const mostPopularVideoThumb =
      jsonResponse.items[0].snippet.thumbnails.high.url;
    setPopVidImg(mostPopularVideoThumb);
  }

  async function updateTopTenVideo() {
    const response = await getPopularVideo(10);
    const jsonResponse = await response.json();
    const videDetails = jsonResponse.items;
    const topTenVideos = videDetails.map(function (vid) {
      return {
        id: vid.id.videoId,
        thumb: vid.snippet.thumbnails.high.url,
      };
    });
    setTop10Vid(topTenVideos);
  }

  useEffect(() => {
    updatePopularVideoImg();
  }, []);

  useEffect(() => {
    if (vMode == vModeTypes.CASCADE) {
      updateTopTenVideo();
    }
  }, [vMode]);

  return (
    <div className={`Videos`}>
      <div className={`widget_container ${vMode}`}>
        <Video style={{ marginLeft: "40px", marginTop: "40px" }} />
        <Video style={{ marginLeft: "20px", marginTop: "20px" }} />
        <Video
          style={{ backgroundImage: `url(${popVidImg})` }}
          triggerCascade={() => {
            setVMode(vModeTypes.CASCADE);
          }}
        />
      </div>
      <div className={`cascade_container ${vMode}`}>
        {top10Vid.map((vid) => {
          return (
            <Video
              style={{ backgroundImage: `url(${vid.thumb})` }}
              triggerCascade={() => {
                setVMode(vModeTypes.THEATER);
                setSelectedVideoId(vid.id);
              }}
            />
          );
        })}
      </div>
      <div className={`theater_container ${vMode}`}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${selectedVidId}`}
        ></iframe>
      </div>
    </div>
  );
}

export default Videos;
