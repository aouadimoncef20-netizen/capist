import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './SectionTitle.module.css';

const SectionTitle = ({
  eyebrow,
  title,
  align = 'left',
  actionText,
  actionLink,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`${styles.wrapper} ${align === 'center' ? styles.alignCenter : styles.alignLeft} ${actionText ? styles.withAction : ''}`}
    >
      <div>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h2 className={styles.title}>{title}</h2>
      </div>
      {actionText && actionLink && (
        <Link to={actionLink} className={styles.action}>
          {actionText}
        </Link>
      )}
    </motion.div>
  );
};

export default SectionTitle;
