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
    <div className="pt-24 pb-[120px]">
      <div className="container-wide max-w-[900px]">
        <SectionTitle
          eyebrow="WELCOME BACK"
          title="MY ACCOUNT"
          align="left"
        />

        <motion.div
          className="grid grid-cols-[280px_1fr] gap-gutter mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Sidebar */}
          <div className="flex flex-col gap-1">
            {MENU_ITEMS.map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-3 px-4 py-[14px] text-body-sm font-medium w-full text-left cursor-pointer hover:bg-surface-secondary transition-[background] duration-fast"
                style={{ color: item.color || undefined }}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-8 border border-border-light min-h-[300px]">
            <h3 className="font-display text-headline-sm mb-4">
              Profile
            </h3>
            <p className="text-text-secondary mb-8">
              Manage your personal information and preferences.
            </p>

            <div className="flex flex-col gap-5 max-w-[400px]">
              <div className="flex flex-col">
                <label className="text-label uppercase text-text-muted mb-2">Full Name</label>
                <input
                  type="text"
                  defaultValue="John Doe"
                  className="border-0 border-b border-border-light py-2.5 bg-transparent outline-none text-body-md"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-label uppercase text-text-muted mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="john@example.com"
                  className="border-0 border-b border-border-light py-2.5 bg-transparent outline-none text-body-md"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Account;
