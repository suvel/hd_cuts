import React, { useContext, useState, useEffect } from "react";
import "./style.css";
import GlobalContext from "../../context/GlobalContext";
import { getPopularVideo, getPopularVideo_Mockup } from "../../API/youtube";
import VideoCollectionWidget from "./subcomponet/VideoCollectionWidget";
import VideoCollectionList from "./subcomponet/VideoCollectionList";
import TheaterView from "./subcomponet/TheaterView";

function Videos() {
  const { vMode, vModeTypes, setVMode, theaterVideo, setTheaterVideo } =
    useContext(GlobalContext);

  const [popVidImg, setPopVidImg] = useState("");
  const [top10Vid, setTop10Vid] = useState([]);

  async function updatePopularVideoImg() {
    const response = await getPopularVideo(1);
    const jsonResponse = await response.json();
    // const jsonResponse = getPopularVideo_Mockup();
    const mostPopularVideoThumb =
      jsonResponse.items[0].snippet.thumbnails.high.url;
    setPopVidImg(mostPopularVideoThumb);
  }

  async function updateTopTenVideo() {
    const response = await getPopularVideo(10);
    const jsonResponse = await response.json();
    // const jsonResponse = getPopularVideo_Mockup();
    const videDetails = jsonResponse.items;
    const topTenVideos = videDetails.map(function (vid) {
      return {
        id: vid.id.videoId,
        thumb: vid.snippet.thumbnails.high.url,
        title: vid.snippet.title,
        desc: vid.snippet.description,
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

  function handelShowVideoCollection() {
    setVMode(vModeTypes.CASCADE);
  }

  function handelPlayInTheaterMode(videoObject) {
    setVMode(vModeTypes.THEATER);
    setTheaterVideo(videoObject);
  }

  return (
    <div className={`Videos`}>
      <VideoCollectionWidget
        thumb={popVidImg}
        curMode={vMode}
        showVideoCollection={handelShowVideoCollection}
      />
      <VideoCollectionList
        videoList={top10Vid}
        curMode={vMode}
        onVideoSelected={handelPlayInTheaterMode}
      />
      <TheaterView
        videoSRC={`https://www.youtube.com/embed/${theaterVideo?.id}`}
        curMode={vMode}
        play={theaterVideo?.id}
      />
    </div>
  );
}

export default Videos;
