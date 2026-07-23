import React from 'react';
import { FiStar } from 'react-icons/fi';

const ReviewCard = ({ review }) => {
  return (
    <div className="p-6 border border-border-light">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-surface-tertiary flex items-center justify-center text-label font-label text-text-muted">
          {review.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="text-body-sm font-semibold text-text-primary">{review.name}</p>
          <p className="text-label text-text-muted">{review.date}</p>
        </div>
      </div>
      <div className="flex gap-0.5 mb-3 text-[#f5a623]">
        {Array.from({ length: 5 }).map((_, i) => (
          <FiStar
            key={i}
            size={14}
            fill={i < review.rating ? '#f5a623' : 'none'}
            color={i < review.rating ? '#f5a623' : 'var(--border-medium)'}
          />
        ))}
      </div>
      <p className="text-body-sm text-text-secondary leading-relaxed">{review.text}</p>
    </div>
  );
};

export default ReviewCard;
