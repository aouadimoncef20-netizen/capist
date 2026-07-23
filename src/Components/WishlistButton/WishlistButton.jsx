import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import styles from './WishlistButton.module.css';

const WishlistButton = ({ productId, onToggle }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
    if (onToggle) onToggle(productId);
  };

  return (
    <button
      className={`${styles.btn} ${active ? styles.active : ''}`}
      onClick={handleClick}
    >
      <FiHeart size={16} />
      {active ? 'Wishlisted' : 'Add to Wishlist'}
    </button>
  );
};

export default WishlistButton;
