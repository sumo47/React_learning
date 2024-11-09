import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleClose } from "../utility/appSlice";
import { useSearchParams } from "react-router-dom";

function WatchPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleClose());
    return () => {
      // cleanup
    }; // eslint-disable-next-line
  }, []);

  const [SearchParams] = useSearchParams();

  const id = SearchParams.get("v");

  return (
    <div className="m-2 mx-4">
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default WatchPage;
