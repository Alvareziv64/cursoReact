import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const ItemProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //agregar item del itemDetail
  const addItem = (newState) => {
    const foundItem = cart.find((item) => item.id === newState.id);

    if (foundItem) {
      foundItem.quantity += newState.quantity;
    } else {
      cart.push(newState);
    }
    setCart([...cart]);
  };

  //para sumar 1 unidad al cart
  const sumar = (itemId) => {
    const sumarItem = cart.map((item) => {
      return itemId === item.id
        ? { ...item, quantity: item.quantity + 1 }
        : { ...item };
    });
    setCart(sumarItem);
  };

  //restar 1 unidad al cart
  const restar = (itemId) => {
    const restarItem = cart.map((item) => {
     return itemId === item.id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : { ...item };
    });

    setCart(restarItem);
  };

  //Elimina el item del cart
  const borrar = (itemId) => {
    const borrarItem = cart.filter((item) =>
    item.id !== itemId);
    setCart(borrarItem)
  }

  //Reduce para cantidad de items
  const nCantidad = cart.reduce((acc, { quantity }) => acc + quantity, 0);

  
  return (
    <CartContext.Provider value={{ cart, setCart, addItem, nCantidad, sumar, restar, borrar}}>
      {children}
    </CartContext.Provider>
  );
};
