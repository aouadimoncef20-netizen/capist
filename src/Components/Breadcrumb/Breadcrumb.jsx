import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={item.label}>
            {isLast ? (
              <span className="text-label font-bold tracking-widest uppercase text-text-primary" aria-current="page">
                {item.label}
              </span>
            ) : (
              <>
                <Link to={item.path} className="text-label font-label tracking-widest uppercase text-text-muted/60 hover:text-brand-green transition-colors no-underline">
                  {item.label}
                </Link>
                <span className="text-sm text-text-muted/40 flex items-center" aria-hidden="true">
                  <FiChevronRight />
                </span>
              </>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
