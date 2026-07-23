import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './SizeGuide.module.css';

const SIZES = [
  { size: 'One Size', head: '56–60 cm', fit: 'Standard' },
  { size: 'S/M', head: '54–57 cm', fit: 'Slim' },
  { size: 'M/L', head: '57–60 cm', fit: 'Regular' },
  { size: 'L/XL', head: '60–63 cm', fit: 'Relaxed' },
];

const SizeGuide = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={styles.trigger} onClick={() => setIsOpen(true)}>
        Size Guide
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className={styles.guideContent}>
          <h2>Size Guide</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Size</th>
                <th>Head Circumference</th>
                <th>Fit</th>
              </tr>
            </thead>
            <tbody>
              {SIZES.map((s) => (
                <tr key={s.size}>
                  <td>{s.size}</td>
                  <td>{s.head}</td>
                  <td>{s.fit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal>
    </>
  );
};

export default SizeGuide;
