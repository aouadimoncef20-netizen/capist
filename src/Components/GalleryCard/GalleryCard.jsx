import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FiMaximize2 } from 'react-icons/fi';
import styles from './GalleryCard.module.css';

const GalleryCard = ({ image, alt, onClick, className = '' }) => {
  return (
    <div className={`${styles.card} ${className}`} onClick={onClick}>
      <LazyLoadImage
        src={image}
        alt={alt}
        className={styles.image}
        effect="opacity"
      />
      <div className={styles.overlay}>
        <FiMaximize2 className={styles.icon} />
      </div>
    </div>
  );
};

export default GalleryCard;
