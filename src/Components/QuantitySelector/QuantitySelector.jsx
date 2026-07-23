import React from 'react';
import styles from './QuantitySelector.module.css';

const QuantitySelector = ({ value = 1, onChange, label = 'Quantity' }) => {
  const decrease = () => {
    if (value > 1) onChange?.(value - 1);
  };

  const increase = () => {
    onChange?.(value + 1);
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <div className={styles.selector}>
        <button className={styles.btn} onClick={decrease} aria-label="Decrease quantity">
          −
        </button>
        <input
          type="number"
          className={styles.value}
          value={value}
          readOnly
        />
        <button className={styles.btn} onClick={increase} aria-label="Increase quantity">
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
