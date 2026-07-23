import React from 'react';

const FilterChip = ({ label, active, onClick, className = '' }) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center px-5 py-2.5 text-[10px] lg:text-label font-label tracking-widest uppercase border border-border-light text-text-secondary bg-transparent transition-all whitespace-nowrap min-h-[44px] hover:border-brand-green hover:text-brand-green ${active ? 'bg-brand-green border-brand-green text-white' : ''} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FilterChip;
