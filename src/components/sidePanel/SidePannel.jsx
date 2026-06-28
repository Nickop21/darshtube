import React from "react";
import homeicon from "../../assets/home-icon.svg";

const SidePannel = () => {
  const list = [
    {
      category: "",
      list: [
        {
          icon: "",
          name: "Home",
        },
        {
          icon: "",
          name: "Home",
        },
        {
          icon: "",
          name: "Home",
        },
        {
          icon: "",
          name: "Home",
        },
      ],
    },
    {
      category: "",
      list: [
        {
          icon: homeicon,
          name: "Home",
        },
        {
          icon: homeicon,
          name: "Home",
        },
        {
          icon: "",
          name: "Home",
        },
        {
          icon: "",
          name: "Home",
        },
      ],
    },
    {
      category: "subscriptions",
      list: [
        {
          icon: "",
          name: "Home",
        },
        {
          icon: "",
          name: "Home",
        },
        {
          icon: "",
          name: "Home",
        },
        {
          icon: "",
          name: "Home",
        },
      ],
    },
    {
      category: "watchLater",
      list: [
        {
          icon: "",
          name: "Home",
        },
        {
          icon: "",
          name: "Home",
        },
        {
          icon: "",
          name: "Home",
        },
        {
          icon: "",
          name: "Home",
        },
      ],
    },
  ];
  return (
    <div className="bg-secondary w-58 h-full fixed left-0 mt-16">
      {list.map((data) => (
        <div className="p-4 border-b-2 border-gray ">
          {data.category && (
            <h1 className="font-extrabold text-black">{data.category}</h1>
          )}
          <ul className=" text-black">
            {data?.list.map((listitem) => (
              <li className=" flex items-center p-2 hover:bg-gray rounded-xl gap-6 pl-4 font-bold">
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
