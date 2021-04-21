/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './index.scss';
import SearchBar from '../../../components/SearcBar';
import Button from '../../../components/Button';
import Table from '../../../components/Table';
import Pagination from '../../../components/Pagination';
import Dialog from '../../../components/Dialog';
import DeleteDialog from '../../../components/DeleteDialog';
import { financeDialog } from '../../../components/Dialog/FinanceDialog';
import { financeDialogView } from '../../../components/Dialog/FinanceDialog';
import useAxios from '../../../hooks/useAxios';
import moment from 'moment';

const Finances = () => {
  const tableConfig = [
    { title: 'Title', isSearchable: true, isSortable: true },
    { title: 'Description', isSearchable: false, isSortable: false },
    { title: 'Transaction Date', isSearchable: false, isSortable: true },
    { title: 'Amount', isSearchable: false, isSortable: true },
    { title: 'Finance Account Name', isSearchable: true, isSortable: true },
    { title: 'Finance Account Type', isSearchable: true, isSortable: true },
  ];

  const [instanceArray, setInstanceArray] = useState([]);
  const [isShowTable, setIsShowTable] = useState(false);
  const [query, setQuery] = useState({
    perPage: 5,
    currentPage: 0,
    name: '',
  });

  const {
    response: responseAll,
    loading: loadingAll,
    error: errorAll,
    fetch: fetchAll,
  } = useAxios({
    method: 'get',
    url: '/finances?sort_field=created_at&sort_type=1&page=-1&per_page=-1',
  });

  const {
    response: responsePage,
    loading: loadingPage,
    error: errorPage,
    fetch: fetchPage,
  } = useAxios({
    method: 'get',
    url:
      '/finances?name=&sort_field=created_at&sort_type=-1&page=0&per_page=5',
  });

  useEffect(() => {
    fetchAll();
    fetchPage();
  }, []);

  useEffect(() => {
    if (!loadingPage && !loadingAll) {
      if (!errorAll && !errorPage) {
        const newInstanceArray = responsePage.data.map((item, index) => {
          return [
            item.title,
            item.description,
            moment(item.created_at).format('DD MMMM YYYY'),
            item.credit_amount,
            item.finance_account_name,
            item.finance_account_type,
          ];
        });

        setInstanceArray(newInstanceArray);
        setIsShowTable(true);
      }
    }
  }, [loadingPage, loadingAll]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [selectedInstance, setSelectedInstance] = useState({});

  const onCreateFinance = () => {
    setIsDialogOpen(true);
  };
  const onActionView = (instanceData) => {
    console.log(instanceData);
    setSelectedInstance(instanceData);
    setIsViewDialogOpen(true);
  };
  const onActionEdit = (instanceData) => {
    setIsDialogOpen(true);
  };
  const onActionDelete = (instanceData) => {
    setIsDeleteDialogOpen(true);
  };

  let dialogData = financeDialog(selectedInstance);
  let dialogDataView = financeDialogView(selectedInstance);

  useEffect(() => {
    dialogData = financeDialog(selectedInstance);
    dialogDataView = financeDialogView(selectedInstance);
  }, [selectedInstance]);

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
      {isShowTable && (
        <div>
          <div className="table-container">
            <Table
              config={tableConfig}
              completeData={responsePage.data}
              data={{
                text: { instanceArray },
                action: { onActionView, onActionEdit, onActionDelete },
              }}
            />
            <DeleteDialog
              isOpen={isDeleteDialogOpen}
              setIsOpen={setIsDeleteDialogOpen}
              name="Example"
              className="dialog"
            />
          </div>
          <Pagination count={Math.ceil(responseAll.count / query.perPage)} />
        </div>
      )}
    </div>
  );
};

export default Finances;
