import React from 'react';
import './index.scss';
import SearchBar from '../../../components/SearcBar';
import Button from '../../../components/Button';

const Accounts = () => {
  return (
    <div className="accounts-page">
      <div className="title">All Finance Account</div>
      <div className="tools-container">
        <SearchBar />
        <div className="button-container">
          <Button title="Create New Account" color="blue" />
        </div>
      </div>
    </div>
  );
};

export default Accounts;
