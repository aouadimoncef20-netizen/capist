import React from 'react';
import { motion } from 'framer-motion';
import { FiLock } from 'react-icons/fi';
import Button from '../Components/Button/Button';
import styles from './Checkout.module.css';

const Checkout = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Checkout</h1>
        </motion.div>

        {/* Steps */}
        <div className={styles.steps}>
          <div className={`${styles.step} ${styles.active}`}>
            <span className={styles.stepNumber}>1</span> Shipping
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>2</span> Billing
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>3</span> Payment
          </div>
        </div>

        {/* Order Summary */}
        <div className={styles.orderSummary}>
          <h3>Order Summary</h3>
          <div className={styles.orderItem}>
            <div className={styles.orderItemImage} style={{ background: '#eee' }} />
            <div className={styles.orderItemInfo}>
              <p className={styles.orderItemName}>The Signature Cap</p>
              <p className={styles.orderItemMeta}>Qty: 1 — Obsidian Black</p>
            </div>
            <span className={styles.orderItemPrice}>$145.00</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16, fontWeight: 600 }}>
            <span>Total</span>
            <span style={{ color: 'var(--color-green)', fontSize: 20 }}>$502.00</span>
          </div>
        </div>

        {/* Shipping Form */}
        <motion.div
          className={styles.formSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Shipping Information</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>First Name</label>
                <input type="text" placeholder="Enter first name" />
              </div>
              <div className={styles.formGroup}>
                <label>Last Name</label>
                <input type="text" placeholder="Enter last name" />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label>Address Line 1</label>
              <input type="text" placeholder="Street address, P.O. box" />
            </div>
            <div className={styles.formGroup}>
              <label>Address Line 2 (Optional)</label>
              <input type="text" placeholder="Apartment, suite, unit" />
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>City</label>
                <input type="text" placeholder="City" />
              </div>
              <div className={styles.formGroup}>
                <label>Country</label>
                <select>
                  <option>Algeria</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Payment */}
        <motion.div
          className={styles.formSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2>Payment Methods</h2>
          <div className={styles.paymentOption}>
            <span className={styles.paymentOptionIcon}>$</span>
            <div>
              <p className={styles.paymentOptionTitle}>Paiement à la livraison (Cash on Delivery)</p>
              <p className={styles.paymentOptionDesc}>Pay in cash upon receiving your order.</p>
            </div>
          </div>

          <div style={{ paddingTop: 32 }}>
            <Button variant="green" size="full">
              Complete Purchase →
            </Button>
            <p style={{ marginTop: 16, fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <FiLock size={14} />
              Secured by 256-bit SSL technology
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;
