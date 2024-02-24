import { createSlice } from "@reduxjs/toolkit";
import { products } from "./data";

const initialState = {
  user: null,
  pending: true,
  shippingAddresses: null,
  currenties: [{ code: "NGN" }, { code: "USD" }, { code: "EUR" }],
  rates: null,
  currency: "USD",
  recommended: [],
  bestsellers: [],
  products: products,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAddress: (state, action) => {
      state.shippingAddresses = action.payload;
    },
    setPending: (state, action) => {
      state.pending = action.payload;
    },
    setRates: (state, action) => {
      state.rates = action.payload;
    },
    updateProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const {
  updateProducts,
  setRates,
  setCurrency,
  setUser,
  setAddress,
  setPending,
} = appSlice.actions;

export default appSlice.reducer;
