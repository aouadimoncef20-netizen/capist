import React from 'react';
import styles from './LoadingSkeleton.module.css';

const Skeleton = ({ type = 'text', width, height }) => {
  const className = type === 'product' ? styles.productCard : '';

  if (type === 'product') {
    return (
      <div className={className}>
        <div className={`${styles.skeleton} ${styles.image}`} />
        <div className={`${styles.skeleton} ${styles.textSm}`} />
        <div className={`${styles.skeleton} ${styles.textMd}`} />
        <div className={`${styles.skeleton} ${styles.textLg}`} />
      </div>
    );
  }

  return (
    <div
      className={`${styles.skeleton} ${styles[type] || ''}`}
      style={{ width, height }}
    />
  );
};

export default Skeleton;
