import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import Button from '../Components/Button/Button';
import ProductCard from '../Components/ProductCard/ProductCard';
import { useWishlist } from '../Context/WishlistContext';
import { products } from '../Data/products';

const Favorites = () => {
  const { wishlistedIds } = useWishlist();
  const favoriteProducts = products.filter((p) => wishlistedIds.includes(p.id));

  return (
    <div className="py-section-mobile lg:py-section">
      <div className="max-w-7xl mx-auto px-4 md:px-6 xl:px-8">
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
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter-mobile lg:gap-gutter mt-8 lg:mt-12">
              {favoriteProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-text-muted">
              <motion.div
                className="text-4xl lg:text-5xl mb-4 opacity-30"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FiHeart />
              </motion.div>
              <h3 className="font-display text-headline-sm text-text-primary mb-2">Your Favorites List is Empty</h3>
              <p className="text-body-sm lg:text-body-md text-text-muted mb-6">
                Tap the heart icon on any cap to save it here.
              </p>
              <Link to="/collections" className="no-underline">
                <Button variant="secondary" size="sm">EXPLORE COLLECTION</Button>
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Favorites;
