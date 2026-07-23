import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../Components/SectionTitle/SectionTitle';

const Collections = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-margin-mobile">
      <div className="max-w-container mx-auto w-full py-section-mobile lg:py-section">
        <SectionTitle
          eyebrow="CURATED SELECTIONS"
          title="DISCOVER THE COLLECTIONS"
          align="center"
        />

        <motion.div
          className="flex flex-col items-center justify-center py-20 px-5 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-headline-md text-text-primary mb-3">
            No collections available yet.
          </p>
          <p className="text-body-md text-text-muted max-w-[400px]">
            Categories will appear here once added to the data source.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Collections;
