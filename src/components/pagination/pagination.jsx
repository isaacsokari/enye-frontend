import React from 'react';

import './pagination.scss';

const Pagination = ({
  setCurrentPage,
  currentPage,
  isLastPage,
  isFirstPage,
}) => {
  return (
    <div className="pagination">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={isFirstPage}>
        Previous
      </button>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={isLastPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
