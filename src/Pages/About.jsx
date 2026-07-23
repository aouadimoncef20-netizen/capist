import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../Components/SectionTitle/SectionTitle';

const About = () => {
  return (
    <div className="py-24 lg:py-[120px]">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            eyebrow="Our Story"
            title="Architectural Precision in Headwear"
            align="center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[720px] mx-auto text-center leading-[1.8] text-text-secondary text-body-lg"
        >
          <p className="mb-6">
            Founded in 2024, CAPIST was born from a singular vision: to redefine headwear as
            architectural art. Every cap is a study in precision—a meeting point of heritage
            craftsmanship and modern minimalism.
          </p>
          <p className="mb-6">
            Our design philosophy is rooted in the "less but better" approach. We believe in
            intentional whitespace, high-contrast typography, and the quiet power of premium
            materials. Each piece is crafted with the discipline of an architect and the eye of an editor.
          </p>
          <p>
            From the atelier to your wardrobe, CAPIST stands for uncompromising quality.
            We source the finest materials—cashmere, brushed wool, premium cotton twill—and
            work with master artisans who share our obsession with detail.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-gutter mt-20"
        >
          {[
            { number: '2024', label: 'Founded' },
            { number: '50+', label: 'Premium Caps' },
            { number: '4', label: 'Collections' },
            { number: '100%', label: 'Quality Guaranteed' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center px-6 py-10 border border-border-light"
            >
              <p className="font-display text-headline-lg text-brand-green mb-2">
                {stat.number}
              </p>
              <p className="text-label uppercase text-text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
