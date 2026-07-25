import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHeart, FiAward, FiCamera, FiInstagram, FiArrowRight, FiTruck, FiRotateCcw, FiShield } from 'react-icons/fi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import Button from '../Components/Button/Button';
import CustomerReview from '../Components/CustomerReview/CustomerReview';
import ProductCard from '../Components/ProductCard/ProductCard';
import { products, instagramImages, reviews as initialReviews } from '../Data/products';

// Reusable animation configs
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

// Value props shown in the black bar below hero
const VALUE_PROPS = [
  { icon: FiTruck, text: 'Complimentary Shipping', dot: false },
  { icon: FiRotateCcw, text: '30-Day Returns', dot: true },
  { icon: FiShield, text: 'Premium Quality', dot: true },
  { icon: null, text: 'Secure Checkout', dot: true },
];

const valuePropClass =
  'flex items-center gap-2 lg:gap-3 text-white/80 text-[10px] lg:text-label font-label tracking-wider lg:tracking-widest uppercase whitespace-nowrap';

const Home = () => {
  const favoriteCaps = products.filter((p) => p.badge === 'Best Seller' || p.rating >= 4.7);
  const bestSellers = products.filter((p) => p.badge === 'Best Seller');
  const [reviews, setReviews] = useState(initialReviews);
  const [igHover, setIgHover] = useState(null);

  const handleReviewSubmit = (newReview) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[520px] lg:h-[700px] xl:h-[921px] overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfP69gmshrqm9my7jkGwIQ5EsGIy5snyRBj7OfWUNH5m4IrDZssmQLH9ZgdiOUKIwBb50DcDx-mSOHZSsukmvUEoXI6La93Xit16j4x7bb5oRmtAuVCKB8lmOWk8zB94EcQyWFcriUOpZn-boN5IzBmpk9FisEEem0_J3DMWLVQ0UK1sIA__WFf2tm9SBdY17A782hCip_58suVKWP8OfbMv9zlhBNA4U1KroXn_zyS6U0mpe-SZS3SQ')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end lg:justify-center text-white max-w-container mx-auto px-margin-mobile lg:px-margin-desktop pb-12 lg:pb-0">
          <motion.h1
            className="font-display text-display-mobile lg:text-display-lg font-bold tracking-tighter leading-tight max-w-[600px] mb-4 lg:mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            OWN YOUR STYLE
          </motion.h1>
          <motion.p
            className="text-body-md lg:text-body-lg leading-relaxed max-w-[500px] mb-6 lg:mb-10 opacity-90 drop-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            Architectural precision meets heritage craftsmanship. Discover the collection that defines modern luxury headwear.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 lg:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button variant="green" size="lg">
              <Link to="/collections" className="text-inherit no-underline">SHOP COLLECTION</Link>
            </Button>
            <Button variant="outlineWhite" size="lg">
              <Link to="/collections?filter=best-sellers" className="text-inherit no-underline">BEST SELLERS</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ===== VALUE PROPS BAR ===== */}
      <motion.section className="bg-brand-black py-4 lg:py-5 overflow-hidden" {...fadeIn}>
        <div className="max-w-container mx-auto px-margin-mobile lg:px-margin-desktop flex flex-wrap justify-center lg:justify-between items-center gap-3 lg:gap-6">
          {VALUE_PROPS.map((prop, i) => (
            <div key={i} className={valuePropClass}>
              {prop.dot && <span className="w-[5px] h-[5px] lg:w-[6px] lg:h-[6px] rounded-full bg-brand-green flex-shrink-0" />}
              {prop.icon && <prop.icon size={16} />}
              {prop.text}
            </div>
          ))}
        </div>
      </motion.section>

      {/* ===== YOUR FAVORITE CAPS ===== */}
      <section className="py-section-mobile lg:py-section relative overflow-hidden">
        {/* Decorative rings - hidden on mobile */}
        <div
          className="hidden lg:block absolute rounded-full border border-border-light/20 -z-10"
          style={{ width: 400, height: 400, top: -100, right: -80 }}
        />
        <div
          className="hidden lg:block absolute rounded-full border border-border-light/10 -z-10"
          style={{ width: 300, height: 300, top: -50, right: -30 }}
        />
        <div
          className="hidden lg:block absolute text-border-light/30 text-xs leading-tight whitespace-pre -z-10 pointer-events-none select-none"
          style={{ top: 60, left: 40 }}
        >
          {'• • •\n• • •\n• • •'}
        </div>

        {/* Floating badge - hidden on mobile */}
        <motion.div
          className="hidden lg:flex absolute items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md z-10"
          style={{ top: '15%', right: '8%' }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FiHeart className="text-brand-green" size={16} />
          <span className="text-[10px] font-semibold text-text-primary tracking-wider uppercase">Curated Collection</span>
        </motion.div>

        <div className="max-w-container mx-auto px-margin-mobile lg:px-margin-desktop">
          <SectionTitle
            eyebrow="CURATED FOR YOU"
            title="YOUR FAVORITE CAPS"
            align="left"
          />

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-gutter-mobile lg:gap-gutter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.08 }}
          >
            {favoriteCaps.length > 0 ? (
              favoriteCaps.slice(0, 4).map((product) => (
                <motion.div key={product.id} {...fadeUp}>
                  <ProductCard product={product} />
                </motion.div>
              ))
            ) : (
              <motion.div
                className="col-span-full text-center py-16 lg:py-20 text-text-muted"
                {...fadeIn}
              >
                <motion.div
                  className="text-4xl lg:text-5xl mb-4 opacity-30"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FiHeart />
                </motion.div>
                <h3 className="font-display text-headline-sm text-text-primary mb-2">Your Favorites Await</h3>
                <p className="text-body-sm lg:text-body-md text-text-muted mb-6">
                  Browse the collection and tap the heart icon to save your most-loved caps here.
                </p>
                <Link to="/collections" className="no-underline">
                  <Button variant="secondary" size="sm">EXPLORE COLLECTION</Button>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ===== OUR BEST SELLERS ===== */}
      <section className="py-section-mobile lg:py-section bg-surface-secondary relative overflow-hidden">
        {/* Decorative elements - hidden on mobile */}
        <div
          className="hidden lg:block absolute rounded-full border border-border-light/20 -z-10"
          style={{ width: 350, height: 350, bottom: -80, left: -80 }}
        />
        <div
          className="hidden lg:block absolute text-border-light/30 text-xs leading-tight whitespace-pre -z-10 pointer-events-none select-none"
          style={{ bottom: 60, right: 40 }}
        >
          {'• • •\n• • •\n• • •'}
        </div>

        {/* Floating badge - hidden on mobile */}
        <motion.div
          className="hidden lg:flex absolute items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md z-10"
          style={{ bottom: '15%', left: '8%' }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FiAward className="text-brand-green" size={16} />
          <span className="text-[10px] font-semibold text-text-primary tracking-wider uppercase">Top Rated</span>
        </motion.div>

        <div className="max-w-container mx-auto px-margin-mobile lg:px-margin-desktop">
          <SectionTitle
            eyebrow="TOP RATED"
            title="OUR BEST SELLERS"
            align="left"
          />

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-gutter-mobile lg:gap-gutter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.08 }}
          >
            {bestSellers.length > 0 ? (
              bestSellers.slice(0, 4).map((product) => (
                <motion.div key={product.id} {...fadeUp}>
                  <ProductCard product={product} />
                </motion.div>
              ))
            ) : (
              <motion.div
                className="col-span-full text-center py-16 lg:py-20 text-text-muted"
                {...fadeIn}
              >
                <motion.div
                  className="text-4xl lg:text-5xl mb-4 opacity-30"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FiAward />
                </motion.div>
                <h3 className="font-display text-headline-sm text-text-primary mb-2">Best Sellers Coming Soon</h3>
                <p className="text-body-sm lg:text-body-md text-text-muted mb-6">
                  Our most popular caps will be featured here once products are added to the collection.
                </p>
                <Link to="/collections" className="no-underline">
                  <Button variant="secondary" size="sm">DISCOVER PRODUCTS</Button>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ===== PARTNERS ===== */}
      <motion.section className="py-12 lg:py-16 bg-surface-secondary" {...fadeIn}>
        <div className="max-w-container mx-auto px-margin-mobile lg:px-margin-desktop">
          <motion.div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-25 lg:opacity-30 grayscale">
            {['NIKE', 'ADIDAS', 'NEW ERA', 'STUSSY', 'CARHARTT'].map((brand) => (
              <motion.span
                key={brand}
                className="font-display text-lg lg:text-headline-sm font-semibold text-text-primary tracking-wide"
                whileHover={{ opacity: 0.7, scale: 1.05 }}
              >
                {brand}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ===== CUSTOMER REVIEWS ===== */}
      <CustomerReview reviews={reviews} onReviewSubmit={handleReviewSubmit} />

      {/* ===== INSTAGRAM SHOP ===== */}
      <section className="py-section-mobile lg:py-section bg-surface-primary relative overflow-hidden border-t border-b border-border-light">
        {/* Decorative - hidden on mobile */}
        <div
          className="hidden lg:block absolute rounded-full border border-border-light/20 -z-10"
          style={{ width: 250, height: 250, top: -50, left: -50 }}
        />

        <div className="max-w-[1080px] mx-auto px-margin-mobile lg:px-margin-desktop">
          <motion.div className="text-center mb-2" {...fadeUp}>
            <span className="text-label font-label tracking-[0.2em] uppercase text-brand-green mb-2 block">
              <FiInstagram size={14} className="mr-1.5 align-middle" />
              @CAPIST_DESIGN
            </span>
            <SectionTitle
              title="FOLLOW US ON INSTAGRAM"
              align="center"
            />
          </motion.div>

          <motion.p className="text-body-sm lg:text-body-md text-text-muted max-w-[480px] mx-auto mb-8 lg:mb-12 text-center leading-relaxed" {...fadeIn}>
            Tag <strong>@CAPIST_DESIGN</strong> in your photos for a chance to be featured.
            Join thousands sharing their CAPIST style around the world.
          </motion.p>

          <motion.div
            className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-1 lg:gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.04 }}
          >
            {instagramImages.slice(0, 12).map((img, index) => (
              <motion.div
                key={index}
                className="relative aspect-square overflow-hidden cursor-pointer group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                onMouseEnter={() => setIgHover(index)}
                onMouseLeave={() => setIgHover(null)}
              >
                <LazyLoadImage src={img} alt={`Instagram ${index + 1}`} effect="opacity" />
                <motion.div
                  className="absolute inset-0 bg-black/40 flex items-center justify-center"
                  animate={{ opacity: igHover === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiCamera className="text-white text-2xl" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="text-center mt-8 lg:mt-12" {...fadeUp}>
            <p className="text-body-sm lg:text-body-md text-text-muted mb-6">Follow us for daily style inspiration and exclusive drops.</p>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
              whileHover={{ scale: 1.02 }}
            >
              <Button variant="secondary" size="md">
                Follow @CAPIST_DESIGN
                <FiArrowRight className="ml-1.5" />
              </Button>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
