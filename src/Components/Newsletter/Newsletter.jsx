import React from 'react';

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
  };

  return (
    <section className="py-12 lg:py-20 border-t border-b border-border-light">
      <div className="max-w-container mx-auto px-margin-mobile lg:px-margin-desktop text-center">
        <h2 className="font-display text-headline-md font-semibold text-text-primary mb-1.5 lg:mb-2">Join the Circle</h2>
        <p className="text-label font-label tracking-[0.2em] uppercase text-brand-green mb-6 lg:mb-8">@CAPIST_DESIGN</p>
        <form className="flex flex-col lg:flex-row gap-2 max-w-[480px] mx-auto" onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email" required className="flex-1 border border-border-light p-3.5 lg:p-[14px_20px] text-body-md text-text-primary bg-transparent outline-none transition-colors focus:border-brand-green" />
          <button type="submit" className="p-3.5 lg:px-7 lg:py-3.5 bg-brand-black text-white text-label font-label tracking-widest uppercase border-none cursor-pointer transition-colors min-h-[44px] active:bg-brand-green lg:hover:bg-brand-green">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
