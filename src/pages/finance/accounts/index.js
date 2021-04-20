import React, { useState } from 'react';
import './index.scss';
import SearchBar from '../../../components/SearcBar';
import Button from '../../../components/Button';
import Table from '../../../components/Table';
import Pagination from '../../../components/Pagination';
import Dialog from '../../../components/Dialog';
import FormInput from '../../../components/FormInput';

const Accounts = () => {
  const tableConfig = [
    { title: 'Account Name', isSearchable: true, isSortable: false },
    { title: 'Description', isSearchable: false, isSortable: false },
    { title: 'Account Type', isSearchable: false, isSortable: false },
  ];

  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const onCreateAccount = () => {
    setIsCreateOpen(true);
  };

  const accountDialog = () => {
    return (
      <div className="account-dialog-content">
        <FormInput
          label="Account Name"
          placeholder="e.g. cash, bank, etc"
          type="text"
          inputClass="dialog"
        />
        <FormInput
          label="Type"
          placeholder="e.g. cash, bank, etc"
          type="text"
          inputClass="dialog"
        />
        <FormInput
          label="Description"
          placeholder="Description"
          type="text"
          inputClass="dialog"
        />
        <div className="button-container">
          <div className="button">
            <Button
              title="Simpan"
              color="green"
              addClass="form-button"
              onClick={onCreateAccount}
            />
          </div>
          <div className="button">
            <Button
              title="Batal"
              color="empty"
              addClass="form-button"
              onClick={onCreateAccount}
            />
          </div>
        </div>
      </div>
    );
  };

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
            isOpen={isCreateOpen}
            setIsOpen={setIsCreateOpen}
            title="Create New Account"
            content={accountDialog}
            className="dialog"
          />
        </div>
      </div>
      <div className="table-container">
        <Table config={tableConfig} data={['example', 'example', 'example']} />
        <Pagination />
      </div>
    </div>
  );
};

export default Accounts;
