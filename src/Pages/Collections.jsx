import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import styles from './Collections.module.css';

const Collections = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <SectionTitle
          eyebrow="CURATED SELECTIONS"
          title="DISCOVER THE COLLECTIONS"
          align="center"
        />

        <motion.div
          style={{
            textAlign: 'center',
            padding: '80px 0',
            color: 'var(--text-muted)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ fontSize: 'var(--fs-body-lg)', marginBottom: '16px' }}>
            No collections available yet.
          </p>
          <p style={{ fontSize: 'var(--fs-body-md)' }}>
            Categories will appear here once added to the data source.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Collections;
