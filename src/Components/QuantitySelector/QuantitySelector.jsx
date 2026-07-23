import React from 'react';


const QuantitySelector = ({ value = 1, onChange, label = 'Quantity' }) => {
  const decrease = () => {
    if (value > 1) onChange?.(value - 1);
  };

  const increase = () => {
    onChange?.(value + 1);
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="text-label text-text-muted uppercase tracking-widest">{label}</span>
      <div className="flex items-center border border-border-light w-fit">
        <button
          className="px-4 py-2 text-base hover:bg-surface-tertiary"
          onClick={decrease}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <input
          type="number"
          className="w-12 text-center text-body-md font-medium bg-transparent outline-none"
          value={value}
          readOnly
        />
        <button
          className="px-4 py-2 text-base hover:bg-surface-tertiary"
          onClick={increase}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
