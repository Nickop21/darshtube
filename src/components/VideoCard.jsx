import React from "react";
import youtubelogo from "../assets/youtube-logo.svg";

const VideoCard = ({data}) => {
  return (
    <div className="  ml-4 mb-12 shadow-2xl shadow-gray-300 " >
      <img
src={data?.snippet?.thumbnails?.medium?.url}
alt={data?.snippet?.title}
        className="h-38 md:h-54 2xl:h-88 w-full rounded-xl "
      />
      <div className="text-secondary flex pt-2">
        {/* <img src={youtubelogo} alt="" width={10} height={10} /> */}
        <div className="p-4 bg-amber-500 rounded-2xl w-4 h-4"></div>

        <div className="flex flex-col px-2">
          <p className="line-clamp-2 mb-1 text-sm text-heading">
           {data?.snippet?.title}
          </p>
          <span className="text-gray text-xs">Set India</span>
          <span className="text-gray text-xs">
            249k views<span>1 days</span>
          </span>
        </div>
      </div>
    </div>
  );

};

export default VideoCard;
