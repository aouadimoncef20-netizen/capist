import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import SectionTitle from '../Components/SectionTitle/SectionTitle';

const FAQs = [
  {
    q: 'What materials are used in CAPIST caps?',
    a: 'We use premium materials including cashmere blends, brushed wool, heavy cotton twill, and technical performance fabrics. Each material is selected for its quality, durability, and tactile experience.',
  },
  {
    q: 'How do I find my correct size?',
    a: 'Our caps come in various sizes including One Size (56-60cm), S/M (54-57cm), M/L (57-60cm), and L/XL (60-63cm). Use our Size Guide for detailed measurements.',
  },
  {
    q: 'What is the return policy?',
    a: 'We offer a 30-day extended return policy for CAPIST members. Items must be unworn with tags attached. Free returns on all orders within the domestic region.',
  },
  {
    q: 'How long does shipping take?',
    a: 'Standard delivery takes 3-5 business days domestically. Express shipping is available within 1-2 business days. International shipping takes 5-14 business days depending on location.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'Yes, we ship worldwide. International shipping rates and times vary by destination. All applicable duties and taxes are calculated at checkout.',
  },
  {
    q: 'How do I care for my CAPIST cap?',
    a: 'Each cap comes with specific care instructions. Generally, we recommend spot cleaning with mild detergent and air drying. Avoid machine washing to preserve the shape and materials.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={{ padding: '120px 0' }}>
      <div className="container-wide" style={{ maxWidth: '800px' }}>
        <SectionTitle
          eyebrow="Support"
          title="Frequently Asked Questions"
          align="center"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0' }}
        >
          {FAQs.map((faq, index) => (
            <div
              key={index}
              style={{
                borderBottom: '1px solid var(--border-light)',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '24px 0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: 'var(--fs-body-md)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {faq.q}
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ color: 'var(--text-muted)', flexShrink: 0 }}
                >
                  <FiChevronDown size={18} />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{
                      paddingBottom: '24px',
                      color: 'var(--text-secondary)',
                      fontSize: 'var(--fs-body-sm)',
                      lineHeight: 1.7,
                    }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
