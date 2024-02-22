"use client";

import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { setPending, setUser } from "./appSlice";
import { useEffect } from "react";

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

  const getUser = async () => {
    dispatch(setPending(true));

    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const response = await fetch(`/api/user`, {
        headers: {
          Authorization: `${token}`, // Include JWT token in the request header
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        dispatch(setUser(responseData));
        dispatch(setPending(false));
      }
    } catch (error) {
      console.log(error);
      dispatch(setPending(false));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getUser();
    };
    fetchData();
  }, [dispatch]);

  return <div>{children}</div>;
};
