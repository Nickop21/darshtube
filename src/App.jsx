import { useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Body from "./components/Body";
import { Provider, useSelector } from "react-redux";
import VideoWatch from "./components/videoPage/VideoWatch";
import Header from "./components/Header";
import HomePageMainContainer from "./components/HomePageMainContainer";
import appStore from "./store/appStore.js";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <HomePageMainContainer />,
        },
        {
          path: "/watch",
          element: <VideoWatch />,
        },
      ],
    },
  ]);

  return (
    <Provider store={appStore}>
      <Header />
      <RouterProvider router={appRouter}>
        <div className="realtive text-white w-full h-screen">
          <Body />
        </div>
      </RouterProvider>
    </Provider>
  );
}

export default App;
