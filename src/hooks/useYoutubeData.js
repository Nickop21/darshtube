import { useDispatch } from "react-redux";
import { YoutubeApiUrl } from "../utils/constants";
import { addYoutubeData } from "../store/youtubeDataSlice";

const useyoutubeData = async () => {
  const dispatch = useDispatch();
  try {
      const api = YoutubeApiUrl + import.meta.env.VITE_YOUTUBE_API_KEY;
  const data = await fetch(api);
  const json = await data.json();
  dispatch(addYoutubeData(json.items));
  } catch (error) {
    console.log(error);
    
  }

};

export default useyoutubeData;
