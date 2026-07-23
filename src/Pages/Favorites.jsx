import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import { products } from '../Data/products';

const Favorites = () => {
  const favoriteProducts = products;

  return (
    <div className="py-24 lg:py-[120px]">
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
            <div className="grid grid-cols-4 gap-gutter">
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
            <div className="text-center py-20 text-text-muted">
              <p className="text-lg mb-4">
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
