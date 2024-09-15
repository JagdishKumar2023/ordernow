/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { food_list } from "../assets/assets.js";

//In this part of context provider any problem facesing in array list In food_list problem then I was is direct in the array import in other file this is error in context solved it

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  return (
    <StoreContext.Provider
      value={{ food_list, removeFromCart, addToCart, cartItems }}
    >
      {children}
    </StoreContext.Provider>
  );
};
