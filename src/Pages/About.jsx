import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../Components/SectionTitle/SectionTitle';

const About = () => {
  return (
    <div style={{ padding: '120px 0' }}>
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
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            textAlign: 'center',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
            fontSize: 'var(--fs-body-lg)',
          }}
        >
          <p style={{ marginBottom: '24px' }}>
            Founded in 2024, CAPIST was born from a singular vision: to redefine headwear as
            architectural art. Every cap is a study in precision—a meeting point of heritage
            craftsmanship and modern minimalism.
          </p>
          <p style={{ marginBottom: '24px' }}>
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
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--gutter)',
            marginTop: '80px',
          }}
        >
          {[
            { number: '2024', label: 'Founded' },
            { number: '50+', label: 'Premium Caps' },
            { number: '4', label: 'Collections' },
            { number: '100%', label: 'Quality Guaranteed' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                textAlign: 'center',
                padding: '40px 24px',
                border: '1px solid var(--border-light)',
              }}
            >
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--fs-headline-lg)',
                fontWeight: 'var(--fw-display)',
                color: 'var(--color-green)',
                marginBottom: '8px',
              }}>
                {stat.number}
              </p>
              <p style={{
                fontSize: 'var(--fs-label)',
                fontWeight: 'var(--fw-label)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}>
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
