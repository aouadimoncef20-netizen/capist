import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiPackage, FiHeart, FiSettings, FiLogOut } from 'react-icons/fi';
import SectionTitle from '../Components/SectionTitle/SectionTitle';

const MENU_ITEMS = [
  { label: 'Profile', icon: FiUser },
  { label: 'Orders', icon: FiPackage },
  { label: 'Wishlist', icon: FiHeart },
  { label: 'Settings', icon: FiSettings },
  { label: 'Sign Out', icon: FiLogOut, color: '#ba1a1a' },
];

const Account = () => {
  return (
    <div style={{ padding: '96px 0 120px' }}>
      <div className="container-wide" style={{ maxWidth: '900px' }}>
        <SectionTitle
          eyebrow="WELCOME BACK"
          title="MY ACCOUNT"
          align="left"
        />

        <motion.div
          style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 'var(--gutter)', marginTop: '48px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {MENU_ITEMS.map((item) => (
              <button
                key={item.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 16px',
                  background: 'none',
                  border: 'none',
                  fontSize: 'var(--fs-body-sm)',
                  fontWeight: 500,
                  color: item.color || 'var(--text-primary)',
                  cursor: 'pointer',
                  transition: 'background var(--transition-fast)',
                  textAlign: 'left',
                  width: '100%',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-secondary)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div style={{
            padding: '32px',
            border: '1px solid var(--border-light)',
            minHeight: '300px',
          }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--fs-headline-sm)',
              marginBottom: '16px',
            }}>
              Profile
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
              Manage your personal information and preferences.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '400px' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontSize: 'var(--fs-label)', fontWeight: 'var(--fw-label)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>Full Name</label>
                <input type="text" defaultValue="John Doe" style={{ border: 'none', borderBottom: '1px solid var(--border-light)', padding: '10px 0', background: 'transparent', outline: 'none', fontSize: 'var(--fs-body-md)' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontSize: 'var(--fs-label)', fontWeight: 'var(--fw-label)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>Email</label>
                <input type="email" defaultValue="john@example.com" style={{ border: 'none', borderBottom: '1px solid var(--border-light)', padding: '10px 0', background: 'transparent', outline: 'none', fontSize: 'var(--fs-body-md)' }} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Account;
