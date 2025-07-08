import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

// Create the context
export const ShopContext = createContext(null);

// Function to initialize cart with 0 quantity for each product
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    const id = all_product[index].id; // ✅ use actual product ID
    cart[id] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Add to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
    console.log("Added to cart:", itemId);
  };

  // Remove from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
    console.log("Removed from cart:", itemId);
  };

  // Total cart amount calculation
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = all_product.find(
          (product) => String(product.id) === String(itemId)
        );
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[itemId];
        }
      }
    }
    return totalAmount;
  };
const getTotalCartItems=()=>{
    let totalItem=0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            totalItem+=cartItems[item];
        }
    }
    return totalItem;
}

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
