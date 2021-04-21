/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './index.scss';
import SearchBar from '../../../components/SearcBar';
import Button from '../../../components/Button';
import Table from '../../../components/Table';
import Pagination from '../../../components/Pagination';
import Dialog from '../../../components/Dialog';
import DeleteDialog from '../../../components/DeleteDialog';
import { accountDialog } from '../../../components/Dialog/AccountDialog';
import { accountDialogView } from '../../../components/Dialog/AccountDialog';
import useAxios from '../../../hooks/useAxios';

const Accounts = () => {
  const tableConfig = [
    { title: 'Account Name', isSearchable: true, isSortable: false },
    { title: 'Description', isSearchable: false, isSortable: false },
    { title: 'Account Type', isSearchable: false, isSortable: false },
  ];

  const [instanceArray, setInstanceArray] = useState([]);
  const [isShowTable, setIsShowTable] = useState(false);
  const [query, setQuery] = useState({
    perPage: 7,
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
    url: '/finance-accounts?sort_field=id&sort_type=1&page=-1&per_page=-1',
  });

  const {
    response: responsePage,
    loading: loadingPage,
    error: errorPage,
    fetch: fetchPage,
  } = useAxios({
    method: 'get',
    url:
      '/finance-accounts?name=&sort_field=created_at&sort_type=1&page=0&per_page=7',
  });

  useEffect(() => {
    fetchAll();
    fetchPage();
  }, []);

  useEffect(() => {
    if (!loadingPage && !loadingAll) {
      if (!errorAll & !errorPage) {
        const newInstanceArray = responsePage.data.map((item, index) => {
          return [item.name, item.Description, item.type];
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

  const onCreateAccount = () => {
    setIsDialogOpen(true);
  };
  const onActionView = (instanceData) => {
    setSelectedInstance(instanceData);
    setIsViewDialogOpen(true);
  };
  const onActionEdit = (instanceData) => {
    setIsDialogOpen(true);
  };
  const onActionDelete = (instanceData) => {
    setIsDeleteDialogOpen(true);
  };

  let dialogData = accountDialog(selectedInstance);
  let dialogDataView = accountDialogView(selectedInstance);

  useEffect(() => {
    dialogData = accountDialog(selectedInstance);
    dialogDataView = accountDialogView(selectedInstance);
  }, [selectedInstance]);

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
      {isShowTable && (
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
          <Pagination count={Math.ceil(responseAll.count / query.perPage)} />
        </div>
      )}
    </div>
  );
};

export default Accounts;
