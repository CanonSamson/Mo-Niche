// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  subtotal: { base: 0, total: 0 },
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
      const { id } = action.payload;
      const newCart = state.items.filter((item) => item.id != id);
      state.items = [...newCart];
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
    updateCart: (state, action) => {
      state.items = action.payload;
    },
    updateSubtotal: (state, action) => {
      state.subtotal = action.payload;
    },
  },
});

export const {
  addItem,
  updateCart,
  removeItem,
  clearCart,
  updateQuantity,
  updateSubtotal,
} = cartSlice.actions;

export default cartSlice.reducer;
