import React from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from './SearchBar.module.css';

const SearchBar = ({ placeholder = 'Search collection...', value, onChange, className = '' }) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <FiSearch className={styles.icon} />
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
