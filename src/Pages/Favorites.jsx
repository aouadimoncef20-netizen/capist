import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import { products } from '../Data/products';

const Favorites = () => {
  const favoriteProducts = products;

  return (
    <div style={{ padding: '96px 0 120px' }}>
      <div className="container-wide">
        <SectionTitle
          eyebrow="YOUR COLLECTION"
          title="FAVORITES"
          align="left"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {favoriteProducts.length > 0 ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 'var(--gutter)',
              }}
            >
              {favoriteProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  {/* Product cards will render when products exist */}
                </motion.div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)' }}>
              <p style={{ fontSize: 'var(--fs-body-lg)', marginBottom: 16 }}>
                Your favorites list is empty.
              </p>
              <p>Start exploring our collection and save items you love.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Favorites;
