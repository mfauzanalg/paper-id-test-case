import React, { useState } from 'react';
import './index.scss';
import SearchBar from '../../../components/SearcBar';
import Button from '../../../components/Button';
import Table from '../../../components/Table';
import Pagination from '../../../components/Pagination';
import Dialog from '../../../components/Dialog';
import DeleteDialog from '../../../components/DeleteDialog';
import { financeDialog } from '../../../components/Dialog/FinanceDialog';
import { financeDialogView } from '../../../components/Dialog/FinanceDialog';

const Finances = () => {
  const tableConfig = [
    { title: 'Transaction Date', isSearchable: true, isSortable: true },
    { title: 'Finance Finance', isSearchable: false, isSortable: false },
    { title: 'Finance Finance Number', isSearchable: true, isSortable: true },
    { title: 'Reference', isSearchable: false, isSortable: true },
    { title: 'Amount', isSearchable: false, isSortable: false },
  ];

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);

  const onCreateFinance = () => {
    setIsDialogOpen(true);
  };
  const onActionView = () => {
    setIsViewDialogOpen(true);
  };
  const onActionEdit = () => {
    setIsDialogOpen(true);
  };
  const onActionDelete = () => {
    setIsDeleteDialogOpen(true);
  };

  const dialogData = financeDialog();
  const dialogDataView = financeDialogView();

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
            isOpen={isDialogOpen}
            setIsOpen={setIsDialogOpen}
            title="Create New Account"
            content={dialogData}
            className="dialog"
          />
          <Dialog
            isOpen={isViewDialogOpen}
            setIsOpen={setIsViewDialogOpen}
            title="Viewing"
            content={dialogDataView}
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
        <DeleteDialog
          isOpen={isDeleteDialogOpen}
          setIsOpen={setIsDeleteDialogOpen}
          name="Example"
          className="dialog"
        />
        <Pagination />
      </div>
    </div>
  );
};

export default Finances;
