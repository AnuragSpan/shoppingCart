import { createSlice } from "@reduxjs/toolkit";

const detailsSlice = createSlice({
  name: "details",
  initialState: {
    itemDetails: {},
  },
  reducers: {
    productDetails(state, action) {
      state.itemDetails = action.payload;
    },
  },
});

export const { productDetails } = detailsSlice.actions;
export default detailsSlice.reducer;
