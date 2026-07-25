import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiLock, FiTruck, FiX, FiShoppingBag } from 'react-icons/fi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from '../Components/Button/Button';
import { useCart } from '../Context/CartContext';

const formatDZD = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' DA';
};

// Checkout steps shown in the progress bar
const STEPS = ['Shipping', 'Billing', 'Payment'];

// Shared class for form inputs (underline style)
const inputClass = 'border-0 border-b border-border-light py-3 px-0 bg-transparent outline-none text-body-md';

const Cart = () => {
  const { items, updateQuantity, removeItem, totalItems, subtotal } = useCart();
  const [promoOpen, setPromoOpen] = useState(false);

  const shipping = subtotal > 0 ? 3500 : 0;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="pb-20 lg:pb-[120px]">
        <div className="max-w-container mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FiShoppingBag className="text-5xl lg:text-6xl mb-4 opacity-30 mx-auto text-text-muted" />
              <h1 className="font-display text-headline-md font-semibold mb-2">Your Cart is Empty</h1>
              <p className="text-body-sm lg:text-body-md text-text-muted mb-6">
                Looks like you haven't added any caps yet.
              </p>
              <Link to="/collections" className="no-underline">
                <Button variant="primary" size="md">Shop Collection</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-20 lg:pb-[120px]">
      <div className="max-w-container mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="flex flex-col lg:grid lg:grid-cols-[7fr_5fr] gap-12 lg:gap-gutter mt-8 lg:mt-16">

          {/* ===== LEFT COLUMN: Cart Items + Checkout Form ===== */}
          <div>
            {/* Header */}
            <motion.header className="mb-8 lg:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display text-headline-lg font-semibold mb-2">Shopping Bag</h1>
              <p className="text-body-sm lg:text-body-md text-text-muted tracking-widest uppercase">
                {totalItems} ITEM{totalItems !== 1 ? 'S' : ''} IN YOUR CART
              </p>
            </motion.header>

            {/* Cart Items */}
            <div className="flex flex-col gap-6 lg:gap-10">
              {items.map((item, idx) => (
                <motion.div key={item.id}
                  className="grid grid-cols-[100px_1fr] lg:grid-cols-[120px_1fr] xl:grid-cols-[180px_1fr] gap-4 lg:gap-6 xl:gap-8 pb-6 lg:pb-8 xl:pb-10 border-b border-border-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  {/* Item Image */}
                  <div className="aspect-[3/4] overflow-hidden bg-surface-tertiary">
                    <LazyLoadImage src={item.image} alt={item.name} effect="opacity"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex flex-col justify-between py-1 lg:py-2">
                    <div className="flex flex-col gap-2 lg:gap-4">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <h2 className="font-display text-[15px] lg:text-headline-sm font-semibold uppercase mb-0.5 lg:mb-1">
                            {item.name}
                          </h2>
                          <p className="text-[12px] lg:text-body-sm text-text-muted">{item.brand}</p>
                        </div>
                        <span className="text-base lg:text-xl font-medium whitespace-nowrap">
                          {formatDZD(item.price * item.quantity)}
                        </span>
                      </div>

                      {/* Quantity + Stock */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 lg:gap-12 mt-2">
                        <div className="flex items-center gap-3 border border-border-dark w-fit">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="px-3 py-2 text-base hover:bg-surface-tertiary transition-colors cursor-pointer"
                            aria-label="Decrease quantity"
                          >−</button>
                          <span className="min-w-[2ch] text-center font-semibold text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, Math.min(10, item.quantity + 1))}
                            className="px-3 py-2 text-base hover:bg-surface-tertiary transition-colors cursor-pointer"
                            aria-label="Increase quantity"
                          >+</button>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-brand-green" />
                          <span className="text-[9px] lg:text-[10px] font-label tracking-widest uppercase text-brand-green">In Stock</span>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-4 lg:gap-6 mt-4 lg:mt-6 flex-wrap">
                      <button onClick={() => removeItem(item.id)}
                        className="flex items-center gap-1 text-[10px] lg:text-label font-label tracking-widest underline underline-offset-4 bg-transparent border-none cursor-pointer transition-colors min-h-[44px] text-[#ba1a1a]"
                      >
                        <FiX size={12} /> Remove
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ===== Checkout Section ===== */}
            <div className="mt-10 lg:mt-16 pt-10 lg:pt-16 border-t border-border-light">
              {/* Progress Steps */}
              <div className="flex items-center gap-4 lg:gap-8 mb-6 lg:mb-10 border-b border-border-light/20 pb-3 lg:pb-4 overflow-x-auto">
                {STEPS.map((label, i) => {
                  const active = i === 0;
                  return (
                    <div key={label}
                      className={`flex items-center gap-1.5 lg:gap-2 text-[10px] lg:text-label font-label tracking-widest uppercase pb-3 lg:pb-4 whitespace-nowrap ${
                        active ? 'text-brand-green border-b-2 border-brand-green' : 'text-text-muted border-b-2 border-transparent'
                      }`}
                    >
                      <span className={`w-[18px] h-[18px] lg:w-5 lg:h-5 rounded-full border border-current flex items-center justify-center text-[9px] lg:text-[10px] ${
                        active ? 'bg-brand-green text-white border-brand-green' : ''
                      }`}>
                        {i + 1}
                      </span>
                      {label}
                    </div>
                  );
                })}
              </div>

              {/* Shipping Information Form */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h2 className="font-display text-headline-sm mb-8 uppercase tracking-[-0.01em] text-brand-green">
                  Shipping Information
                </h2>
                <form className="flex flex-col gap-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="text-label font-label tracking-widest uppercase text-text-muted mb-2">First Name</label>
                      <input type="text" placeholder="Enter first name" className={inputClass} />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-label font-label tracking-widest uppercase text-text-muted mb-2">Last Name</label>
                      <input type="text" placeholder="Enter last name" className={inputClass} />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-label font-label tracking-widest uppercase text-text-muted mb-2">Address</label>
                    <input type="text" placeholder="Street address, P.O. box" className={inputClass} />
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="flex flex-col">
                      <label className="text-label font-label tracking-widest uppercase text-text-muted mb-2">City</label>
                      <input type="text" placeholder="City" className={inputClass} />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-label font-label tracking-widest uppercase text-text-muted mb-2">Country</label>
                      <select className="border-0 border-b border-border-light py-3 px-0 bg-transparent outline-none text-body-md cursor-pointer">
                        <option>Algeria</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-label font-label tracking-widest uppercase text-text-muted mb-2">Wilaya</label>
                      <input type="text" placeholder="Wilaya" className={inputClass} />
                    </div>
                  </div>
                </form>
              </motion.div>

              {/* Payment Section */}
              <div className="mt-16 pt-16 border-t border-border-light/20">
                <h2 className="font-display text-headline-sm mb-8 uppercase tracking-[-0.01em] text-brand-green">
                  Payment Methods
                </h2>
                <div className="flex items-center gap-4 p-4 border border-brand-green bg-[rgba(46,139,87,0.05)] mb-8">
                  <span className="text-2xl text-brand-green">DA</span>
                  <div>
                    <p className="text-label font-label tracking-widest uppercase text-brand-green">
                      Paiement à la livraison (Cash on Delivery)
                    </p>
                    <p className="text-body-sm text-text-muted mt-1">Pay in cash upon receiving your order.</p>
                  </div>
                </div>

                <div className="pt-12">
                  <Link to="/checkout" className="no-underline">
                    <Button variant="green" size="full">
                      Complete Purchase <span className="ml-2">→</span>
                    </Button>
                  </Link>
                  <p className="mt-4 text-center text-text-muted text-body-sm flex items-center justify-center gap-2">
                    <FiLock size={14} />
                    Your transaction is encrypted and secured by 256-bit SSL technology.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== RIGHT COLUMN: Order Summary ===== */}
          <aside>
            <div className="static lg:sticky lg:top-[100px] bg-surface-secondary p-6 lg:p-8 border border-border-light/30">
              <h3 className="text-label font-label tracking-[0.2em] uppercase text-brand-green pb-3 lg:pb-4 border-b border-border-light mb-6 lg:mb-8">
                Order Summary
              </h3>

              <div className="flex flex-col gap-3 lg:gap-4 mb-6 lg:mb-8">
                <div className="flex justify-between text-body-sm lg:text-body-md">
                  <span className="text-text-muted">Subtotal</span>
                  <span className="font-medium">{formatDZD(subtotal)}</span>
                </div>
                <div className="flex justify-between text-body-sm lg:text-body-md">
                  <span className="text-text-muted">Shipping</span>
                  <span className="font-medium">{subtotal > 0 ? formatDZD(shipping) : '—'}</span>
                </div>
                <div className="flex justify-between text-body-sm lg:text-body-md">
                  <span className="text-text-muted">Estimated Tax (5%)</span>
                  <span className="font-medium">{formatDZD(tax)}</span>
                </div>
                <div className="flex justify-between pt-4 lg:pt-6 mt-1 lg:mt-2 border-t border-[rgba(46,139,87,0.2)]">
                  <span className="text-label font-label tracking-widest uppercase text-brand-green">Total</span>
                  <span className="text-xl lg:text-2xl font-bold text-brand-green">{formatDZD(total)}</span>
                </div>
              </div>

              {/* Promo Code Toggle */}
              <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-border-light">
                <button onClick={() => setPromoOpen(!promoOpen)}
                  className="flex justify-between items-center w-full text-label font-label tracking-widest uppercase text-text-primary transition-colors min-h-[44px]"
                >
                  <span>Add Promo Code</span>
                  <motion.span animate={{ rotate: promoOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <FiChevronDown size={18} />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {promoOpen && (
                    <motion.div className="flex gap-2 mt-4 overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <input type="text" placeholder="Enter Code"
                        className="flex-1 border-0 border-b border-border-light bg-transparent py-2 px-1 text-body-sm lg:text-body-md uppercase outline-none focus:border-brand-green"
                      />
                      <button className="px-4 py-2 border border-brand-green bg-transparent text-brand-green text-[10px] font-label tracking-widest uppercase cursor-pointer transition-all min-h-[44px] active:bg-brand-green active:text-white">
                        Apply
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-border-light flex flex-col gap-3 lg:gap-4">
                <div className="flex items-center gap-2.5 lg:gap-3 text-text-muted text-[9px] lg:text-[10px] font-label tracking-widest uppercase">
                  <FiLock size={14} /> Secure Checkout Guaranteed
                </div>
                <div className="flex items-center gap-2.5 lg:gap-3 text-text-muted text-[9px] lg:text-[10px] font-label tracking-widest uppercase">
                  <FiTruck size={14} /> Complimentary Eco-Packaging
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
