import React from 'react';

import './pagination.scss';

const Pagination = ({
  setCurrentPage,
  currentPage,
  isLastPage,
  isFirstPage,
  scrollToTop,
}) => {
  return (
    <div className="pagination">
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
