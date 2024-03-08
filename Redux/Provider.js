"use client";

import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";

import { useEffect } from "react";
import { getUserDetails } from "./actions/getUser";
import { getRates } from "./actions/getRates";
import { updateSubtotal } from "./cartSlice";

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
  const { items, subtotal } = useSelector((state) => state.cart);

  useEffect(() => {
    const fetchData = async () => {
      getRates({ dispatch, currency, items, subtotal });
      if (user != null) return;
      console.log("called");
      await getUserDetails(dispatch);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      getRates({ dispatch, currency, items, subtotal });
    };
    fetchData();
  }, [currency, subtotal.base]);

  useEffect(() => {
    const calculateSubtotal = () => {
      const x = items.reduce(
        (total, item) => total + item.product.basePrice * item.quantity,
        0
      );

      dispatch(
        updateSubtotal({
          total: subtotal.total,
          base: x,
        })
      );
    };
    calculateSubtotal();
  }, [items]);

  return <>{children}</>;
};
