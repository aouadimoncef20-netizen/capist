import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiLock, FiTruck, FiX } from 'react-icons/fi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from '../Components/Button/Button';
import QuantitySelector from '../Components/QuantitySelector/QuantitySelector';
import styles from './Cart.module.css';

const CART_ITEMS = [
  {
    id: 'signature-cap',
    name: 'The Signature Cap',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrVNe4K3hXv4L66kvqHKRNJzJB2wkIxK82ZbdXkW6sH8KuASP1YczM6zEwWx4PR_3ZYwdGFL2TvNobZ1x1pH5Y9NJq8pTpFpjZyy7v12JpFKRACa9HacEEzUytCuMPSaXjH8EJFPMcRCIptsqwk2jRbEi3l-4vdXdPxVJ0szji1Ug8u1Ni_QbB7MBFQUE0tXIxShnXyVd0SXCG-5cpkE1iuvRSa-752htqemd6_Dy_zh6IYkW60Nh-_g',
    color: 'Obsidian Black',
    size: 'One Size',
    price: 145.00,
    quantity: 1,
  },
  {
    id: 'reflecta-01',
    name: 'Reflecta 01',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvr6I_jUTvXGgTuZIKevsE3XqH2r9GlpmabedWCBCvQ8039tQtnKL4QpeO8xryq64IdodJvC8UIyH11LOifN1TFAPYZMVsOf7saaaES5HWMLSFtDdWBSu5BSne0VqF3oBHRhLOiYmOWF0Hqcq7eQe9UHKpMONRpa3VFWtq_BWsfBfDbRGXQVY1K0ZhZ4zS1NY2bS_eHZEyt2fexkqhBPD3FSeQixf7_8-pmS-t1NaVUXBBnJvRrqIhew',
    color: 'Steel Iridescent',
    size: 'L',
    price: 290.00,
    quantity: 1,
  },
];

const Cart = () => {
  const [items, setItems] = useState(CART_ITEMS);
  const [promoOpen, setPromoOpen] = useState(false);

  const updateQty = (id, newQty) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 25.00;
  const tax = 42.00;
  const total = subtotal + shipping + tax;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column */}
          <div>
            <motion.header
              className={styles.header}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1>Shopping Bag</h1>
              <p>{items.length} ITEMS IN YOUR CART</p>
            </motion.header>

            {/* Cart Items */}
            <div className={styles.cartItems}>
              {items.map((item, idx) => (
                <motion.div
                  key={item.id}
                  className={styles.cartItem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <div className={styles.itemImage}>
                    <LazyLoadImage src={item.image} alt={item.name} effect="opacity" />
                  </div>
                  <div className={styles.itemDetails}>
                    <div className={styles.itemInfo}>
                      <div className={styles.itemHeader}>
                        <div>
                          <h2 className={styles.itemName}>{item.name}</h2>
                          <p className={styles.itemMeta}>Color: {item.color}</p>
                          <p className={styles.itemMeta}>Size: {item.size}</p>
                        </div>
                        <span className={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>

                      <div className={styles.itemActions}>
                        <QuantitySelector
                          value={item.quantity}
                          onChange={(qty) => updateQty(item.id, qty)}
                        />
                        <div className={styles.stockStatus}>
                          <span className={styles.stockDot} />
                          <span className={styles.stockText}>In Stock</span>
                        </div>
                      </div>
                    </div>

                    <div className={styles.itemLinks}>
                      <button>Save for Later</button>
                      <button className={styles.removeBtn} onClick={() => removeItem(item.id)}>
                        <FiX size={12} style={{ marginRight: 4 }} />
                        Remove
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Checkout Flow */}
            <div className={styles.checkoutFlow}>
              <div className={styles.steps}>
                <div className={`${styles.step} ${styles.active}`}>
                  <span className={styles.stepNumber}>1</span>
                  Shipping
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>2</span>
                  Billing
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>3</span>
                  Payment
                </div>
              </div>

              {/* Shipping Form */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-headline-sm)', marginBottom: '32px', textTransform: 'uppercase', letterSpacing: '-0.01em', color: 'var(--color-green)' }}>
                  Shipping Information
                </h2>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label style={{ fontSize: 'var(--fs-label)', fontWeight: 'var(--fw-label)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>First Name</label>
                      <input type="text" placeholder="Enter first name" style={{ border: 'none', borderBottom: '1px solid var(--border-light)', padding: '12px 0', background: 'transparent', outline: 'none', fontSize: 'var(--fs-body-md)' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label style={{ fontSize: 'var(--fs-label)', fontWeight: 'var(--fw-label)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>Last Name</label>
                      <input type="text" placeholder="Enter last name" style={{ border: 'none', borderBottom: '1px solid var(--border-light)', padding: '12px 0', background: 'transparent', outline: 'none', fontSize: 'var(--fs-body-md)' }} />
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label style={{ fontSize: 'var(--fs-label)', fontWeight: 'var(--fw-label)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>Address Line 1</label>
                    <input type="text" placeholder="Street address, P.O. box, company name" style={{ border: 'none', borderBottom: '1px solid var(--border-light)', padding: '12px 0', background: 'transparent', outline: 'none', fontSize: 'var(--fs-body-md)' }} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label style={{ fontSize: 'var(--fs-label)', fontWeight: 'var(--fw-label)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>Address Line 2 (Optional)</label>
                    <input type="text" placeholder="Apartment, suite, unit, building, floor" style={{ border: 'none', borderBottom: '1px solid var(--border-light)', padding: '12px 0', background: 'transparent', outline: 'none', fontSize: 'var(--fs-body-md)' }} />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label style={{ fontSize: 'var(--fs-label)', fontWeight: 'var(--fw-label)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>City</label>
                      <input type="text" placeholder="City" style={{ border: 'none', borderBottom: '1px solid var(--border-light)', padding: '12px 0', background: 'transparent', outline: 'none', fontSize: 'var(--fs-body-md)' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label style={{ fontSize: 'var(--fs-label)', fontWeight: 'var(--fw-label)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>Country</label>
                      <select style={{ border: 'none', borderBottom: '1px solid var(--border-light)', padding: '12px 0', background: 'transparent', outline: 'none', fontSize: 'var(--fs-body-md)', cursor: 'pointer' }}>
                        <option>Algeria</option>
                      </select>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label style={{ fontSize: 'var(--fs-label)', fontWeight: 'var(--fw-label)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>Wilaya</label>
                      <input type="text" placeholder="Enter your Wilaya" style={{ border: 'none', borderBottom: '1px solid var(--border-light)', padding: '12px 0', background: 'transparent', outline: 'none', fontSize: 'var(--fs-body-md)' }} />
                    </div>
                  </div>
                </form>
              </motion.div>

              {/* Payment Section */}
              <div style={{ marginTop: '64px', paddingTop: '64px', borderTop: '1px solid rgba(234,234,234,0.2)' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-headline-sm)', marginBottom: '32px', textTransform: 'uppercase', letterSpacing: '-0.01em', color: 'var(--color-green)' }}>
                  Payment Methods
                </h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', border: '1px solid var(--color-green)', background: 'rgba(46, 139, 87, 0.05)', marginBottom: '32px' }}>
                  <span style={{ fontSize: 24, color: 'var(--color-green)' }}>$</span>
                  <div>
                    <p style={{ fontSize: 'var(--fs-label)', fontWeight: 'var(--fw-label)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-green)' }}>
                      Paiement à la livraison (Cash on Delivery)
                    </p>
                    <p style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)', marginTop: 4 }}>
                      Pay in cash upon receiving your order.
                    </p>
                  </div>
                </div>

                <div style={{ paddingTop: '48px' }}>
                  <Link to="/checkout" style={{ textDecoration: 'none' }}>
                    <Button variant="green" size="full">
                      Complete Purchase
                      <span style={{ marginLeft: 8 }}>→</span>
                    </Button>
                  </Link>
                  <p style={{ marginTop: '16px', textAlign: 'center', color: 'var(--text-muted)', fontSize: 'var(--fs-body-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    <FiLock size={14} />
                    Your transaction is encrypted and secured by 256-bit SSL technology.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <aside>
            <div className={styles.summary}>
              <h3 className={styles.summaryTitle}>Order Summary</h3>

              <div className={styles.summaryRows}>
                <div className={styles.summaryRow}>
                  <span className={styles.summaryRowLabel}>Subtotal</span>
                  <span className={styles.summaryRowValue}>${subtotal.toFixed(2)}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span className={styles.summaryRowLabel}>Shipping (Express)</span>
                  <span className={styles.summaryRowValue}>${shipping.toFixed(2)}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span className={styles.summaryRowLabel}>Estimated Tax</span>
                  <span className={styles.summaryRowValue}>${tax.toFixed(2)}</span>
                </div>
                <div className={styles.totalRow}>
                  <span className={styles.totalLabel}>Total</span>
                  <span className={styles.totalValue}>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Promo Code */}
              <div className={styles.promo}>
                <button className={styles.promoToggle} onClick={() => setPromoOpen(!promoOpen)}>
                  <span>Add Promo Code</span>
                  <motion.span
                    animate={{ rotate: promoOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiChevronDown size={18} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {promoOpen && (
                    <motion.div
                      className={styles.promoInput}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <input type="text" placeholder="Enter Code" />
                      <button>Apply</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Trust */}
              <div className={styles.trustItems}>
                <div className={styles.trustItem}>
                  <FiLock size={14} />
                  Secure Checkout Guaranteed
                </div>
                <div className={styles.trustItem}>
                  <FiTruck size={14} />
                  Complimentary Eco-Packaging
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Cart;
