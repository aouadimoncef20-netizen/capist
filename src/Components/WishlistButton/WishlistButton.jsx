import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';

const WishlistButton = ({ productId, onToggle }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
    if (onToggle) onToggle(productId);
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 px-8 py-4 w-full border border-border-dark text-text-primary text-label font-label tracking-widest uppercase transition-all hover:bg-surface-tertiary${active ? ' border-brand-green text-brand-green' : ''}`}
      onClick={handleClick}
    >
      <FiHeart size={16} />
      {active ? 'Wishlisted' : 'Add to Wishlist'}
    </button>
  );
};

export default WishlistButton;
