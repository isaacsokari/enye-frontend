import React from 'react';

import './pagination.scss';

const Pagination = ({
  setCurrentPage,
  currentPage,
  isLastPage,
  isFirstPage,
  scrollToTop,
  className,
}) => {
  return (
    <div className={`pagination ${className ? className : ''}`}>
      <button
        onClick={() => {
          setCurrentPage(currentPage - 1);
          scrollToTop();
        }}
        disabled={isFirstPage}>
        Previous
      </button>
      <button
        onClick={() => {
          setCurrentPage(currentPage + 1);
          scrollToTop();
        }}
        disabled={isLastPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
