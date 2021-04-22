import React from 'react';
import './index.scss';
import { SearchOutline } from 'react-ionicons';

const SearchBar = ({ onChange }) => {
  return (
    <div className="searcbar-component">
      <input onChange={onChange} placeholder="Search" />
      <SearchOutline className="search-icon" width="1.5rem" color="#AABBCA" />
    </div>
  );
};

export default SearchBar;
