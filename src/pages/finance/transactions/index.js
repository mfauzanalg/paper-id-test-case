import React, { useState } from 'react';
import './index.scss';
import SearchBar from '../../../components/SearcBar';
import Button from '../../../components/Button';
import Table from '../../../components/Table';
import Pagination from '../../../components/Pagination';
import Dialog from '../../../components/Dialog';
import financeDialog from '../../../components/Dialog/FinanceDialog';

const Finances = () => {
  const tableConfig = [
    { title: 'Transaction Date', isSearchable: true, isSortable: true },
    { title: 'Finance Finance', isSearchable: false, isSortable: false },
    { title: 'Finance Finance Number', isSearchable: true, isSortable: true },
    { title: 'Reference', isSearchable: false, isSortable: true },
    { title: 'Amount', isSearchable: false, isSortable: false },
  ];

  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const onCreateFinance = () => {
    setIsCreateOpen(true);
  };

  const onActionView = () => {
    setIsCreateOpen(true);
  };
  const onActionEdit = () => {
    setIsCreateOpen(true);
  };
  const onActionDelete = () => {
    setIsCreateOpen(true);
  };

  const dialogData = financeDialog();

  return (
    <div className="transactions-page">
      <div className="title">All Finance Transactions</div>
      <div className="tools-container">
        <SearchBar />
        <div className="button-container">
          <Button
            title="Create New Transaction"
            color="blue"
            onClick={onCreateFinance}
          />
          <Dialog
            isOpen={isCreateOpen}
            setIsOpen={setIsCreateOpen}
            title="Create New Finance"
            content={dialogData}
            className="dialog"
          />
        </div>
      </div>
      <div className="table-container">
        <Table
          config={tableConfig}
          data={{
            text: ['example', 'example', 'example', 'example', 'example'],
            action: { onActionView, onActionEdit, onActionDelete },
          }}
        />
        <Pagination />
      </div>
    </div>
  );
};

export default Finances;
