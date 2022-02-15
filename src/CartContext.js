import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const initialState = []

export const ItemProvider = ({children}) => {
    const [cart, setCart] = useState(initialState);
    return(
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    );
};
