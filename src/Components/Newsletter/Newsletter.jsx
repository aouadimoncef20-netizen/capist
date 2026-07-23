import React from 'react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Join the Circle</h2>
        <p className={styles.subtitle}>@CAPIST_DESIGN</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
