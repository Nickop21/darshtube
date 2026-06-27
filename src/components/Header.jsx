import React from "react";
import youtubelogo from "../assets/youtube-logo.svg";
import menulogo from "../assets/menu-symbol.svg";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="bg-white w-full p-4 fixed  z-50 flex justify-between items-center">
      <div className="flex gap-6 items-center ">
        <img src={menulogo} alt="" className="w-5" />
        <img src={youtubelogo} alt="" />
      </div>

      <div className="w-[50%]">
        <SearchBar />
      </div>
      <div>
        <button className="p-2 px-3 font-extrabold rounded-[50%] bg-violet-600">
          N
        </button>
      </div>
    </div>
  );
};

export default Header;
