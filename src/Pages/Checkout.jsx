import React from 'react';
import { motion } from 'framer-motion';
import { FiLock } from 'react-icons/fi';
import Button from '../Components/Button/Button';

// Shared class for form inputs
const inputClass = 'border-0 border-b border-border-light py-3 bg-transparent outline-none text-body-md text-text-primary focus:border-brand-green';

const Checkout = () => {
  return (
    <div className="pb-20 lg:pb-[120px]">
      <div className="max-w-[720px] mx-auto px-margin-mobile lg:px-margin-desktop">

        {/* Header */}
        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-headline-lg font-semibold mb-2">Checkout</h1>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex items-center gap-8 mb-12 border-b border-border-light pb-4 overflow-x-auto">
          {['Shipping', 'Billing', 'Payment'].map((label, i) => {
            const active = i === 0;
            return (
              <div key={label}
                className={`flex items-center gap-2 text-label font-label uppercase pb-4 whitespace-nowrap ${
                  active ? 'text-brand-green border-b-2 border-brand-green' : 'text-text-muted border-b-2 border-transparent'
                }`}
              >
                <span className={`w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] ${
                  active ? 'bg-brand-green text-white border-brand-green' : ''
                }`}>
                  {i + 1}
                </span>
                {label}
              </div>
            );
          })}
        </div>

        {/* Order Summary */}
        <div className="bg-surface-secondary p-8 border border-border-light mb-12">
          <h3 className="text-label font-label uppercase text-brand-green mb-6">Order Summary</h3>
          <div className="flex gap-4 py-4 border-b border-border-light">
            <div className="w-20 aspect-[3/4] overflow-hidden bg-surface-tertiary" style={{ background: '#eee' }} />
            <div className="flex-1">
              <p className="font-semibold text-body-sm mb-1">The Signature Cap</p>
              <p className="text-label text-text-muted">Qty: 1 — Obsidian Black</p>
            </div>
            <span className="font-medium whitespace-nowrap">$145.00</span>
          </div>
          <div className="flex justify-between mt-4 font-semibold">
            <span>Total</span>
            <span className="text-brand-green text-xl">$502.00</span>
          </div>
        </div>

        {/* Shipping Form */}
        <motion.div className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="font-display text-headline-sm uppercase tracking-tight text-brand-green mb-6">
            Shipping Information
          </h2>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-label font-label uppercase text-text-muted mb-2">First Name</label>
                <input type="text" placeholder="Enter first name" className={inputClass} />
              </div>
              <div className="flex flex-col">
                <label className="text-label font-label uppercase text-text-muted mb-2">Last Name</label>
                <input type="text" placeholder="Enter last name" className={inputClass} />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-label font-label uppercase text-text-muted mb-2">Address Line 1</label>
              <input type="text" placeholder="Street address, P.O. box" className={inputClass} />
            </div>
            <div className="flex flex-col">
              <label className="text-label font-label uppercase text-text-muted mb-2">Address Line 2 (Optional)</label>
              <input type="text" placeholder="Apartment, suite, unit" className={inputClass} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-label font-label uppercase text-text-muted mb-2">City</label>
                <input type="text" placeholder="City" className={inputClass} />
              </div>
              <div className="flex flex-col">
                <label className="text-label font-label uppercase text-text-muted mb-2">Country</label>
                <select className="border-0 border-b border-border-light py-3 bg-transparent outline-none text-body-md text-text-primary focus:border-brand-green">
                  <option>Algeria</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Payment */}
        <motion.div className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="font-display text-headline-sm uppercase tracking-tight text-brand-green mb-6">Payment Methods</h2>

          <div className="flex items-center gap-4 p-4 border border-brand-green bg-brand-green/5 mb-4">
            <span className="text-2xl text-brand-green">$</span>
            <div>
              <p className="text-label font-label uppercase text-brand-green">
                Paiement à la livraison (Cash on Delivery)
              </p>
              <p className="text-body-sm text-text-muted mt-1">Pay in cash upon receiving your order.</p>
            </div>
          </div>

          <div className="pt-8">
            <Button variant="green" size="full">
              Complete Purchase →
            </Button>
            <p className="mt-4 text-body-sm text-text-muted text-center flex items-center justify-center gap-2">
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
