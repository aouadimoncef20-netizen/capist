import React, { useState } from 'react';
import Modal from '../Modal/Modal';

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
      <button className="text-label font-label tracking-widest uppercase underline underline-offset-4 text-text-muted hover:text-brand-green bg-none border-none cursor-pointer" onClick={() => setIsOpen(true)}>
        Size Guide
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div>
          <h2 className="font-display text-headline-sm mb-6">Size Guide</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 border-b border-border-light text-label text-text-muted uppercase tracking-widest">Size</th>
                <th className="text-left p-3 border-b border-border-light text-label text-text-muted uppercase tracking-widest">Head Circumference</th>
                <th className="text-left p-3 border-b border-border-light text-label text-text-muted uppercase tracking-widest">Fit</th>
              </tr>
            </thead>
            <tbody>
              {SIZES.map((s) => (
                <tr key={s.size}>
                  <td className="text-left p-3 border-b border-border-light text-body-sm">{s.size}</td>
                  <td className="text-left p-3 border-b border-border-light text-body-sm">{s.head}</td>
                  <td className="text-left p-3 border-b border-border-light text-body-sm">{s.fit}</td>
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
