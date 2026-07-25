import React from 'react';
import { Link } from 'react-router-dom';
import { FiGlobe, FiShare2, FiMail, FiArrowRight } from 'react-icons/fi';

// Reusable class strings (so we don't repeat them for every link)
const linkClass =
  'text-label font-label tracking-widest uppercase text-text-muted transition-colors w-fit min-h-[44px] flex items-center active:text-brand-green lg:hover:text-brand-green lg:hover:underline underline-offset-4';

const socialBtnClass =
  'text-text-muted text-xl transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center bg-none border-none cursor-pointer p-0 active:text-brand-green lg:hover:text-brand-green';

const Footer = () => {
  return (
    <footer className="w-full bg-surface-primary border-t border-border-light/30 pt-12 lg:pt-20 pb-8 lg:pb-10">
      <div className="max-w-container mx-auto px-margin-mobile lg:px-margin-desktop">
        { /* Grid: stacks on mobile, 4 columns on desktop */ }
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-gutter">

          {/* Brand Column */}
          <div>
            <h3 className="font-display text-headline-sm text-brand-green mb-4 lg:mb-6">CAPIST</h3>
            <p className="text-label font-label tracking-widest text-text-muted leading-relaxed">
              ARCHITECTURAL PRECISION IN HEADWEAR.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-label font-label tracking-widest uppercase text-text-primary mb-4 lg:mb-6">Shop</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/collections" className={linkClass}>All Caps</Link>
              <Link to="/collections?filter=best-sellers" className={linkClass}>Best Sellers</Link>
              <Link to="/collections?brand=Polo+Ralph+Lauren" className={linkClass}>Polo Ralph Lauren</Link>
              <Link to="/collections?brand=NY" className={linkClass}>NY</Link>
              <Link to="/collections?brand=Nike" className={linkClass}>Nike</Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-label font-label tracking-widest uppercase text-text-primary mb-4 lg:mb-6">Company</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className={linkClass}>About Us</Link>
              <Link to="/contact" className={linkClass}>Contact</Link>
              <Link to="/faq" className={linkClass}>FAQ</Link>
              <Link to="/about" className={linkClass}>Shipping &amp; Returns</Link>
            </div>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="text-label font-label tracking-widest uppercase text-text-primary mb-4 lg:mb-6">Stay Connected</h4>
            <div className="flex gap-4 mb-6 lg:mb-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={socialBtnClass} aria-label="Instagram"><FiGlobe /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={socialBtnClass} aria-label="Twitter"><FiShare2 /></a>
              <a href="mailto:hello@capist.com" className={socialBtnClass} aria-label="Email"><FiMail /></a>
            </div>
            <p className="text-body-sm lg:text-body-md text-text-muted mb-3 lg:mb-4">Subscribe for new drop alerts.</p>
            <div className="flex border-b border-border-light pb-2">
              <input
                type="email"
                placeholder="JOIN THE CIRCLE"
                className="flex-1 bg-transparent border-none text-label font-label tracking-widest uppercase py-2 text-text-primary outline-none placeholder:text-text-muted/50"
              />
              <button aria-label="Subscribe" className="text-brand-green text-xl min-h-[44px] min-w-[44px] flex items-center justify-center bg-none border-none cursor-pointer transition-transform active:translate-x-1">
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 lg:mt-20 pt-6 lg:pt-8 border-t border-border-light/30 flex flex-col lg:flex-row items-center lg:justify-between gap-4 text-center lg:text-left">
          <p className="text-label font-label tracking-widest text-text-muted/80">
            © 2026 CAPIST. ARCHITECTURAL PRECISION IN HEADWEAR.
          </p>
          <div className="flex gap-4 lg:gap-8 flex-wrap justify-center">
            <Link to="/about" className="text-label font-label tracking-widest text-text-muted transition-colors min-h-[44px] flex items-center active:text-text-primary lg:hover:text-text-primary">
              Privacy Policy
            </Link>
            <Link to="/about" className="text-label font-label tracking-widest text-text-muted transition-colors min-h-[44px] flex items-center active:text-text-primary lg:hover:text-text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
