import React, { createContext, useEffect, useState } from "react";

export const cartContext = createContext();

const ContextApi = ({ children }) => {
  const cartFromLocalStorage = JSON.parse(
    window.localStorage.getItem("cart") || "[]"
  );
  const [cart, setCart] = useState(cartFromLocalStorage);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default ContextApi;
