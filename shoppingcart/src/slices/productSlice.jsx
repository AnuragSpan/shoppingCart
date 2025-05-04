import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchedProducts = createAsyncThunk("fetchedProducts", async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://fakestoreapi.com/products");
  return await response.json();
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchedProducts.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchedProducts.fulfilled, (state, action) => {
      state.status = "fullfilled";
      state.data = action.payload;
    });
    builder.addCase(fetchedProducts.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export default productSlice.reducer;
