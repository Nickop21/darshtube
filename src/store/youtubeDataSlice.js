import { createSlice } from "@reduxjs/toolkit";

const youtubeDataSlice= createSlice({
    name:"youtubeData",
    initialState:{
        youtubeData:null

    },
    reducers:{
        addYoutubeData:(state,action)=>{
                state.youtubeData=action.payload
        }
    }
  
})
export const {addYoutubeData}=youtubeDataSlice.actions
export default youtubeDataSlice.reducer