import React from 'react';
import './index.scss';
import SearchBar from '../../../components/SearcBar';
import Button from '../../../components/Button';
import Table from '../../../components/Table';
import Pagination from '../../../components/Pagination';

const Accounts = () => {
  const tableConfig = [
    { title: 'Transaction Date', isSearchable: true, isSortable: true },
    { title: 'Finance Account', isSearchable: false, isSortable: false },
    { title: 'Finance Account Number', isSearchable: true, isSortable: true },
    { title: 'Reference', isSearchable: false, isSortable: true },
    { title: 'Amount', isSearchable: false, isSortable: false },
  ];

  return (
    <div className="transactions-page">
      <div className="title">All Finance Transactions</div>
      <div className="tools-container">
        <SearchBar />
        <div className="button-container">
          <Button title="Create New Transaction" color="blue" />
        </div>
      </div>
      <div className="table-container">
        <Table
          config={tableConfig}
          data={['example', 'example', 'example', 'example', 'example']}
        />
        <Pagination />
      </div>
    </div>
  );
};

export default Accounts;
