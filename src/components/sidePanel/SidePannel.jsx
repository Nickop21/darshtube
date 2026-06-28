import React from "react";
import homeicon from "../../assets/home-icon.svg";
import { useSelector } from "react-redux";

const SidePannel = () => {
    const isSidePannelOpen=useSelector((store)=>store.configue.sidepannelState)
  const list = [
    {
      category: "Homee",
      list: [
        {
          icon: "",
          name: "Home",
        },
        {
          icon: "",
          name: "shorts",
        },
      
      ],
    },
    {
      category: "fav",
      list: [
        {
          icon: homeicon,
          name: "dhuruv",
        },
        {
          icon: homeicon,
          name: "zakir",
        },
        {
          icon: "",
          name: "akshya",
        },
       
      ],
    },
    {
      category: "subscriptions",
      list: [
        {
          icon: "",
          name: "history",
        },
        {
          icon: "",
          name: "playlist",
        },
        {
          icon: "",
          name: "watch later",
        },
        {
          icon: "",
          name: "liked videos",
        },
      ],
    },
   
  ];
  return (
    <div className={`bg-secondary w-58 h-full fixed  mt-16 ${isSidePannelOpen ? "left-0" : "-left-60"} transition-all duration-300 ease-in-out`}>
      {list.map((data, index) => (
        <div className="p-4 border-b-2 border-gray " key={data?.category}>
          {data.category && (
            <h1 className="font-extrabold text-black">{data.category}</h1>
          )}
          <ul className=" text-black" >
            {data?.list.map((listitem) => (
              <li className=" flex items-center p-2 hover:bg-gray rounded-xl gap-6 pl-4 font-bold" key={listitem.name}>
                {listitem.icon ? (
                  <img
                    src={listitem.icon}
                    alt={listitem.name}
                    className="w-6"
                  />
                ) : (
                  <div className="w-6"></div>
                )}
                
                {listitem.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SidePannel;
