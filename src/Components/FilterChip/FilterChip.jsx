import React from 'react';
import styles from './FilterChip.module.css';

const FilterChip = ({ label, active, onClick, className = '' }) => {
  return (
    <button
      className={`${styles.chip} ${active ? styles.active : ''} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FilterChip;
