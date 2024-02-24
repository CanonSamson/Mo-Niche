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
  const { currenties, currency, pending, user } = useSelector(
    (state) => state.app
  );
  useEffect(() => {
    const fetchData = async () => {
      getRates(dispatch, currency);
      if (user != null) return;
      console.log("called");
      await getUserDetails(dispatch);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      getRates(dispatch, currency);
    };
    fetchData();
  }, [currency]);

  return <>{children}</>;
};
