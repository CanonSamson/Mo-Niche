"use client"
import { setUser, setPending } from "../appSlice";

export const getUserDetails = async (dispatch) => {
  const token = localStorage.getItem("token");
  console.log("Called");
  if (!token) {
    dispatch(setPending(false));
    return;
  }
  console.log("Called");
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
    } else {
      throw new Error("Failed to fetch user data");
    }
  } catch (error) {
    console.log(error);
    dispatch(setPending(false));
  }
};
