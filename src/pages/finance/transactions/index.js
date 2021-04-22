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
import qs from 'query-string';

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
    per_page: 5,
    page: 0,
    name: '',
    sort_type: -1,
    sort_field: 'created_at',
  });

  const createQueryString = (query) => {
    const newQuery = `/finances?${qs.stringify(query)}`;
    return newQuery;
  };

  const createQueryStringTotal = (query) => {
    const { sort_field, sort_type, page, per_page, ...removedParam } = query;
    const newQuery = `/finances?sort_field=id&sort_type=1&page=-1&per_page=-1&${qs.stringify(
      removedParam
    )}`;
    return newQuery;
  };

  const {
    response: responseAll,
    loading: loadingAll,
    error: errorAll,
    fetch: fetchAll,
  } = useAxios({
    method: 'get',
    url: createQueryStringTotal(query),
  });

  const {
    response: responsePage,
    loading: loadingPage,
    error: errorPage,
    fetch: fetchPage,
  } = useAxios({
    method: 'get',
    url: createQueryString(query),
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
        setNumPage(Math.ceil(responseAll.count / query.per_page));
        setInstanceArray(newInstanceArray);
        setIsShowTable(true);
      }
    }
  }, [loadingPage, loadingAll]);

  useEffect(() => {
    dialogDataView = financeDialogView(selectedInstance);
  }, [selectedInstance]);

  useEffect(() => {
    fetchAll();
    fetchPage();
  }, [query]);

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

  const onSearchBarEnter = (e) => {
    const newQuery = { ...query };
    newQuery['name'] = e.target.value;
    newQuery['page'] = 0;
    setQuery(newQuery);
  };

  return (
    <div className="transactions-page">
      <div className="title">All Finance Transactions</div>
      <div className="tools-container">
        <SearchBar value={query} onEnter={onSearchBarEnter} />
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
          <Pagination count={numPage} query={query} setQuery={setQuery} />
        </div>
      )}
    </div>
  );
};

export default Finances;
