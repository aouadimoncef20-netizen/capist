import React from 'react';
import { motion } from 'framer-motion';

const variantClasses = {
  primary:
    'bg-brand-black text-white hover:bg-brand-green active:scale-[0.97]',
  secondary:
    'border border-brand-black text-text-primary hover:bg-brand-black hover:text-white active:scale-[0.97]',
  ghost: 'text-text-primary hover:text-brand-green',
  green:
    'bg-brand-green text-white hover:bg-brand-green-dark active:scale-[0.97]',
  outlineWhite:
    'border border-white text-white hover:bg-white hover:text-brand-black active:scale-[0.97]',
};

const sizeClasses = {
  sm: 'px-5 py-3 text-[11px]',
  md: 'px-7 py-3.5',
  lg: 'px-8 py-4',
  full: 'w-full px-6 py-4',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-label tracking-widest uppercase transition-all duration-300 min-h-[44px]';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ...props
}) => {
  const classes = [
    baseClasses,
    variantClasses[variant] || variantClasses.primary,
    fullWidth ? sizeClasses.full : sizeClasses[size] || sizeClasses.md,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
