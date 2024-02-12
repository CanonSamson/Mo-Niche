import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    cart: cartReducer,
  },
});
