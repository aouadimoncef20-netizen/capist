import React, { createContext, useContext, useState, useCallback } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlistedIds, setWishlistedIds] = useState([]);

  const toggleWishlist = useCallback((productId) => {
    setWishlistedIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  }, []);

  const isWishlisted = useCallback(
    (productId) => wishlistedIds.includes(productId),
    [wishlistedIds]
  );

  return (
    <WishlistContext.Provider value={{ wishlistedIds, toggleWishlist, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  );
};
