import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiChevronRight, FiMinus, FiPlus } from 'react-icons/fi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from '../Components/Button/Button';
import ProductCard from '../Components/ProductCard/ProductCard';
import { useCart } from '../Context/CartContext';
import { products } from '../Data/products';

const formatDZD = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' DA';
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = useMemo(
    () => products.find((p) => p.id === Number(id)),
    [id]
  );

  const productImages = useMemo(() => {
    if (!product) return [];
    return [product.image];
  }, [product]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter((p) => p.brand === product.brand && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 px-4">
        <p className="font-display text-headline-sm text-text-primary">Product not found</p>
        <p className="text-text-muted text-sm">This cap doesn't exist in our collection.</p>
        <Button variant="primary" size="sm" onClick={() => navigate('/collections')}>
          Back to Shop
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-4 lg:pt-6 pb-20 lg:pb-[120px]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 xl:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 lg:gap-2 mb-4 lg:mb-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <Link to="/" className="text-[10px] lg:text-label font-label tracking-widest uppercase text-text-muted hover:text-brand-green transition-colors">Home</Link>
          <span className="text-text-muted text-label"><FiChevronRight size={14} /></span>
          <Link to="/collections" className="text-[10px] lg:text-label font-label tracking-widest uppercase text-text-muted hover:text-brand-green transition-colors">Shop</Link>
          <span className="text-text-muted text-label"><FiChevronRight size={14} /></span>
          <span className="text-[10px] lg:text-label font-label tracking-widest uppercase text-text-muted">{product.name}</span>
        </nav>

        {/* ── Main Layout ── */}
        <div className="flex flex-col lg:grid lg:grid-cols-[7fr_5fr] gap-gutter-mobile lg:gap-gutter lg:items-start">
          {/* ── Image Gallery ── */}
          <div className="flex flex-col gap-3 lg:gap-gutter">
            <motion.div
              className="aspect-[3/4] overflow-hidden bg-surface-tertiary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <LazyLoadImage
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                effect="opacity"
              />
            </motion.div>

            <div className="grid grid-cols-3 gap-3 lg:gap-gutter">
              {productImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-[3/4] overflow-hidden cursor-pointer transition-all duration-300 ${
                    selectedImage === idx
                      ? 'ring-2 ring-brand-green ring-offset-2'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <LazyLoadImage
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    className="w-full h-full object-cover"
                    effect="opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── Product Info ── */}
          <motion.div
            className="flex flex-col gap-5 lg:gap-7 lg:sticky lg:top-[100px]"
            {...fadeUp}
          >
            <div>
              <p className="text-[10px] lg:text-label font-label tracking-widest uppercase text-brand-green mb-1">
                {product.brand}
              </p>
              <h1 className="font-display text-headline-lg font-semibold leading-tight mb-2">
                {product.name}
              </h1>
              <p className="text-xl lg:text-2xl font-bold text-brand-green">
                {formatDZD(product.price)}
              </p>
              {product.rating && (
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-brand-green text-sm">
                    {'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}
                  </span>
                  <span className="text-label text-text-muted">
                    {product.rating.toFixed(1)} ({product.reviews || 0} reviews)
                  </span>
                </div>
              )}
            </div>

            {product.badge && (
              <span className={`inline-block w-fit px-3 py-1 text-[10px] lg:text-label font-label tracking-widest uppercase ${
                product.badgeVariant === 'green'
                  ? 'bg-brand-green text-white'
                  : 'bg-brand-black text-white'
              }`}>
                {product.badge}
              </span>
            )}

            <p className="text-text-secondary leading-relaxed">
              {product.description}
            </p>

            <div>
              <p className="text-label font-label tracking-widest uppercase text-text-secondary mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-4 border border-border-dark w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 hover:bg-surface-tertiary transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <FiMinus size={16} />
                </button>
                <span className="min-w-[2ch] text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                  className="p-3 hover:bg-surface-tertiary transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <FiPlus size={16} />
                </button>
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => {
                addToCart(product, quantity);
                navigate('/cart');
              }}
            >
              Add to Cart — {formatDZD(product.price * quantity)}
            </Button>

            <div className="border-t border-border-dark pt-5">
              <details className="group">
                <summary className="text-label font-label tracking-widest uppercase cursor-pointer list-none flex justify-between items-center py-2">
                  Details
                  <span className="transition-transform group-open:rotate-180">▾</span>
                </summary>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                  Premium quality cap by {product.brand}.
                  One size fits most with adjustable strap closure.
                  100% cotton or polyester blend. Spot clean recommended.
                </p>
              </details>
              <details className="group border-t border-border-light">
                <summary className="text-label font-label tracking-widest uppercase cursor-pointer list-none flex justify-between items-center py-2">
                  Shipping &amp; Returns
                  <span className="transition-transform group-open:rotate-180">▾</span>
                </summary>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                  Complimentary shipping on all orders. 30-day return policy
                  for unworn items in original packaging.
                </p>
              </details>
            </div>
          </motion.div>
        </div>

        {relatedProducts.length > 0 && (
          <motion.section className="mt-12 lg:mt-16" {...fadeUp}>
            <h2 className="font-display text-headline-md font-semibold mb-6">
              More from {product.brand}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter-mobile lg:gap-gutter">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
