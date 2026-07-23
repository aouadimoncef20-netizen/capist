import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FiMaximize2 } from 'react-icons/fi';

const GalleryCard = ({ image, alt, onClick, className = '' }) => {
  return (
    <div
      className={`relative overflow-hidden cursor-pointer group ${className}`}
      onClick={onClick}
    >
      <LazyLoadImage
        src={image}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        effect="opacity"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <FiMaximize2 className="text-white text-3xl" />
      </div>
    </div>
  );
};

export default GalleryCard;
