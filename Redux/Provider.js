"use client";

import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";

import { useEffect } from "react";
import { getUserDetails } from "./actions/getUser";

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
  const { pending, user } = useSelector((state) => state.app);

  useEffect(() => {
    const fetchData = async () => {
      await getUserDetails(dispatch);
    };
    fetchData();
  }, []);

  return <div>{children}</div>;
};
