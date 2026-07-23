import React, { useState, useMemo, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch, FiChevronRight } from 'react-icons/fi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import FilterChip from '../Components/FilterChip/FilterChip';
import Pagination from '../Components/Pagination/Pagination';
import Button from '../Components/Button/Button';
import { products } from '../Data/products';

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
      <section className="py-12 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 xl:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-gutter-mobile lg:gap-gutter items-center">
            <div className="py-4 md:py-12">
              <nav className="flex items-center gap-1.5 lg:gap-2 mb-4 lg:mb-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
                <Link to="/" className="text-[10px] lg:text-label font-label tracking-widest uppercase text-text-muted hover:text-brand-green transition-colors">Home</Link>
                <span className="text-text-muted text-label"><FiChevronRight size={14} /></span>
                <Link to="/collections" className="text-[10px] lg:text-label font-label tracking-widest uppercase text-text-muted hover:text-brand-green transition-colors">Shop</Link>
                <span className="text-text-muted text-label"><FiChevronRight size={14} /></span>
                <span className="text-[10px] lg:text-label font-label tracking-widest uppercase text-text-muted">{categoryTitle}</span>
              </nav>

              <motion.h1
                className="font-display text-display-md lg:text-display-lg font-bold tracking-tighter leading-tight mb-4 lg:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Discover Your Perfect Cap
              </motion.h1>

              <motion.p
                className="text-body-sm lg:text-body-lg text-text-secondary/80 mb-6 lg:mb-8 max-w-[540px] leading-relaxed"
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
                  <Link to="/collections" className="text-inherit no-underline">
                    Explore Collections
                  </Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              className="relative aspect-[4/5] overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <LazyLoadImage
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC94ncVhdI1CZHlXbsmOv_1UyWgygaS7SBprdvHq9FeCk7Y7xdti8NKoHGPNPz_PWBpKWBE7uKiLBGxkbv8xOXwUK0bQJf3KdJSljwQjEWWBA-azOyba1HsvGMtOmgf0z1fD5kpcooh2ywg39R0lDDQze12UkLPUshco2uB4sg7w1hTLZJT27Hk5HpSyAIS0LOjCw07r7V6D7z0w7cvmsqSMLgR9q1CJvOxE3qScxl6XDdLDdFwIblrUw"
                alt="Premium cap collection"
                effect="opacity"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 xl:px-8 pb-20 md:pb-[120px]">
        {/* Sticky Filter Bar */}
        <div className="sticky top-[var(--navbar-height)] z-40 bg-white/95 backdrop-blur-md py-4 lg:py-6 mb-6 lg:mb-12 border-b border-border-light flex items-center overflow-x-auto gap-3 lg:gap-4 scrollbar-hide">
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
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 lg:gap-4 mb-6 lg:mb-10">
          <div className="relative w-full lg:w-80">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search collection..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-surface-tertiary border border-border-light pl-11 pr-4 py-3.5 lg:py-3 text-body-md text-text-primary outline-none focus:border-brand-green"
            />
          </div>

          <div className="flex items-center justify-end gap-2">
            <span className="text-label font-label tracking-widest uppercase text-text-muted whitespace-nowrap">Sort by:</span>
            <select
              className="bg-transparent border-none text-label font-label tracking-widest uppercase text-brand-green cursor-pointer outline-none min-h-[44px]"
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
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter-mobile lg:gap-gutter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product) => (
              <motion.div
                key={product.id}
                className="mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="p-10 bg-gray-50 text-center text-gray-500 text-xs tracking-[0.1em] uppercase">
                  {product.name}
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 lg:py-20 text-text-muted">
              <p className="text-base md:text-lg mb-4 md:mb-6">No products found.</p>
              <p className="text-sm mb-6 opacity-70">
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
