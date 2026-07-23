import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../Components/Button/Button';

const NotFound = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '70vh',
      textAlign: 'center',
      padding: '40px 20px',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '120px',
          fontWeight: 'var(--fw-display)',
          color: 'var(--color-green)',
          lineHeight: 1,
          marginBottom: '16px',
        }}>
          404
        </p>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--fs-headline-md)',
          marginBottom: '16px',
        }}>
          Page Not Found
        </h1>
        <p style={{
          fontSize: 'var(--fs-body-lg)',
          color: 'var(--text-secondary)',
          marginBottom: '40px',
          maxWidth: '480px',
        }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="primary" size="lg">
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
