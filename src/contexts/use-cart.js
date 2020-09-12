import React, { createContext, useContext } from 'react';


const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
    function addItem() { };
    function removeItem() { };
    function totalPrice() { };


    return (
        <CartContext.Provider
            value={{
                addItem,
                removeItem,
                cart: '',
                totalPrice: totalPrice()

        }}
        >
            {children}
        </CartContext.Provider>
    );
}

