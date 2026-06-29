import React from "react";
import SidePannel from "./sidePanel/SidePannel";
import HomePageMainContainer from "./HomePageMainContainer";
import { Outlet } from "react-router";

const Body = () => {
  return (
    <div>
      <SidePannel />
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
