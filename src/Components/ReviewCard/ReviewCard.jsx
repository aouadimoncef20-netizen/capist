import React from 'react';
import { FiStar } from 'react-icons/fi';
import styles from './ReviewCard.module.css';

const ReviewCard = ({ review }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          {review.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className={styles.name}>{review.name}</p>
          <p className={styles.date}>{review.date}</p>
        </div>
      </div>
      <div className={styles.stars}>
        {Array.from({ length: 5 }).map((_, i) => (
          <FiStar
            key={i}
            size={14}
            fill={i < review.rating ? '#f5a623' : 'none'}
            color={i < review.rating ? '#f5a623' : 'var(--border-medium)'}
          />
        ))}
      </div>
      <p className={styles.text}>{review.text}</p>
    </div>
  );
};

export default ReviewCard;
