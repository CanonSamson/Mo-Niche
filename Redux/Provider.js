"use client";

import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";

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
  const { pending, user } = useSelector((state) => state.app);
  const getUser = async () => {
    const { setPending, setUser } = await import("./appSlice");
    dispatch(setPending(true));

    const token = localStorage.getItem("token");
    if (!token || user) return;
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
  }, []);

  return <div>{children}</div>;
};
