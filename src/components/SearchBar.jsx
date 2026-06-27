import React from "react";
import searchicon from "../assets/search-icon.svg"

const SearchBar = () => {
  return (
    <div className="text-black">
      <div className=" flex ">
        <input
          type="text"
          placeholder="Search"
          className="border-3 p-1 px-3 outline-0 border-secondary text-black rounded-3xl rounded-br-none rounded-tr-none w-[94%]"
        />
        <button className="bg-secondary px-4 rounded-bl-none rounded-tl-none rounded-3xl ">
          
          <img src={searchicon} alt="" className="w-4" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
