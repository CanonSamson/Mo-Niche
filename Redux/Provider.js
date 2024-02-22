"use client";
import { Provider } from "react-redux";
import { store } from "./store";

const RootProvider = ({ children }) => {
  const getUser = async (email) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`/api/user/${email}`, {
        method: "GET",
        Authorization: `Bearer ${token}`,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {}
  };
  return <Provider store={store}>{children}</Provider>;
};

export default RootProvider;
