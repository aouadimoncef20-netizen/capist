import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SectionTitle = ({
  eyebrow,
  title,
  align = 'left',
  actionText,
  actionLink,
}) => {
  const Center = 'text-center';
  const Left = 'text-left';
  const WithAction =
    'flex flex-col lg:flex-row lg:justify-between lg:items-end gap-3 lg:gap-0';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`mb-8 lg:mb-12 ${align === 'center' ? Center : Left} ${actionText ? WithAction : ''}`}
    >
      <div>
        {eyebrow && (
          <span className="font-body text-label font-label tracking-widest uppercase text-brand-green block mb-1.5 lg:mb-2">
            {eyebrow}
          </span>
        )}
        <h2 className="font-display text-display-md font-bold text-text-primary tracking-tight leading-tight">
          {title}
        </h2>
      </div>
      {actionText && actionLink && (
        <Link
          to={actionLink}
          className="text-label font-label tracking-widest uppercase text-brand-green border-b border-brand-green pb-1 transition-opacity w-fit min-h-[44px] inline-flex items-center active:opacity-70"
        >
          {actionText}
        </Link>
      )}
    </motion.div>
  );
};

export default SectionTitle;
