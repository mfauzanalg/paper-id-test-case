import React from 'react';
import './index.scss';
import Pagination from '@material-ui/lab/Pagination';

const PaginationComponent = ({ count, query, setQuery }) => {
  const handleOnChange = (e, page) => {
    const newQuery = { ...query };
    newQuery['currentPage'] = page - 1;
    setQuery(newQuery);
  };

  return (
    <div className="pagination-component">
      <Pagination
        onChange={handleOnChange}
        count={count}
        siblingCount={1}
        showFirstButton
        showLastButton
      />
    </div>
  );
};

export default PaginationComponent;
