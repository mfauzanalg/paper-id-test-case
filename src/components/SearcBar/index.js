import React from 'react';
import './index.scss';
import { SearchOutline } from 'react-ionicons';

const SearchBar = () => {
  return (
    <div className="searcbar-component">
      <input placeholder="Search" />
      <SearchOutline className="search-icon" width="1.5rem" color="#AABBCA" />
    </div>
  );
};

export default SearchBar;
