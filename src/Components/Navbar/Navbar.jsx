import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiHeart, FiShoppingBag, FiUser } from 'react-icons/fi';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
  { label: 'Luxury', path: '/collections/luxury' },
  { label: 'Streetwear', path: '/collections/streetwear' },
  { label: 'Sports', path: '/collections/sports' },
  { label: 'Exclusives', path: '/collections/exclusives' },
  { label: 'Best Sellers', path: '/collections/best-sellers' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.inner}>
        <div className={styles.left}>
          <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>CAPIST</Link>
          <div className={styles.navLinks}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${styles.navLink} ${isActive(item.path) ? styles.active : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <Link to="/search" className={styles.iconBtn} aria-label="Search">
            <FiSearch />
          </Link>
          <Link to="/favorites" className={styles.iconBtn} aria-label="Favorites">
            <FiHeart />
          </Link>
          <Link to="/cart" className={styles.iconBtn} aria-label="Cart">
            <FiShoppingBag />
            <span className={styles.cartBadge}>0</span>
          </Link>
          <Link to="/account" className={styles.iconBtn} aria-label="Account">
            <FiUser />
          </Link>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${styles.mobileLink} ${isActive(item.path) ? styles.active : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
