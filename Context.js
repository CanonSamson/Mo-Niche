"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [selectedCurrency, setSelectedCurrency] = useState("NGN");
  const [currenties, setCurrenties] = useState([
    { code: "NGN" },
    { code: "USD" },
    { code: "GBP" },
    { code: "EUR" },
  ]);
  const value = {
    currenties,
    setSelectedCurrency,
    selectedCurrency,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
