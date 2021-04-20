import React from 'react';
import './index.scss';
import Pagination from '@material-ui/lab/Pagination';

const PaginationComponent = () => {
  return (
    <div className="pagination-component">
      <Pagination count={4} showFirstButton showLastButton />
    </div>
  );
};

export default PaginationComponent;
