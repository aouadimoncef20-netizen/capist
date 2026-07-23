import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../Components/Button/Button';
import styles from './ProductDetails.module.css';

const ProductDetails = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '50vh',
            textAlign: 'center',
            gap: '24px',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--fs-headline-md)',
            color: 'var(--color-green)',
          }}>
            Product Not Found
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--fs-body-lg)' }}>
            This product does not exist or has been removed.
          </p>
          <Link to="/collections" style={{ textDecoration: 'none' }}>
            <Button variant="primary" size="md">Back to Collections</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;
