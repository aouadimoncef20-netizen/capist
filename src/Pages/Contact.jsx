import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import Button from '../Components/Button/Button';

const Contact = () => {
  return (
    <div style={{ padding: '96px 0 120px' }}>
      <div className="container-wide" style={{ maxWidth: '900px' }}>
        <SectionTitle
          eyebrow="GET IN TOUCH"
          title="CONTACT US"
          align="center"
        />

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--gutter)',
            marginTop: '48px',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <FiMail size={20} style={{ color: 'var(--color-green)', marginTop: 4 }} />
              <div>
                <h3 style={{ fontSize: 'var(--fs-label)', fontWeight: 'var(--fw-label)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>Email</h3>
                <p style={{ color: 'var(--text-secondary)' }}>hello@capist.com</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <FiPhone size={20} style={{ color: 'var(--color-green)', marginTop: 4 }} />
              <div>
                <h3 style={{ fontSize: 'var(--fs-label)', fontWeight: 'var(--fw-label)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>Phone</h3>
                <p style={{ color: 'var(--text-secondary)' }}>+1 (555) 123-4567</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <FiMapPin size={20} style={{ color: 'var(--color-green)', marginTop: 4 }} />
              <div>
                <h3 style={{ fontSize: 'var(--fs-label)', fontWeight: 'var(--fw-label)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>Location</h3>
                <p style={{ color: 'var(--text-secondary)' }}>London, United Kingdom</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ fontSize: 'var(--fs-label)', fontWeight: 'var(--fw-label)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>Name</label>
              <input type="text" placeholder="Your name" style={{ border: 'none', borderBottom: '1px solid var(--border-light)', padding: '12px 0', background: 'transparent', outline: 'none', fontSize: 'var(--fs-body-md)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ fontSize: 'var(--fs-label)', fontWeight: 'var(--fw-label)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>Email</label>
              <input type="email" placeholder="your@email.com" style={{ border: 'none', borderBottom: '1px solid var(--border-light)', padding: '12px 0', background: 'transparent', outline: 'none', fontSize: 'var(--fs-body-md)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ fontSize: 'var(--fs-label)', fontWeight: 'var(--fw-label)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>Message</label>
              <textarea placeholder="Your message" rows={4} style={{ border: 'none', borderBottom: '1px solid var(--border-light)', padding: '12px 0', background: 'transparent', outline: 'none', fontSize: 'var(--fs-body-md)', resize: 'vertical' }} />
            </div>
            <div style={{ paddingTop: '8px' }}>
              <Button variant="primary" size="md" type="submit">Send Message</Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
