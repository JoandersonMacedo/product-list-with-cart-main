import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartProvaider = ({ children }) => {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{ cart, setCart }} >
            {children}
        </CartContext.Provider>
    )
}