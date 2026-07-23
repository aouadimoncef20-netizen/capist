import React, { useState, useMemo, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch, FiChevronRight } from 'react-icons/fi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import FilterChip from '../Components/FilterChip/FilterChip';
import Pagination from '../Components/Pagination/Pagination';
import Button from '../Components/Button/Button';
import { products } from '../Data/products';
import styles from './ProductCollection.module.css';

const PRODUCTS_PER_PAGE = 16;
const FILTERS = ['All', 'Luxury', 'Streetwear', 'Sports', 'University', 'Best Sellers', 'New Arrivals', 'Limited Edition'];

const ProductCollection = () => {
  const { category } = useParams();
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category) {
      const catMap = {
        luxury: 'Luxury',
        streetwear: 'Streetwear',
        sports: 'Sports',
        university: 'University',
        'best-sellers': 'Best Sellers',
        exclusives: 'Luxury',
        essentials: 'Essentials',
      };
      const mapped = catMap[category];
      if (mapped === 'Best Sellers') {
        result = result.filter((p) => p.badge === 'Best Seller');
      } else if (mapped) {
        result = result.filter((p) => p.category === mapped);
      }
    }

    if (activeFilter !== 'All') {
      if (activeFilter === 'New Arrivals') {
        result = result.filter((p) => p.badge === 'New');
      } else if (activeFilter === 'Limited Edition') {
        result = result.filter((p) => p.badge === 'Limited');
      } else if (activeFilter === 'Best Sellers') {
        result = result.filter((p) => p.badge === 'Best Seller');
      } else {
        result = result.filter((p) => p.category === activeFilter);
      }
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          (p.name || '').toLowerCase().includes(q) ||
          (p.brand || '').toLowerCase().includes(q) ||
          (p.category || '').toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0));
        break;
      case 'rating':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        break;
    }

    return result;
  }, [category, activeFilter, searchQuery, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE) || 1;
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handleFilterChange = useCallback((filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categoryTitle = category
    ? category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')
    : 'All Collections';

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <nav className={styles.breadcrumb}>
                <Link to="/">Home</Link>
                <span className={styles.breadcrumbSep}><FiChevronRight size={14} /></span>
                <Link to="/collections">Shop</Link>
                <span className={styles.breadcrumbSep}><FiChevronRight size={14} /></span>
                <span>{categoryTitle}</span>
              </nav>

              <motion.h1
                className={styles.heroTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Discover Your Perfect Cap
              </motion.h1>

              <motion.p
                className={styles.heroDesc}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Explore premium luxury, streetwear, sports, and university collections
                carefully curated for every style. Crafted with architectural precision
                and a less-but-better philosophy.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Button variant="primary" size="md">
                  <Link to="/collections" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Explore Collections
                  </Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              className={styles.heroImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <LazyLoadImage
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC94ncVhdI1CZHlXbsmOv_1UyWgygaS7SBprdvHq9FeCk7Y7xdti8NKoHGPNPz_PWBpKWBE7uKiLBGxkbv8xOXwUK0bQJf3KdJSljwQjEWWBA-azOyba1HsvGMtOmgf0z1fD5kpcooh2ywg39R0lDDQze12UkLPUshco2uB4sg7w1hTLZJT27Hk5HpSyAIS0LOjCw07r7V6D7z0w7cvmsqSMLgR9q1CJvOxE3qScxl6XDdLDdFwIblrUw"
                alt="Premium cap collection"
                effect="opacity"
              />
              <div className={styles.heroImageOverlay} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className={styles.products}>
        {/* Sticky Filter Bar */}
        <div className={styles.filterBar}>
          {FILTERS.map((filter) => (
            <FilterChip
              key={filter}
              label={filter}
              active={activeFilter === filter}
              onClick={() => handleFilterChange(filter)}
            />
          ))}
        </div>

        {/* Controls: Search + Sort */}
        <div className={styles.controls}>
          <div className={styles.searchWrapper}>
            <FiSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search collection..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div className={styles.sortWrapper}>
            <span className={styles.sortLabel}>Sort by:</span>
            <select
              className={styles.sortSelect}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="best-selling">Best Selling</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <motion.div
          className={styles.productGrid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product) => (
              <motion.div
                key={product.id}
                className={styles.productGridItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div style={{ padding: '40px', background: 'var(--bg-tertiary)', textAlign: 'center', color: 'var(--text-muted)', fontSize: 'var(--fs-label)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {product.name}
                </div>
              </motion.div>
            ))
          ) : (
            <div className={styles.noResults}>
              <p>No products found.</p>
              <p style={{ fontSize: 'var(--fs-body-sm)', marginBottom: 24, opacity: 0.7 }}>
                Products will appear here once added to the data source.
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter('All');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </section>
    </>
  );
};

export default ProductCollection;
