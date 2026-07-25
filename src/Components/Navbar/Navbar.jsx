import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiHeart, FiShoppingBag, FiUser, FiX } from 'react-icons/fi';
import { useCart } from '../../Context/CartContext';

// Navigation links shown in the menu bar — all go to the collection page with brand filtering
const NAV_ITEMS = [
  { label: 'All Caps', path: '/collections' },
  { label: 'Polo Ralph Lauren', path: '/collections?brand=Polo+Ralph+Lauren' },
  { label: 'NY', path: '/collections?brand=NY' },
  { label: 'Nike', path: '/collections?brand=Nike' },
  { label: 'Best Sellers', path: '/collections?filter=best-sellers' },
];

// Shared class string for the icon buttons (search, heart, bag, user)
const iconBtnClass =
  'flex items-center justify-center text-text-primary text-[22px] lg:text-2xl min-w-[44px] min-h-[44px] relative active:text-brand-green active:scale-[0.92] transition-colors';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  // Add shadow when user scrolls down
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Check if a nav link is the current page
  const isActive = (path) => location.pathname + location.search === path ||
    (path === '/collections' && location.pathname === '/collections' && !location.search);

  // Combine navbar classes based on scroll state
  const navbarClass = [
    'fixed top-0 left-0 right-0 z-50 h-[var(--navbar-height)] bg-white/80 backdrop-blur-md border-b border-border-light/30 transition-all duration-300',
    scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm' : '',
  ].join(' ');

  return (
    <header className={navbarClass}>
      <nav className="max-w-container mx-auto px-margin-mobile lg:px-margin-desktop h-full flex items-center justify-between">

        {/* Left side: Logo + Desktop nav links */}
        <div className="flex items-center gap-6 lg:gap-12">
          <Link to="/" className="font-display text-headline-sm font-semibold tracking-tighter text-brand-green min-h-[44px] flex items-center" onClick={() => setMenuOpen(false)}>
            CAPIST
          </Link>

          {/* Desktop navigation (hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-label font-label tracking-widest uppercase text-text-secondary pb-1 border-b-2 transition-colors hover:text-brand-green ${
                  isActive(item.path) ? 'text-brand-green border-brand-green' : 'border-transparent'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right side: Icon buttons + Hamburger */}
        <div className="flex items-center gap-3 lg:gap-6">
          <Link to="/collections" className={iconBtnClass} aria-label="Search"><FiSearch /></Link>
          <Link to="/favorites" className={iconBtnClass} aria-label="Favorites"><FiHeart /></Link>
          <Link to="/cart" className={iconBtnClass} aria-label="Cart">
            <FiShoppingBag />
            <span className="absolute top-0.5 right-0.5 w-[18px] h-[18px] bg-brand-green text-white text-[10px] font-bold rounded-full flex items-center justify-center pointer-events-none">{totalItems > 0 ? totalItems : ''}</span>
          </Link>
          <Link to="/account" className={iconBtnClass} aria-label="Account"><FiUser /></Link>

          {/* Hamburger menu button (visible only on mobile) */}
          <button
            className="flex flex-col gap-1.5 p-2.5 min-w-[44px] min-h-[44px] items-center justify-center cursor-pointer lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <FiX size={22} className="text-text-primary" />
            ) : (
              <>
                <span className="w-[22px] h-[0.5px] bg-text-primary transition-all block rounded" />
                <span className="w-[22px] h-[0.5px] bg-text-primary transition-all block rounded" />
                <span className="w-[22px] h-[0.5px] bg-text-primary transition-all block rounded" />
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-white border-b border-border-light p-4 px-margin-mobile flex flex-col gap-1 max-h-[80vh] overflow-y-auto shadow-lg"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-label font-label tracking-widest uppercase text-text-secondary py-3.5 border-b border-border-light min-h-[44px] flex items-center active:text-brand-green last:border-b-0 ${
                  isActive(item.path) ? 'text-brand-green' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border-light">
              <Link to="/favorites" className="text-label font-label tracking-widest uppercase text-text-secondary py-2 min-h-[44px] flex items-center gap-2"><FiHeart size={16} /> Favorites</Link>
              <Link to="/account" className="text-label font-label tracking-widest uppercase text-text-secondary py-2 min-h-[44px] flex items-center gap-2"><FiUser size={16} /> Account</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
