"use client";

import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";

import { useEffect } from "react";
import { getUserDetails } from "./actions/getUser";
import { getRates } from "./actions/getRates";

const RootProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <Data>{children}</Data>
    </Provider>
  );
};

export default RootProvider;

const Data = ({ children }) => {
  const dispatch = useDispatch();
  const { currency, user } = useSelector((state) => state.app);
  const { items } = useSelector((state) => state.cart);

  useEffect(() => {
    const fetchData = async () => {
      getRates(dispatch, currency, items);
      if (user != null) return;
      console.log("called");
      await getUserDetails(dispatch);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      getRates(dispatch, currency, items);
    };
    fetchData();
  }, [currency]);

  return <>{children}</>;
};
