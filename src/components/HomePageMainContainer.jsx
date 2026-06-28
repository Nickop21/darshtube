import React, { useEffect } from "react";
import HeadCategoryCrousal from "./HeadCategoryCrousal";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { YoutubeApiUrl } from "../utils/constants";
import useyoutubeData from "../hooks/useYoutubeData";

const HomePageMainContainer = () => {
  const isSidePannelOpen = useSelector(
    (store) => store.configue.sidepannelState,
  );
  const youtubeStoreApiData = useSelector(
    (store) => store.youtubeData.youtubeData,
  );
  return (
    <div
      className={` pt-20 ${isSidePannelOpen ? "pl-64" : "pl-2"} transition-all duration-300 ease-in-out`}
    >
      <HeadCategoryCrousal />

       {
      youtubeStoreApiData ?
    
      <div className="flex flex-wrap justify-items-normal w-full pt-3">
        {youtubeStoreApiData?.map((data, index) => (
          <div className="w-[44%] xl:w-[30%] flex flex-wrap justify-items-normal " key={data.id}>

            <VideoCard data={data} />
          </div>
        ))}
      </div> :<></>
    }
    </div>
  );
};

export default HomePageMainContainer;
