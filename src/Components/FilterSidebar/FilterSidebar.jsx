import React from 'react';
import styles from './FilterSidebar.module.css';

const FilterSidebar = ({ filters, onFilterChange }) => {
  return (
    <aside className={styles.sidebar}>
      {/* Category */}
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Category</h4>
        <div className={styles.options}>
          {['Luxury', 'Streetwear', 'Sports', 'University', 'Essentials'].map((cat) => (
            <label key={cat} className={styles.option}>
              <input
                type="checkbox"
                checked={filters.categories?.includes(cat)}
                onChange={() => onFilterChange?.('categories', cat)}
              />
              {cat}
              <span className={styles.count}>(12)</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Price Range</h4>
        <div className={styles.priceRange}>
          <input
            type="number"
            className={styles.priceInput}
            placeholder="Min"
            value={filters.minPrice || ''}
            onChange={(e) => onFilterChange?.('minPrice', e.target.value)}
          />
          <span className={styles.priceSep}>—</span>
          <input
            type="number"
            className={styles.priceInput}
            placeholder="Max"
            value={filters.maxPrice || ''}
            onChange={(e) => onFilterChange?.('maxPrice', e.target.value)}
          />
        </div>
      </div>

      {/* Color */}
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Color</h4>
        <div className={styles.options}>
          {['Black', 'White', 'Green', 'Beige', 'Navy'].map((color) => (
            <label key={color} className={styles.option}>
              <input
                type="checkbox"
                checked={filters.colors?.includes(color)}
                onChange={() => onFilterChange?.('colors', color)}
              />
              {color}
            </label>
          ))}
        </div>
      </div>

      {/* Size */}
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Size</h4>
        <div className={styles.options}>
          {['One Size', 'S/M', 'M/L', 'L/XL'].map((size) => (
            <label key={size} className={styles.option}>
              <input
                type="checkbox"
                checked={filters.sizes?.includes(size)}
                onChange={() => onFilterChange?.('sizes', size)}
              />
              {size}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
