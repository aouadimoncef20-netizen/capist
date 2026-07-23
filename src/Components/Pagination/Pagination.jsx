import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPages = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  const btnClass = 'flex items-center gap-2 text-label font-label tracking-widest uppercase text-text-primary transition-colors min-h-[44px] px-3 py-2 active:text-brand-green lg:hover:text-brand-green disabled:opacity-30 disabled:cursor-default disabled:text-text-muted';

  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4 pt-8 lg:pt-12 border-t border-border-light mt-16 lg:mt-24">
      <button
        className={btnClass}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <FiChevronLeft />
        <span>Previous</span>
      </button>

      <div className="flex items-center gap-1.5 lg:gap-2">
        {getPages().map((page, idx) =>
          page === '...' ? (
            <span key={`ellipsis-${idx}`} className="text-label text-text-muted px-1">
              ...
            </span>
          ) : (
            <button
              key={page}
              className={`w-9 h-9 lg:w-8 lg:h-8 flex items-center justify-center text-label font-label tracking-widest uppercase text-text-primary transition-colors active:text-brand-green lg:hover:text-brand-green ${
                page === currentPage ? 'bg-brand-green text-white' : ''
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        className={btnClass}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <span>Next</span>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
