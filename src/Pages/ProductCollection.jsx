import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch, FiChevronRight } from 'react-icons/fi';
import FilterChip from '../Components/FilterChip/FilterChip';
import Pagination from '../Components/Pagination/Pagination';
import Button from '../Components/Button/Button';
import ProductCard from '../Components/ProductCard/ProductCard';
import { products } from '../Data/products';

const PRODUCTS_PER_PAGE = 16;
const FILTERS = ['All', 'Best Sellers', 'New Arrivals', 'Polo Ralph Lauren', 'NY', 'Nike', 'Harvard', 'New Balance', 'CAPIST'];

const ProductCollection = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);

  // Sync filter from URL query params (navbar links use ?brand=X or ?filter=best-sellers)
  useEffect(() => {
    const brand = searchParams.get('brand');
    const filter = searchParams.get('filter');
    if (brand) {
      setActiveFilter(brand);
    } else if (filter === 'best-sellers') {
      setActiveFilter('Best Sellers');
    } else {
      setActiveFilter('All');
    }
    setCurrentPage(1);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeFilter !== 'All') {
      if (activeFilter === 'New Arrivals') {
        result = result.filter((p) => p.badge === 'New');
      } else if (activeFilter === 'Best Sellers') {
        result = result.filter((p) => p.badge === 'Best Seller');
      } else {
        // Filter by brand
        result = result.filter((p) => p.brand === activeFilter);
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
  }, [activeFilter, searchQuery, sortBy]);

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

  // Dynamic heading based on active filter
  const headingText = activeFilter === 'All' ? 'All Caps' : activeFilter;

  return (
    <>
      {/* Compact Hero */}
      <section className="py-8 lg:py-12 bg-white border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 md:px-6 xl:px-8">
          <nav className="flex items-center gap-1.5 lg:gap-2 mb-3 lg:mb-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <Link to="/" className="text-[10px] lg:text-label font-label tracking-widest uppercase text-text-muted hover:text-brand-green transition-colors">Home</Link>
            <span className="text-text-muted text-label"><FiChevronRight size={14} /></span>
            <span className="text-[10px] lg:text-label font-label tracking-widest uppercase text-text-muted">Shop</span>
            {activeFilter !== 'All' && (
              <>
                <span className="text-text-muted text-label"><FiChevronRight size={14} /></span>
                <span className="text-[10px] lg:text-label font-label tracking-widest uppercase text-brand-green">{headingText}</span>
              </>
            )}
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
            <div>
              <motion.h1
                className="font-display text-display-sm lg:text-display-md font-bold tracking-tighter leading-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {headingText}
              </motion.h1>
              <motion.p
                className="text-body-sm text-text-secondary/70 mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} available
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 xl:px-8 pb-20 md:pb-[120px]">
        {/* Sticky Filter Bar */}
        <div className="sticky top-[var(--navbar-height)] z-40 bg-white/95 backdrop-blur-md py-4 lg:py-5 mb-6 lg:mb-10 border-b border-border-light flex items-center overflow-x-auto gap-2 lg:gap-3 scrollbar-hide">
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
              placeholder="Search by name, brand, or category..."
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
                <ProductCard product={product} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 lg:py-20 text-text-muted">
              <p className="text-base md:text-lg mb-4 md:mb-6">No products found.</p>
              <p className="text-sm mb-6 opacity-70">
                Try adjusting your search or filter to find what you're looking for.
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
