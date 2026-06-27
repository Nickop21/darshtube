import React from "react";
import youtubelogo from "../assets/youtube-logo.svg";

const VideoCard = () => {
  return (
    <div className=" w-[44%] xl:w-[30%] ml-4 mb-12 ">
      <img
        src="https://i.ytimg.com/vi/MZWzMlVENPE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDWkEeeGUdBsNd-Vt2fOSqNGqwEww"
        alt=""
        className="h-38 md:h-54 2xl:h-88 w-full rounded-2xl "
      />
      <div className="text-secondary flex pt-2">
        {/* <img src={youtubelogo} alt="" width={10} height={10} /> */}
        <div className="p-4 bg-amber-500 rounded-2xl w-4 h-4"></div>

        <div className="flex flex-col px-2">
          <p className="line-clamp-2 mb-1 text-sm text-heading">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
            sequi error hic consequatur quas ullam nemo eaque architecto quod et
            id tenetur corporis a ratione suscipit nihil dolor veniam nesciunt.
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
