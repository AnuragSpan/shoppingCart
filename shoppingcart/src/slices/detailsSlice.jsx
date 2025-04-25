import { createSlice } from "@reduxjs/toolkit";

const detailsSlice = createSlice({
  name: "details",
  initialState: {},
  reducers: {
    productDetails(state, action) {
      state.initialState = action.payload;
    },
  },
});

export const { productDetails } = detailsSlice.actions;
export default detailsSlice.reducer;
