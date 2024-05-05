import React, { createContext, useState, useEffect } from "react";
import all_products from "../Assets/all_product";

export const ShopContext = createContext(null);

const initializeCart = () => {
  // Load cart state from localStorage if it exists
  const savedCart = localStorage.getItem("cartItems");
  if (savedCart) {
    return JSON.parse(savedCart);
  }
  // Initialize cart state with zeros for each product ID
  return all_products.reduce((cart, product) => {
    cart[product.id] = 0;
    return cart;
  }, {});
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initializeCart());

  // Save cartItems state to localStorage when it changes
  useEffect(() => {
    console.log("cartItems state:", cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (productId) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = {
        ...prevCartItems,
        [productId]: prevCartItems[productId] + 1,
      };

      return updatedCartItems;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => {
      const updatedCart = { ...prevCartItems };
      if (updatedCart[productId] > 0) {
        updatedCart[productId] -= 1;
      }

      return updatedCart;
    });
  };

  const clearCart = () => {
    setCartItems(initializeCart());
  };

  const deleteItem = (productId) => {
    setCartItems((prevCartItems) => {
      const updatedCart = { ...prevCartItems };
      updatedCart[productId] = 0;

      return updatedCart;
    });
  };

  const getTotalCartItems = () => {
    // Get total number of items in cart
    let totalItems = 0;
    for (const product of all_products) {
      if (cartItems[product.id] > 0) {
        totalItems += cartItems[product.id];
      }
    }
    return totalItems;
  };

  const getCartSubtotal = () => {
    // Get total price of items in cart
    let subtotal = 0;
    for (const product of all_products) {
      if (cartItems[product.id] > 0) {
        let productInfo = all_products.find((item) => item.id === product.id);
        subtotal += productInfo.new_price * cartItems[product.id];
      }
    }
    return subtotal;
  };

  const contextValue = {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    deleteItem,
    getTotalCartItems,
    getCartSubtotal,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
