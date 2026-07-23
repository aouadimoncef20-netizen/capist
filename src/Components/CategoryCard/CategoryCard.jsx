import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ image, eyebrow, title, linkText, linkTo }) => {
  return (
    <div className="relative overflow-hidden cursor-pointer aspect-[5/6] group">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <div className="absolute bottom-10 left-10 z-[2] text-white max-md:bottom-6 max-md:left-6">
        <span className="mb-2 block text-label font-label uppercase tracking-widest opacity-80">
          {eyebrow}
        </span>
        <h3 className="mb-4 font-display text-headline-md font-semibold max-md:text-headline-sm">{title}</h3>
        <Link
          to={linkTo}
          className="text-label font-label tracking-widest uppercase border-b border-white pb-1 transition-opacity group-hover:opacity-70"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
