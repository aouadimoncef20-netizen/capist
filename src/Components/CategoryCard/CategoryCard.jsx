import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CategoryCard.module.css';

const CategoryCard = ({ image, eyebrow, title, linkText, linkTo }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
      <div className={styles.vignette} />
      <div className={styles.content}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h3 className={styles.title}>{title}</h3>
        <Link to={linkTo} className={styles.link}>
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
