import React from 'react';

const variantClasses = {
  green: 'bg-brand-green text-white',
  dark: 'bg-brand-black text-white',
  tertiary: 'bg-[#97344a] text-white',
  outline: 'border border-border-dark text-text-secondary',
};

const Badge = ({ children, variant = 'green', className = '' }) => {
  return (
    <span
      className={`inline-flex items-center text-[10px] font-label tracking-widest uppercase px-2 py-1 leading-none ${variantClasses[variant]} ${className}`.trim()}
    >
      {children}
    </span>
  );
};

export default Badge;
