/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './index.scss';
import SearchBar from '../../../components/SearcBar';
import Button from '../../../components/Button';
import Table from '../../../components/Table';
import Pagination from '../../../components/Pagination';
import Dialog from '../../../components/Dialog';
import DeleteDialog from '../../../components/DeleteDialog';
import { accountDialogView } from '../../../components/Dialog/AccountDialog';
import useAxios from '../../../hooks/useAxios';
import qs from 'query-string';

const Accounts = () => {
  const [sortState, setSortState] = useState({ type: 0 });
  const tableConfig = [
    { title: 'Account Name', isSearchable: false, isSortable: false },
    { title: 'Description', isSearchable: false, isSortable: false },
    {
      title: 'Account Type',
      isSearchable: true,
      isSortable: true,
      stateName: 'type',
      state: sortState['type'],
      setSortState,
    },
  ];

  const [instanceArray, setInstanceArray] = useState([]);
  const [isShowTable, setIsShowTable] = useState(false);
  const [selectedInstance, setSelectedInstance] = useState({});
  const [numPage, setNumPage] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [query, setQuery] = useState({
    per_page: 5,
    page: 0,
    name: '',
    sort_type: -1,
    sort_field: 'created_at',
  });

  const createQueryString = (query) => {
    const newQuery = `/finance-accounts?${qs.stringify(query)}`;
    return newQuery;
  };

  const createQueryStringTotal = (query) => {
    const { sort_field, sort_type, page, per_page, ...removedParam } = query;
    const newQuery = `/finance-accounts?sort_field=id&sort_type=1&page=-1&per_page=-1&${qs.stringify(
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

  useEffect(() => {
    fetchAll();
    fetchPage();
  }, []);

  useEffect(() => {
    if (!loadingPage && !loadingAll) {
      if (!errorAll && !errorPage) {
        const newInstanceArray = responsePage.data.map((item, index) => {
          return [item.name, item.Description, item.type];
        });

        setInstanceArray(newInstanceArray);
        setNumPage(Math.ceil(responseAll.count / query.per_page));
        setIsShowTable(true);
      }
    }
  }, [loadingPage, loadingAll]);

  useEffect(() => {
    dialogDataView = accountDialogView(selectedInstance);
  }, [selectedInstance]);

  useEffect(() => {
    fetchAll();
    fetchPage();
  }, [query]);

  const onCreateAccount = () => {
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

  let dialogDataView = accountDialogView(selectedInstance);

  const onSearchBarEnter = (e) => {
    const newQuery = { ...query };
    newQuery['name'] = e.target.value;
    newQuery['page'] = 0;
    setQuery(newQuery);
  };

  const onClickHeader = (stateName, state) => {
    const newState = {};
    if (state === 0) {
      newState[stateName] = -1;
    } else if (state === -1) {
      newState[stateName] = 1;
    } else {
      newState[stateName] = 0;
    }
    setSortState(newState);

    const newQuery = { ...query };
    if (newState[stateName] !== 0) {
      newQuery['sort_field'] = Object.keys(newState)[0];
      newQuery['sort_type'] = newState[stateName];
    } else {
      newQuery['sort_field'] = 'created_at';
      newQuery['sort_type'] = -1;
    }
    setQuery(newQuery);
  };

  return (
    <div className="accounts-page">
      <div className="title">All Finance Account</div>
      <div className="tools-container">
        <SearchBar value={query} onEnter={onSearchBarEnter} />
        <div className="button-container">
          <Button
            title="Create New Account"
            color="blue"
            onClick={onCreateAccount}
          />
          <Dialog
            isOpen={isDialogOpen}
            setIsOpen={setIsDialogOpen}
            className="dialog"
            selectedInstance={selectedInstance}
            setSelectedInstance={setSelectedInstance}
            setIsDialogOpen={setIsDialogOpen}
            reload={[fetchPage, fetchAll]}
            type="account"
          />
          <Dialog
            isOpen={isViewDialogOpen}
            setIsOpen={setIsViewDialogOpen}
            titleView="Viewing"
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
              onClickHeader={onClickHeader}
            />
            <DeleteDialog
              isOpen={isDeleteDialogOpen}
              setIsOpen={setIsDeleteDialogOpen}
              name="Example"
              className="dialog"
              instance={selectedInstance}
              type="finance-accounts"
              reload={[fetchPage, fetchAll]}
            />
          </div>
          <Pagination count={numPage} query={query} setQuery={setQuery} />
        </div>
      )}
    </div>
  );
};

export default Accounts;
