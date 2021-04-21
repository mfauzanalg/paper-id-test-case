import React from 'react';
import './index.scss';
import Pagination from '@material-ui/lab/Pagination';

const PaginationComponent = ({ count }) => {
  return (
    <div className="pagination-component">
      <Pagination count={count} showFirstButton showLastButton />
    </div>
  );
};

export default PaginationComponent;
