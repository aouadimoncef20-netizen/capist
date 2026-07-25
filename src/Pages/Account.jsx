import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiPackage, FiHeart, FiSettings, FiLogOut } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import SectionTitle from '../Components/SectionTitle/SectionTitle';

const MENU_ITEMS = [
  { label: 'Profile', icon: FiUser, key: 'profile' },
  { label: 'Orders', icon: FiPackage, key: 'orders' },
  { label: 'Wishlist', icon: FiHeart, key: 'wishlist' },
  { label: 'Settings', icon: FiSettings, key: 'settings' },
  { label: 'Sign Out', icon: FiLogOut, key: 'signout', color: '#ba1a1a' },
];

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const navigate = useNavigate();

  const handleMenuClick = (key) => {
    if (key === 'signout') {
      navigate('/');
      return;
    }
    if (key === 'wishlist') {
      navigate('/favorites');
      return;
    }
    setActiveTab(key);
  };

  return (
    <div className="pt-24 pb-[120px]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 xl:px-8">
        <SectionTitle
          eyebrow="WELCOME BACK"
          title="MY ACCOUNT"
          align="left"
        />

        <motion.div
          className="flex flex-col lg:grid lg:grid-cols-[280px_1fr] gap-gutter mt-8 lg:mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Sidebar */}
          <div className="flex flex-row lg:flex-col gap-1 overflow-x-auto scrollbar-hide">
            {MENU_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleMenuClick(item.key)}
                className={`flex items-center gap-3 px-4 py-[14px] text-body-sm font-medium w-full text-left cursor-pointer transition-all whitespace-nowrap lg:whitespace-normal ${
                  activeTab === item.key
                    ? 'bg-brand-green/10 text-brand-green border-l-2 border-brand-green'
                    : 'hover:bg-surface-secondary text-text-primary border-l-2 border-transparent'
                }`}
                style={{ color: item.color || (activeTab === item.key ? undefined : undefined) }}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-6 lg:p-8 border border-border-light min-h-[300px]">
            {activeTab === 'profile' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-display text-headline-sm mb-4">Profile</h3>
                <p className="text-text-secondary mb-8">Manage your personal information and preferences.</p>
                <div className="flex flex-col gap-5 max-w-[400px]">
                  <div className="flex flex-col">
                    <label className="text-label uppercase text-text-muted mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="border-0 border-b border-border-light py-2.5 bg-transparent outline-none text-body-md focus:border-brand-green transition-colors"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-label uppercase text-text-muted mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue="john@example.com"
                      className="border-0 border-b border-border-light py-2.5 bg-transparent outline-none text-body-md focus:border-brand-green transition-colors"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'orders' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-display text-headline-sm mb-4">Orders</h3>
                <p className="text-text-secondary mb-8">View your order history and track deliveries.</p>
                <div className="text-center py-12 text-text-muted border border-dashed border-border-light">
                  <FiPackage size={32} className="mx-auto mb-3 opacity-40" />
                  <p className="text-sm">No orders yet.</p>
                  <Link to="/collections" className="text-label text-brand-green underline underline-offset-4 mt-2 inline-block">Start Shopping</Link>
                </div>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-display text-headline-sm mb-4">Settings</h3>
                <p className="text-text-secondary mb-8">Manage your account settings and preferences.</p>
                <div className="flex flex-col gap-5 max-w-[400px]">
                  <div className="flex items-center justify-between py-3 border-b border-border-light">
                    <span className="text-body-sm">Email Notifications</span>
                    <span className="text-label text-brand-green uppercase">On</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border-light">
                    <span className="text-body-sm">SMS Updates</span>
                    <span className="text-label text-text-muted uppercase">Off</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Account;
