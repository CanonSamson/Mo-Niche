"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { products } from "./data/products";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [selectedCurrency, setSelectedCurrency] = useState("NGN");
  const [afterPartyDress, setAfterPartyDress] = useState(null);
  const [cart, setCart] = useState([]);

  const currenties = [
    { code: "NGN" },
    { code: "USD" },
    { code: "GBP" },
    { code: "EUR" },
  ];

  useEffect(() => {
    const AfterPartyDress = products.filter(
      (product) => product.category == "after-party-dress"
    );
    setAfterPartyDress(AfterPartyDress ?? []);
  }, []);
  const value = {
    currenties,
    setSelectedCurrency,
    selectedCurrency,
    afterPartyDress,
    cart,
    setCart,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
