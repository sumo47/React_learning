import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleClose } from "../utility/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat.js";

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
      <div className="flex w-full">
        <div className="flex-1 p-2">
          <iframe
            className="rounded"
            width="1000"
            height="500"
            src={"https://www.youtube.com/embed/" + id}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-1/3 ml-2 border border-gray-300 rounded-md bg-white shadow-md ">
          <LiveChat />
        </div>
      </div>
      <div>
        <CommentsContainer />
      </div>
    </div>
  );
}

export default WatchPage;
