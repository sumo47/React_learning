import React from "react";
import { BsDot } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";

function Video({ snippet, statistics }) {
  const { title, channelTitle, thumbnails } = snippet;
  const { viewCount, likeCount } = statistics;

  return (
    <div className="w-full sm:w-80 md:w-72 lg:w-80 rounded-lg shadow-md bg-white hover:bg-gray-50 transition duration-300 ease-in-out p-3">
      <div className="relative">
        {/* Thumbnail with Play Button Overlay on Hover */}
        <img
          className="w-full h-40 object-cover rounded-lg"
          src={thumbnails.medium.url}
          alt="thumbnail"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 rounded-lg transition-opacity duration-300">
          <AiFillPlayCircle size={40} color="white" />
        </div>
      </div>

      <div className="mt-3 flex items-start">
        {/* Placeholder for Channel Icon */}
        <div className="h-10 w-10 bg-gray-300 rounded-full flex-shrink-0 mr-3"></div>
        <div>
          {/* Title with Truncation */}
          <h3 className="text-md font-semibold text-gray-900 line-clamp-2">
            {title}
          </h3>
          {/* Channel Name and Views */}
          <p className="text-sm text-gray-500">
            <h1>{channelTitle}</h1>
            <div className="flex">
              {parseInt(viewCount).toLocaleString()} views
              <BsDot />
              <p className="text-sm text-gray-500">
                {parseInt(likeCount).toLocaleString()} likes
              </p>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export const AddVideo = ({info}) => {
  return (
    <div className="p-1 m-1 border border-red-600">
      <Video {...info}/>
    </div>
  );
};

export default Video;
