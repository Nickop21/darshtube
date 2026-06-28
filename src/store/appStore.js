import { configureStore } from "@reduxjs/toolkit";
import configureReducer from './configueSlice'
import youtubeDataReducer from './youtubeDataSlice'


const appStore=configureStore({
    reducer:{
        configue:configureReducer,
        youtubeData:youtubeDataReducer

    }
})
export default appStore