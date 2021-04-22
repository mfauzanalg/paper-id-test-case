import React from 'react';
import './index.scss';
import { SearchOutline } from 'react-ionicons';

const SearchBar = ({ onEnter }) => {
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onEnter(e);
    }
  };

  return (
    <div className="searcbar-component">
      <input onKeyPress={onKeyPress} placeholder="Search" />
      <SearchOutline className="search-icon" width="1.5rem" color="#AABBCA" />
    </div>
  );
};

export default SearchBar;
