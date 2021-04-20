import React, { useState } from 'react';
import './index.scss';
import SearchBar from '../../../components/SearcBar';
import Button from '../../../components/Button';
import Table from '../../../components/Table';
import Pagination from '../../../components/Pagination';
import Dialog from '../../../components/Dialog';
import FormInput from '../../../components/FormInput';
import Select from '../../../components/Select';

const Finances = () => {
  const tableConfig = [
    { title: 'Transaction Date', isSearchable: true, isSortable: true },
    { title: 'Finance Finance', isSearchable: false, isSortable: false },
    { title: 'Finance Finance Number', isSearchable: true, isSortable: true },
    { title: 'Reference', isSearchable: false, isSortable: true },
    { title: 'Amount', isSearchable: false, isSortable: false },
  ];

  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const FinanceDialog = () => {
    return (
      <div className="Finance-dialog-content">
        <FormInput
          label="Finance Name"
          placeholder="Inout your finance name"
          type="text"
          inputClass="dialog"
        />
        <Select
          label="Finance Account"
          placeholder="select finance account"
          type="text"
          inputClass="dialog"
        />
        <FormInput
          label="Amount"
          placeholder="Amount"
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
              onClick={onCreateFinance}
            />
          </div>
          <div className="button">
            <Button
              title="Batal"
              color="empty"
              addClass="form-button"
              onClick={onCreateFinance}
            />
          </div>
        </div>
      </div>
    );
  };

  const onCreateFinance = () => {
    setIsCreateOpen(true);
  };

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
            content={FinanceDialog}
            className="dialog"
          />
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

export default Finances;
