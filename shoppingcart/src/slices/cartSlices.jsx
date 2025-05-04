import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
        toast.info("Product Quantity Increased", {
          position: "top-right",
        });
        return;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        toast.success(`${action.payload.title} Added To Cart`, {
          position: "top-right",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    remove(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      toast.error(`${action.payload.title}removed from cart`, {
        position: "top-right",
      });
      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          state.cartItems.filter((item) => action.payload.id != item.id)
        )
      );
    },
    removeAll(state, action) {
      state.cartItems = [];
      toast.error("Cart Cleared", { position: "top-right" });
      localStorage.setItem("cartItems", JSON.stringify([]));
    },

    decreaseQuantity(state, action) {
      const index = state.cartItems.findIndex(
        (items) => items.id === action.payload
      );

      if (state.cartItems[index].quantity > 1) {
        state.cartItems[index].quantity -= 1;
        toast.info("Item Quantity Decreased", { position: "top-right" });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    increaseQuantity(state, action) {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (state.cartItems[index].quantity >= 1) {
        state.cartItems[index].quantity += 1;
        toast.success("Item Quantity Increased", { position: "top-right" });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    handleCheckout(state, action) {
      const data = localStorage.getItem("checkoutItems");
      const response = JSON.parse(data)?.length ? JSON.parse(data) : [];
      console.log("response", response);
      localStorage.setItem(
        "checkoutItems",
        JSON.stringify([...action.payload, ...response])
      );
      console.log("response", response);
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify([]));
    },
  },
});

export const {
  addToCart,
  remove,
  removeAll,
  decreaseQuantity,
  increaseQuantity,
  handleCheckout,
} = cartSlice.actions;
export default cartSlice.reducer;
