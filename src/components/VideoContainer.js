import React, { useState, useEffect } from "react";
import { YOUTUBE_API } from "../utility/constant";
import Video, { AddVideo } from "./Video.js";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [VideosList, setVideosList] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    // Make API call to fetch videos
    const response = await fetch(YOUTUBE_API);
    const videos = await response.json();
    setVideosList(videos.items); // Assuming first video is the one we want to display
  };

  // console.log(VideosList);
  return (
    <div className="flex flex-wrap gap-5">
      {VideosList[0] && <AddVideo info={VideosList[0]} />}
      {VideosList.map((video) => {
        return (
          <Link to={"watch?v=" + video.id}>
            <Video {...video} key={video.id} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
