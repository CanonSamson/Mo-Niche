import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currenties: [
    { code: "NGN" },
    { code: "USD" },
    { code: "GBP" },
    { code: "EUR" },
  ],
  currency: "USD",
  recommended: [
    {
      images: ["/images/image-8.jpg"],
      name: "Cape Sleeve Dress custom made",
      price: "90.00",
      currency: "USD",
      category: "",
      id: "1233",
      description:
        " Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    },
    {
      images: ["/IMG_5383.jpg"],
      name: " ad minima veniam, quis nostrum exercitationem",
      price: "100.00",
      currency: "USD",
      category: "",
      id: "123",
      description:
        " Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    },
  ],
  bestsellers: [
    {
      images: ["/IMG_5388.jpg"],
      name: "ad minima veniam, quis nostrum exercitationem",
      price: "90.00",
      currency: "USD",
      category: "",
      id: "13",
      description:
        " Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    },
    {
      images: ["/IMG_5385.jpg"],
      name: " ad minima veniam, quis nostrum exercitationem",
      price: "100.00",
      currency: "USD",
      category: "",
      id: "1203",
      description:
        " Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    },
    {
      images: ["/IMG_5374.jpg"],
      name: " ad minima veniam, quis nostrum exercitationem",
      price: "60.00",
      currency: "USD",
      category: "",
      uid: "1203",
      description:
        " Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    },
  ],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export const { setCurrency } = appSlice.actions;

export default appSlice.reducer;
