import React from 'react';
import './index.scss';
import Pagination from '@material-ui/lab/Pagination';

const PaginationComponent = ({ count, query, setQuery }) => {
  const handleOnChange = (e, page) => {
    const newQuery = { ...query };
    newQuery['page'] = page - 1;
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
        page={query['page'] + 1}
      />
    </div>
  );
};

export default PaginationComponent;
