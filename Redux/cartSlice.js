// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, quantity, product } = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id == id);

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      // Implement removeItem logic if needed
    },
    clearCart: (state) => {
      state.items = [];
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id == id);

      if (itemIndex !== -1) {
        state.items[itemIndex].quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, clearCart, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
