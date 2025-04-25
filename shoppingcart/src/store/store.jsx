import { configureStore } from "@reduxjs/toolkit";
import productReducer, { fetchedProducts } from "../slices/productSlice";
import cartReducer from "../slices/cartSlices";
import detailsReducer from "../slices/detailsSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    details: detailsReducer,
  },
});

store.dispatch(fetchedProducts());

export default store;
