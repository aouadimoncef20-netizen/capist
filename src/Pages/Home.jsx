import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHeart, FiAward, FiCamera, FiInstagram, FiArrowRight, FiTruck, FiRotateCcw, FiShield } from 'react-icons/fi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import Button from '../Components/Button/Button';
import CustomerReview from '../Components/CustomerReview/CustomerReview';
import { products, instagramImages, reviews as initialReviews } from '../Data/products';
import styles from './Home.module.css';

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

const Home = () => {
  const favoriteCaps = products;
  const bestSellers = products;
  const [reviews, setReviews] = useState(initialReviews);
  const [igHover, setIgHover] = useState(null);

  const handleReviewSubmit = (newReview) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className={styles.hero}>
        <div
          className={styles.heroImage}
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfP69gmshrqm9my7jkGwIQ5EsGIy5snyRBj7OfWUNH5m4IrDZssmQLH9ZgdiOUKIwBb50DcDx-mSOHZSsukmvUEoXI6La93Xit16j4x7bb5oRmtAuVCKB8lmOWk8zB94EcQyWFcriUOpZn-boN5IzBmpk9FisEEem0_J3DMWLVQ0UK1sIA__WFf2tm9SBdY17A782hCip_58suVKWP8OfbMv9zlhBNA4U1KroXn_zyS6U0mpe-SZS3SQ')`,
          }}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            OWN YOUR STYLE
          </motion.h1>
          <motion.p
            className={styles.heroText}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            Architectural precision meets heritage craftsmanship. Discover the collection that defines modern luxury headwear.
          </motion.p>
          <motion.div
            className={styles.heroActions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button variant="green" size="lg">
              <Link to="/collections" style={{ color: 'inherit', textDecoration: 'none' }}>SHOP COLLECTION</Link>
            </Button>
            <Button variant="outlineWhite" size="lg">
              <Link to="/collections" style={{ color: 'inherit', textDecoration: 'none' }}>EXPLORE CATEGORIES</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ===== VALUE PROPS BAR ===== */}
      <motion.section className={styles.valueProps} {...fadeIn}>
        <div className={styles.valuePropsInner}>
          <div className={styles.valueProp}>
            <FiTruck size={16} />
            Complimentary Shipping
          </div>
          <div className={styles.valueProp}>
            <span className={styles.valuePropDot} />
            <FiRotateCcw size={16} />
            30-Day Returns
          </div>
          <div className={styles.valueProp}>
            <span className={styles.valuePropDot} />
            <FiShield size={16} />
            Premium Quality
          </div>
          <div className={styles.valueProp}>
            <span className={styles.valuePropDot} />
            Secure Checkout
          </div>
        </div>
      </motion.section>

      {/* ===== YOUR FAVORITE CAPS ===== */}
      <section className={styles.section}>
        {/* Decorative rings */}
        <div className={styles.decorRing} style={{ width: 400, height: 400, top: -100, right: -80 }} />
        <div className={styles.decorRingInner} style={{ width: 300, height: 300, top: -50, right: -30 }} />
        <div className={styles.decorDotCluster} style={{ top: 60, left: 40 }}>
          {'• • •\n• • •\n• • •'}
        </div>

        {/* Floating badge */}
        <motion.div
          className={styles.floatBadge}
          style={{ top: '15%', right: '8%' }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FiHeart className={styles.floatBadgeIcon} />
          <span className={styles.floatBadgeText}>Curated Collection</span>
        </motion.div>

        <div className={styles.sectionInner}>
          <SectionTitle
            eyebrow="CURATED FOR YOU"
            title="YOUR FAVORITE CAPS"
            align="left"
          />

          <motion.div
            className={styles.grid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.08 }}
          >
            {favoriteCaps.length > 0 ? (
              favoriteCaps.map((product) => (
                <motion.div key={product.id} {...fadeUp}>
                  {/* ProductCard will render here when data is added */}
                </motion.div>
              ))
            ) : (
              <motion.div className={styles.emptyState} {...fadeIn}>
                <motion.div
                  className={styles.emptyStateIcon}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FiHeart />
                </motion.div>
                <h3 className={styles.emptyStateTitle}>Your Favorites Await</h3>
                <p className={styles.emptyStateDesc}>
                  Browse the collection and tap the heart icon to save your most-loved caps here.
                </p>
                <Link to="/collections" style={{ textDecoration: 'none' }}>
                  <Button variant="secondary" size="sm">EXPLORE COLLECTION</Button>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ===== OUR BEST SELLERS ===== */}
      <section className={styles.sectionAlt}>
        {/* Decorative elements */}
        <div className={styles.decorRing} style={{ width: 350, height: 350, bottom: -80, left: -80 }} />
        <div className={styles.decorDotCluster} style={{ bottom: 60, right: 40 }}>
          {'• • •\n• • •\n• • •'}
        </div>

        {/* Floating badge */}
        <motion.div
          className={styles.floatBadge}
          style={{ bottom: '15%', left: '8%' }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FiAward className={styles.floatBadgeIcon} />
          <span className={styles.floatBadgeText}>Top Rated</span>
        </motion.div>

        <div className={styles.sectionInner}>
          <SectionTitle
            eyebrow="TOP RATED"
            title="OUR BEST SELLERS"
            align="left"
          />

          <motion.div
            className={styles.grid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.08 }}
          >
            {bestSellers.length > 0 ? (
              bestSellers.map((product) => (
                <motion.div key={product.id} {...fadeUp}>
                  {/* ProductCard will render here when data is added */}
                </motion.div>
              ))
            ) : (
              <motion.div className={styles.emptyState} {...fadeIn}>
                <motion.div
                  className={styles.emptyStateIcon}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FiAward />
                </motion.div>
                <h3 className={styles.emptyStateTitle}>Best Sellers Coming Soon</h3>
                <p className={styles.emptyStateDesc}>
                  Our most popular caps will be featured here once products are added to the collection.
                </p>
                <Link to="/collections" style={{ textDecoration: 'none' }}>
                  <Button variant="secondary" size="sm">DISCOVER PRODUCTS</Button>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ===== PARTNERS ===== */}
      <motion.section className={styles.partners} {...fadeIn}>
        <div className={styles.partnersInner}>
          <motion.div className={styles.partnerLogos}>
            {['NIKE', 'ADIDAS', 'NEW ERA', 'STUSSY', 'CARHARTT'].map((brand) => (
              <motion.span
                key={brand}
                className={styles.partnerLogo}
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
      <section className={styles.instagramSection}>
        {/* Decorative */}
        <div className={styles.decorRing} style={{ width: 250, height: 250, top: -50, left: -50 }} />

        <div className={styles.instagramInner}>
          <motion.div className={styles.instagramHeader} {...fadeUp}>
            <span className={styles.instagramHandle}>
              <FiInstagram size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              @CAPIST_DESIGN
            </span>
            <SectionTitle
              title="FOLLOW US ON INSTAGRAM"
              align="center"
            />
          </motion.div>

          <motion.p className={styles.instagramDesc} {...fadeIn}>
            Tag <strong>@CAPIST_DESIGN</strong> in your photos for a chance to be featured.
            Join thousands sharing their CAPIST style around the world.
          </motion.p>

          <motion.div
            className={styles.instagramGallery}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.04 }}
          >
            {instagramImages.slice(0, 12).map((img, index) => (
              <motion.div
                key={index}
                className={styles.instagramItem}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                onMouseEnter={() => setIgHover(index)}
                onMouseLeave={() => setIgHover(null)}
              >
                <LazyLoadImage src={img} alt={`Instagram ${index + 1}`} effect="opacity" />
                <motion.div
                  className={styles.instagramItemOverlay}
                  animate={{ opacity: igHover === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiCamera className={styles.instagramItemIcon} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className={styles.instagramCta} {...fadeUp}>
            <p>Follow us for daily style inspiration and exclusive drops.</p>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
              whileHover={{ scale: 1.02 }}
            >
              <Button variant="secondary" size="md">
                Follow @CAPIST_DESIGN
                <FiArrowRight style={{ marginLeft: 6 }} />
              </Button>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ===== DECORATIVE DIVIDER ===== */}
      {/* <motion.div
        style={{
          height: 1,
          background: 'linear-gradient(to right, transparent, var(--color-green), transparent)',
          opacity: 0.2,
        }}
        {...fadeIn}
      /> */}

    </>

  );
};

export default Home;
