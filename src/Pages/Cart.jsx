import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiLock, FiTruck, FiX } from 'react-icons/fi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from '../Components/Button/Button';
import QuantitySelector from '../Components/QuantitySelector/QuantitySelector';

// Checkout steps shown in the progress bar
const STEPS = ['Shipping', 'Billing', 'Payment'];

// Shared class for form inputs (underline style)
const inputClass = 'border-0 border-b border-border-light py-3 px-0 bg-transparent outline-none text-body-md';

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
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item)));
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 25.00;
  const tax = 42.00;
  const total = subtotal + shipping + tax;

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
                {items.length} ITEMS IN YOUR CART
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
                      className="w-full h-full object-cover transition-transform duration-slow group-active:scale-105 lg:group-hover:scale-105"
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
                          <p className="text-[12px] lg:text-body-sm text-text-muted">Color: {item.color}</p>
                          <p className="text-[12px] lg:text-body-sm text-text-muted">Size: {item.size}</p>
                        </div>
                        <span className="text-base lg:text-xl font-medium whitespace-nowrap">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>

                      {/* Quantity + Stock */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 lg:gap-12 mt-2">
                        <QuantitySelector value={item.quantity} onChange={(qty) => updateQty(item.id, qty)} />
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-brand-green" />
                          <span className="text-[9px] lg:text-[10px] font-label tracking-widest uppercase text-brand-green">In Stock</span>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-4 lg:gap-6 mt-4 lg:mt-6 flex-wrap">
                      <button className="text-[10px] lg:text-label font-label tracking-widest underline underline-offset-4 bg-transparent border-none cursor-pointer text-text-muted transition-colors min-h-[44px] active:text-brand-green">
                        Save for Later
                      </button>
                      <button onClick={() => removeItem(item.id)}
                        className="text-[10px] lg:text-label font-label tracking-widest underline underline-offset-4 bg-transparent border-none cursor-pointer transition-colors min-h-[44px] text-[#ba1a1a]"
                      >
                        <FiX size={12} className="mr-1 inline" /> Remove
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
                    <label className="text-label font-label tracking-widest uppercase text-text-muted mb-2">Address Line 1</label>
                    <input type="text" placeholder="Street address, P.O. box, company name" className={inputClass} />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-label font-label tracking-widest uppercase text-text-muted mb-2">Address Line 2 (Optional)</label>
                    <input type="text" placeholder="Apartment, suite, unit, building, floor" className={inputClass} />
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
                      <input type="text" placeholder="Enter your Wilaya" className={inputClass} />
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
                  <span className="text-2xl text-brand-green">$</span>
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
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-body-sm lg:text-body-md">
                  <span className="text-text-muted">Shipping (Express)</span>
                  <span className="font-medium">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-body-sm lg:text-body-md">
                  <span className="text-text-muted">Estimated Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-4 lg:pt-6 mt-1 lg:mt-2 border-t border-[rgba(46,139,87,0.2)]">
                  <span className="text-label font-label tracking-widest uppercase text-brand-green">Total</span>
                  <span className="text-xl lg:text-2xl font-bold text-brand-green">${total.toFixed(2)}</span>
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
