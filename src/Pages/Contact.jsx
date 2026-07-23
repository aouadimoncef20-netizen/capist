import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import Button from '../Components/Button/Button';

const Contact = () => {
  return (
    <div className="pt-24 pb-[120px]">
      <div className="container-wide max-w-[900px]">
        <SectionTitle
          eyebrow="GET IN TOUCH"
          title="CONTACT US"
          align="center"
        />

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-gutter mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="flex gap-4 items-start">
              <FiMail size={20} className="text-brand-green mt-1 shrink-0" />
              <div>
                <h3 className="text-label uppercase mb-1">Email</h3>
                <p className="text-text-secondary">hello@capist.com</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <FiPhone size={20} className="text-brand-green mt-1 shrink-0" />
              <div>
                <h3 className="text-label uppercase mb-1">Phone</h3>
                <p className="text-text-secondary">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <FiMapPin size={20} className="text-brand-green mt-1 shrink-0" />
              <div>
                <h3 className="text-label uppercase mb-1">Location</h3>
                <p className="text-text-secondary">London, United Kingdom</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col">
              <label className="text-label uppercase text-text-muted mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="border-0 border-b border-border-light py-3 bg-transparent outline-none text-body-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-label uppercase text-text-muted mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="border-0 border-b border-border-light py-3 bg-transparent outline-none text-body-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-label uppercase text-text-muted mb-2">Message</label>
              <textarea
                placeholder="Your message"
                rows={4}
                className="border-0 border-b border-border-light py-3 bg-transparent outline-none text-body-md resize-y"
              />
            </div>
            <div className="pt-2">
              <Button variant="primary" size="md" type="submit">Send Message</Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
