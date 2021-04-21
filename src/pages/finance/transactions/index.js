/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './index.scss';
import SearchBar from '../../../components/SearcBar';
import Button from '../../../components/Button';
import Table from '../../../components/Table';
import Pagination from '../../../components/Pagination';
import Dialog from '../../../components/Dialog';
import DeleteDialog from '../../../components/DeleteDialog';
import { financeDialogView } from '../../../components/Dialog/FinanceDialog';
import useAxios from '../../../hooks/useAxios';
import moment from 'moment';

const Finances = () => {
  const tableConfig = [
    { title: 'Title', isSearchable: true, isSortable: true },
    { title: 'Description', isSearchable: false, isSortable: false },
    { title: 'Transaction Date', isSearchable: false, isSortable: true },
    { title: 'Amount', isSearchable: false, isSortable: true },
    { title: 'Account Name', isSearchable: true, isSortable: true },
    { title: 'Account Type', isSearchable: true, isSortable: true },
  ];

  const [instanceArray, setInstanceArray] = useState([]);
  const [isShowTable, setIsShowTable] = useState(false);
  const [numPage, setNumPage] = useState(0);
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

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [selectedInstance, setSelectedInstance] = useState({});

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
            moment(item.created_at).format('DD/MM/YYYY'),
            item.credit_amount,
            item.finance_account_name,
            item.finance_account_type,
          ];
        });
        setNumPage(Math.ceil(responseAll.count / query.perPage));
        setInstanceArray(newInstanceArray);
        setIsShowTable(true);
      }
    }
  }, [loadingPage, loadingAll]);

  useEffect(() => {
    dialogDataView = financeDialogView(selectedInstance);
  }, [selectedInstance]);

  const onCreateFinance = () => {
    setSelectedInstance({});
    setIsDialogOpen(true);
  };
  const onActionView = (instanceData) => {
    setSelectedInstance(instanceData);
    setIsViewDialogOpen(true);
  };
  const onActionEdit = (instanceData) => {
    setSelectedInstance(instanceData);
    setIsDialogOpen(true);
  };
  const onActionDelete = (instanceData) => {
    setSelectedInstance(instanceData);
    setIsDeleteDialogOpen(true);
  };

  let dialogDataView = financeDialogView(selectedInstance);

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
            className="dialog"
            selectedInstance={selectedInstance}
            setSelectedInstance={setSelectedInstance}
            setIsDialogOpen={setIsDialogOpen}
            reload={[fetchPage, fetchAll]}
            type="transaction"
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
              instance={selectedInstance}
              type="finances"
              reload={[fetchPage, fetchAll]}
            />
          </div>
          <Pagination count={numPage} />
        </div>
      )}
    </div>
  );
};

export default Finances;
