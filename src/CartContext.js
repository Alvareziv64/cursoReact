import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const ItemProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (newState) => {
    const foundItem = cart.find((item) => item.id === newState);

    if (foundItem) {
      foundItem.quantity += foundItem.quantity;
    } else {
      cart.push({});
    }

    setCart([...cart]);
  };

console.log(cart);
  return (
    <CartContext.Provider value={{ cart, setCart, addItem }}>
      {children}
    </CartContext.Provider>
  );
};
