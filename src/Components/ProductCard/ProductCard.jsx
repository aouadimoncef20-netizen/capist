import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FiHeart } from 'react-icons/fi';
import Badge from '../Badge/Badge';
import { useCart } from '../../Context/CartContext';
import { useWishlist } from '../../Context/WishlistContext';

const formatDZD = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' DA';
};

const ProductCard = ({ product }) => {
  const [added, setAdded] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const wishlisted = isWishlisted(product.id);

  const handleWishlist = useCallback(
    (e) => {
      e.stopPropagation();
      toggleWishlist(product.id);
    },
    [product.id, toggleWishlist]
  );

  const handleQuickAdd = useCallback(
    (e) => {
      e.stopPropagation();
      addToCart(product, 1);
      setAdded(true);
      setTimeout(() => setAdded(false), 1500);
    },
    [product, addToCart]
  );

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <article
      className="flex flex-col cursor-pointer relative group"
      onClick={handleClick}
    >
      <div className="relative aspect-[3/4] bg-surface-tertiary overflow-hidden mb-3 lg:mb-4">
        <LazyLoadImage
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-active:scale-105 lg:group-hover:scale-110"
          effect="opacity"
          wrapperProps={{ style: { width: '100%', height: '100%' } }}
        />
        {product.badge && (
          <div className="absolute top-2 left-2 lg:top-3 lg:left-3 z-[2]">
            <Badge variant={product.badgeVariant || 'green'}>
              {product.badge}
            </Badge>
          </div>
        )}
        <button
          className={`absolute top-2 right-2 lg:top-3 lg:right-3 w-9 h-9 lg:w-10 lg:h-10 bg-white/85 backdrop-blur-sm flex items-center justify-center text-base lg:text-lg z-[2] transition-colors ${
            wishlisted ? 'text-brand-green' : 'text-text-primary'
          }`}
          onClick={handleWishlist}
          aria-label="Toggle wishlist"
        >
          <FiHeart />
        </button>
        <button
          className={`absolute bottom-0 left-0 right-0 py-3.5 lg:py-4 text-white text-label font-label tracking-widest uppercase text-center z-[2] border-none cursor-pointer min-h-[44px] transition-all duration-300 ${
            added
              ? 'bg-brand-green'
              : 'bg-brand-black lg:bg-brand-black/90 lg:opacity-0 lg:translate-y-1 lg:group-hover:opacity-100 lg:group-hover:translate-y-0'
          }`}
          onClick={handleQuickAdd}
        >
          {added ? '✓ Added!' : 'Quick Add'}
        </button>
      </div>
      <div className="flex justify-between items-start gap-2">
        <div>
          <p className="text-[10px] lg:text-label font-label tracking-widest uppercase text-text-muted mb-0.5 lg:mb-1">
            {product.brand}
          </p>
          <h3 className="text-body-sm lg:text-body-md font-semibold text-text-primary mb-0.5 lg:mb-1">
            {product.name}
          </h3>
        </div>
        <span className="text-body-sm lg:text-body-md font-bold text-brand-green whitespace-nowrap">
          {formatDZD(product.price)}
        </span>
      </div>
    </article>
  );
};

export default ProductCard;
