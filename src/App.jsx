import { useState } from "react";
import "./App.css";
import Body from "./components/body";
import useyoutubeData from "./hooks/useYoutubeData";

function App() {
  useyoutubeData()
    
  return (
    <div className="text-white w-full h-screen ">
      <Body />
    </div>
  );
}

export default App;
