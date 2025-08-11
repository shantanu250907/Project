import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (item) => {
    setWishlistItems((prevItems) => {
      if (prevItems.find((i) => i.id === item.id)) {
        return prevItems; // Item already in wishlist
      }
      return [...prevItems, item];
    });
  };

  const removeFromWishlist = (itemId) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
