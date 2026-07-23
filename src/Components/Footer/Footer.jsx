import React from 'react';
import { Link } from 'react-router-dom';
import { FiGlobe, FiShare2, FiMail, FiArrowRight } from 'react-icons/fi';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <h3>CAPIST</h3>
            <p>ARCHITECTURAL PRECISION IN HEADWEAR.</p>
          </div>

          <div>
            <h4 className={styles.colTitle}>Shop</h4>
            <div className={styles.footerLinks}>
              <Link to="/collections/luxury">Luxury</Link>
              <Link to="/collections/streetwear">Streetwear</Link>
              <Link to="/collections/sports">Sports</Link>
              <Link to="/collections/exclusives">Exclusives</Link>
              <Link to="/collections/best-sellers">Best Sellers</Link>
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>Company</h4>
            <div className={styles.footerLinks}>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">Shipping</Link>
              <Link to="/about">Returns</Link>
              <Link to="/terms">Terms</Link>
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>Stay Connected</h4>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Instagram"><FiGlobe /></a>
              <a href="#" aria-label="Twitter"><FiShare2 /></a>
              <a href="#" aria-label="Email"><FiMail /></a>
            </div>
            <p className={styles.newsletterText}>Subscribe for new drop alerts.</p>
            <div className={styles.newsletterForm}>
              <input type="email" placeholder="JOIN THE CIRCLE" />
              <button aria-label="Subscribe">
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 CAPIST. ARCHITECTURAL PRECISION IN HEADWEAR.</p>
          <div className={styles.bottomLinks}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
