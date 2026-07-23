import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FiHeart } from 'react-icons/fi';
import Badge from '../Badge/Badge';
import styles from './ProductCard.module.css';

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
    <article className={styles.card} onClick={handleClick}>
      <div className={styles.imageWrapper}>
        <LazyLoadImage
          src={product.image}
          alt={product.name}
          className={styles.image}
          effect="opacity"
          wrapperProps={{ style: { width: '100%', height: '100%' } }}
        />
        {product.badge && (
          <div className={styles.badge}>
            <Badge variant={product.badgeVariant || 'green'}>
              {product.badge}
            </Badge>
          </div>
        )}
        <button
          className={`${styles.wishlistBtn} ${wishlisted ? styles.active : ''}`}
          onClick={handleWishlist}
          aria-label="Toggle wishlist"
        >
          <FiHeart />
        </button>
        <button className={styles.quickAdd} onClick={handleQuickAdd}>
          Quick Add
        </button>
      </div>
      <div className={styles.info}>
        <div>
          <p className={styles.brand}>{product.brand}</p>
          <h3 className={styles.name}>{product.name}</h3>
        </div>
        <span className={styles.price}>${product.price.toFixed(2)}</span>
      </div>
    </article>
  );
};

export default ProductCard;
