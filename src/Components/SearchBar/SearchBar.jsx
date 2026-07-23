import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ placeholder = 'Search collection...', value, onChange, className = '' }) => {
  return (
    <div className={`relative w-full ${className}`}>
      <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
      <input
        type="text"
        className="w-full bg-surface-tertiary border border-border-light pl-11 pr-4 py-3.5 text-body-md text-text-primary outline-none focus:border-brand-green rounded-none"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
