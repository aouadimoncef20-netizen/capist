import React from 'react';

const FilterSidebar = ({ filters, onFilterChange }) => {
  const sectionClass = 'py-5 border-b border-border-light first:pt-0';
  const sectionTitleClass = 'text-label font-label tracking-widest uppercase text-text-primary mb-4';
  const optionClass = 'flex items-center gap-2.5 cursor-pointer text-body-sm text-text-secondary hover:text-brand-green';

  return (
    <aside className="w-[280px] flex-shrink-0 hidden lg:block">
      {/* Category */}
      <div className={sectionClass}>
        <h4 className={sectionTitleClass}>Category</h4>
        <div className="flex flex-col gap-2.5">
          {['Luxury', 'Streetwear', 'Sports', 'University', 'Essentials'].map((cat) => (
            <label key={cat} className={optionClass}>
              <input
                type="checkbox"
                className="w-4 h-4 accent-brand-green cursor-pointer"
                checked={filters.categories?.includes(cat)}
                onChange={() => onFilterChange?.('categories', cat)}
              />
              {cat}
              <span className="ml-auto text-text-muted text-label">(12)</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className={sectionClass}>
        <h4 className={sectionTitleClass}>Price Range</h4>
        <div className="flex gap-3 items-center">
          <input
            type="number"
            className="flex-1 p-2 border border-border-light text-body-sm text-text-primary outline-none focus:border-brand-green"
            placeholder="Min"
            value={filters.minPrice || ''}
            onChange={(e) => onFilterChange?.('minPrice', e.target.value)}
          />
          <span className="text-text-muted">—</span>
          <input
            type="number"
            className="flex-1 p-2 border border-border-light text-body-sm text-text-primary outline-none focus:border-brand-green"
            placeholder="Max"
            value={filters.maxPrice || ''}
            onChange={(e) => onFilterChange?.('maxPrice', e.target.value)}
          />
        </div>
      </div>

      {/* Color */}
      <div className={sectionClass}>
        <h4 className={sectionTitleClass}>Color</h4>
        <div className="flex flex-col gap-2.5">
          {['Black', 'White', 'Green', 'Beige', 'Navy'].map((color) => (
            <label key={color} className={optionClass}>
              <input
                type="checkbox"
                className="w-4 h-4 accent-brand-green cursor-pointer"
                checked={filters.colors?.includes(color)}
                onChange={() => onFilterChange?.('colors', color)}
              />
              {color}
            </label>
          ))}
        </div>
      </div>

      {/* Size */}
      <div className={sectionClass}>
        <h4 className={sectionTitleClass}>Size</h4>
        <div className="flex flex-col gap-2.5">
          {['One Size', 'S/M', 'M/L', 'L/XL'].map((size) => (
            <label key={size} className={optionClass}>
              <input
                type="checkbox"
                className="w-4 h-4 accent-brand-green cursor-pointer"
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
