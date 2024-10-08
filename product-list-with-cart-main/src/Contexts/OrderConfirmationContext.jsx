import {  createContext, useState } from "react";

export const OrderConfirmationContext = createContext()

export const OrderConfirmationProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <OrderConfirmationContext.Provider value={{isOpen, setIsOpen}} >
            {children}
        </OrderConfirmationContext.Provider>
    )
}