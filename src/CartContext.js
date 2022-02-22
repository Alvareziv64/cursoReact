import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const ItemProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (newState) => {
    const foundItem = cart.find((item) => item.id === newState.id);

    if (foundItem) {
      foundItem.quantity += newState.quantity;
    } else {
      cart.push(newState);
    }
    setCart([...cart]);
  };

  //Reduce de cantidad de items
  const nCantidad = cart.reduce((acc, { quantity }) => acc + quantity, 0);
  //Reduce para sumar precio total
  const nPrecio = cart.reduce(
    (acc, { quantity, price }) => acc + quantity * price,
    0
  );

  console.log(cart);
  return (
    <CartContext.Provider
      value={{ cart, setCart, addItem, nCantidad, nPrecio }}
    >
      {children}
    </CartContext.Provider>
  );
};
