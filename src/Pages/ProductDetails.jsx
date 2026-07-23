import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../Components/Button/Button';

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  const product = {
    title: 'Silk Drape Gown',
    price: '$1,890',
    description:
      'Crafted from fluid silk charmeuse with a bias cut that skims the body. Features a draped cowl neckline and an open back finished with delicate spaghetti straps.',
    colors: [
      { name: 'Ivory', hex: '#F5F0E8' },
      { name: 'Noir', hex: '#1A1A1A' },
      { name: 'Crimson', hex: '#8B1A1A' },
      { name: 'Navy', hex: '#1B2A4A' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80',
    ],
    stylistPicks: [
      { name: 'Leather Clutch', price: '$420', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80' },
      { name: 'Gold Heels', price: '$680', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80' },
    ],
    related: [
      { name: 'Evening Maxi', price: '$1,560', image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&q=80' },
      { name: 'Satin Slip', price: '$980', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cda3a20?w=400&q=80' },
      { name: 'Chiffon Cape', price: '$2,100', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80' },
      { name: 'Velvet Midi', price: '$1,340', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&q=80' },
    ],
    reviews: [
      { author: 'Amira K.', rating: 5, text: 'Absolutely stunning — the drape is divine and the fabric feels incredible against the skin.' },
      { author: 'Layla M.', rating: 5, text: 'Wore this to a gala and received endless compliments. Worth every penny.' },
      { author: 'Noor S.', rating: 4, text: 'Beautiful gown, runs slightly large. I sized down and the fit was perfect.' },
      { author: 'Zara H.', rating: 5, text: 'The bias cut is so flattering. My new go-to for formal occasions.' },
    ],
  };

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="pt-6 lg:pt-8 pb-20 lg:pb-[120px]">
      <div className="max-w-container mx-auto px-margin-mobile lg:px-margin-desktop">

        {/* ── Main Layout ── */}
        <div className="flex flex-col lg:grid lg:grid-cols-[7fr_5fr] gap-gutter-mobile lg:gap-gutter lg:items-start">

          {/* ── Gallery ── */}
          <div className="flex flex-col gap-3 lg:gap-gutter">
            <motion.div
              className="aspect-[3/4] overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3 lg:gap-gutter">
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-[3/4] overflow-hidden cursor-pointer active:scale-110 lg:hover:scale-110 transition-transform duration-500"
                >
                  <img
                    src={img}
                    alt={`${product.title} ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── Product Details ── */}
          <motion.div
            className="flex flex-col gap-6 lg:gap-8 lg:sticky lg:top-[100px]"
            {...fadeUp}
          >
            {/* Title & Price */}
            <div>
              <h1 className="font-display text-headline-lg font-semibold leading-tight mb-2">
                {product.title}
              </h1>
              <p className="text-lg lg:text-xl font-medium text-brand-green">
                {product.price}
              </p>
            </div>

            {/* Description */}
            <p className="text-text-secondary leading-relaxed">
              {product.description}
            </p>

            {/* Color Options */}
            <div>
              <p className="text-label font-label tracking-widest uppercase text-text-secondary mb-3">
                Color: {product.colors[selectedColor].name}
              </p>
              <div className="flex gap-3">
                {product.colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(idx)}
                    className={`w-8 h-8 rounded-full border-2 cursor-pointer transition-all ${
                      selectedColor === idx
                        ? 'border-brand-green shadow-[0_0_0_2px_white,0_0_0_4px_#2E8B57]'
                        : 'border-transparent active:border-brand-green'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Options */}
            <div>
              <p className="text-label font-label tracking-widest uppercase text-text-secondary mb-3">
                Size
              </p>
              <div className="grid grid-cols-3 gap-2.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`p-3 border border-border-dark text-label font-label tracking-widest uppercase cursor-pointer transition-all min-h-[44px] ${
                      selectedSize === size
                        ? 'border-text-primary bg-text-primary text-white font-bold'
                        : 'text-text-secondary active:border-text-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <Button variant="primary" size="lg" className="w-full">
              Add to Cart
            </Button>

            {/* Accordion-style details */}
            <div className="border-t border-border-dark pt-6">
              <details className="group">
                <summary className="text-label font-label tracking-widest uppercase cursor-pointer list-none flex justify-between items-center">
                  Details &amp; Care
                  <span className="transition-transform group-open:rotate-180">▾</span>
                </summary>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                  100% Silk Charmeuse. Dry clean only. Made in Italy.
                </p>
              </details>
            </div>
          </motion.div>
        </div>

        {/* ── Stylist Picks ── */}
        <motion.section
          className="flex flex-col lg:grid lg:grid-cols-2 gap-gutter-mobile lg:gap-gutter mt-8 lg:mt-12"
          {...fadeUp}
        >
          <h2 className="font-display text-headline-md font-semibold lg:col-span-2">
            Stylist Picks
          </h2>
          {product.stylistPicks.map((item, idx) => (
            <Link
              key={idx}
              to={`/products/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="no-underline relative group overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 bg-brand-green/90 text-white px-5 lg:px-6 py-2 text-[10px] lg:text-label font-label tracking-widest uppercase">
                {item.name} — {item.price}
              </span>
            </Link>
          ))}
        </motion.section>

        {/* ── Related Products ── */}
        <motion.section {...fadeUp}>
          <h2 className="font-display text-headline-md font-semibold mb-4">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter-mobile lg:gap-gutter mt-8 lg:mt-12">
            {product.related.map((item, idx) => (
              <Link
                key={idx}
                to={`/products/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="no-underline group"
              >
                <div className="aspect-[3/4] overflow-hidden mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-label font-label tracking-widest uppercase">
                  {item.name}
                </p>
                <p className="text-sm text-text-secondary mt-1">{item.price}</p>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* ── Reviews ── */}
        <motion.section {...fadeUp}>
          <h2 className="font-display text-headline-md font-semibold">
            Reviews
          </h2>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-gutter-mobile lg:gap-gutter mt-8 lg:mt-12">
            {product.reviews.map((review, idx) => (
              <div key={idx} className="border border-border-dark p-6">
                <div className="flex items-center gap-2 mb-3">
                  <p className="font-label font-semibold">{review.author}</p>
                  <span className="text-brand-green text-sm">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default ProductDetails;
