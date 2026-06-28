import { createSlice } from "@reduxjs/toolkit";

const configueSlice = createSlice({
  name: "configue",
  initialState: {
    sidepannelState: true,
  },
  reducers: {
    sidePannelconf: (state, action) => {
      state.sidepannelState = !state.sidepannelState;
    },
  }
});

 export const {sidePannelconf}=configueSlice.actions
export default configueSlice.reducer;
