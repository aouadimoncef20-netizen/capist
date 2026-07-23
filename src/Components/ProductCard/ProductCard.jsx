import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FiHeart } from 'react-icons/fi';
import Badge from '../Badge/Badge';


const ProductCard = ({ product, onQuickAdd, onWishlistToggle }) => {
  const [wishlisted, setWishlisted] = useState(false);
  const navigate = useNavigate();

  const handleWishlist = useCallback(
    (e) => {
      e.stopPropagation();
      setWishlisted((prev) => !prev);
      if (onWishlistToggle) onWishlistToggle(product.id);
    },
    [product.id, onWishlistToggle]
  );

  const handleQuickAdd = useCallback(
    (e) => {
      e.stopPropagation();
      if (onQuickAdd) onQuickAdd(product);
    },
    [product, onQuickAdd]
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
          className={`absolute top-2 right-2 lg:top-3 lg:right-3 w-9 h-9 lg:w-10 lg:h-10 bg-white/85 backdrop-blur-sm flex items-center justify-center text-base lg:text-lg z-[2] text-text-primary transition-colors active:text-brand-green ${wishlisted ? 'text-brand-green' : ''}`}
          onClick={handleWishlist}
          aria-label="Toggle wishlist"
        >
          <FiHeart />
        </button>
        <button
          className="absolute bottom-0 left-0 right-0 py-3.5 lg:py-4 bg-brand-black text-white text-label font-label tracking-widest uppercase text-center z-[2] border-none cursor-pointer min-h-[44px] hidden lg:block lg:opacity-0 lg:transition-opacity lg:group-hover:opacity-100"
          onClick={handleQuickAdd}
        >
          Quick Add
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
          ${product.price.toFixed(2)}
        </span>
      </div>
    </article>
  );
};

export default ProductCard;
