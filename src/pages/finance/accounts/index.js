import React, { useState } from 'react';
import './index.scss';
import SearchBar from '../../../components/SearcBar';
import Button from '../../../components/Button';
import Table from '../../../components/Table';
import Pagination from '../../../components/Pagination';
import Dialog from '../../../components/Dialog';
import DeleteDialog from '../../../components/DeleteDialog';
import { accountDialog } from '../../../components/Dialog/AccountDialog';
import { accountDialogView } from '../../../components/Dialog/AccountDialog';

const Accounts = () => {
  const tableConfig = [
    { title: 'Account Name', isSearchable: true, isSortable: false },
    { title: 'Description', isSearchable: false, isSortable: false },
    { title: 'Account Type', isSearchable: false, isSortable: false },
  ];

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);

  const onCreateAccount = () => {
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

  const dialogData = accountDialog();
  const dialogDataView = accountDialogView();

  return (
    <div className="accounts-page">
      <div className="title">All Finance Account</div>
      <div className="tools-container">
        <SearchBar />
        <div className="button-container">
          <Button
            title="Create New Account"
            color="blue"
            onClick={onCreateAccount}
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
            text: ['example', 'example', 'example'],
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

export default Accounts;
