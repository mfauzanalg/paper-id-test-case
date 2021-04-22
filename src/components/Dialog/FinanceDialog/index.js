/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import FormInput from '../../FormInput';
import Button from '../../Button';
import Select from '../../Select';
import './index.scss';
import moment from 'moment';
import useAxios from '../../../hooks/useAxios';
import { useSnackbar } from 'notistack';

export const FinanceDialog = ({
  instance,
  setInstance,
  setIsDialogOpen,
  reload,
  action,
}) => {
  const { enqueueSnackbar } = useSnackbar();

  const {
    response: responseCreate,
    loading: loadingCreate,
    error: errorCreate,
    fetch: fetchCreate,
  } = useAxios({
    method: 'post',
    url: '/finances',
    data: instance,
  });

  const {
    response: responseAll,
    loading: loadingAll,
    error: errorAll,
    fetch: fetchAll,
  } = useAxios({
    method: 'get',
    url: '/finance-accounts?sort_field=id&sort_type=-1&page=-1&per_page=-1',
  });

  const {
    response: responseUpdate,
    loading: loadingUpdate,
    error: errorUpdate,
    fetch: fetchUpdate,
  } = useAxios({
    method: 'put',
    url: `/finances/${instance.id}`,
    data: instance,
  });

  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    if (!loadingCreate && !errorCreate) {
      handleClose();
      reload[0]();
      reload[1]();
      enqueueSnackbar('Success Create New Transaction', {
        variant: 'success',
      });
    }

    if (!loadingAll && !errorAll) {
      setAccounts(responseAll.data);
    }

    if (!loadingUpdate && !errorUpdate) {
      handleClose();
      reload[0]();
      reload[1]();
      enqueueSnackbar('Success Update Transaction', {
        variant: 'success',
      });
    }
  }, [loadingCreate, loadingAll, loadingUpdate]);

  useEffect(() => {
    fetchAll();
  }, []);

  const onFormChange = (e, attribut) => {
    const newInstance = { ...instance };
    if (attribut === 'debit_amount') {
      newInstance[attribut] = parseInt(e.target.value);
      newInstance['credit_amount'] = parseInt(e.target.value);
    } else if (attribut === 'finance_account_id') {
      newInstance[attribut] = parseInt(e.target.value);
    } else {
      newInstance[attribut] = e.target.value;
    }
    setInstance(newInstance);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  const handleOnClick = () => {
    if (action === 'create') {
      fetchCreate();
    } else {
      fetchUpdate();
    }
  };

  return (
    <div className="finance-dialog-content">
      <FormInput
        label="Finance Name"
        placeholder="Inout your finance name"
        type="text"
        inputClass="dialog"
        value={instance['title']}
        onChange={(e) => onFormChange(e, 'title')}
      />
      <Select
        label="Finance Account"
        value={instance['finance_account_id']}
        onChange={(e) => onFormChange(e, 'finance_account_id')}
        options={accounts}
      />
      <FormInput
        label="Amount"
        placeholder="Amount"
        type="number"
        inputClass="dialog"
        value={instance['debit_amount']}
        onChange={(e) => onFormChange(e, 'debit_amount')}
      />
      <FormInput
        label="Description"
        placeholder="Description"
        type="text"
        inputClass="dialog"
        value={instance['description']}
        onChange={(e) => onFormChange(e, 'description')}
      />
      <div className="button-container">
        <div className="button">
          <Button
            onClick={handleOnClick}
            title="Simpan"
            color="green"
            addClass="form-button"
          />
        </div>
        <div className="button">
          <Button
            onClick={handleClose}
            title="Batal"
            color="empty"
            addClass="form-button"
          />
        </div>
      </div>
    </div>
  );
};

export const financeDialogView = (instance) => {
  return (
    <div className="finance-dialog-content-view">
      <div className="finance">
        <label>Title</label>
        <div className="info">{instance.title}</div>
        <label>Description</label>
        <div className="info">{instance.description}</div>
        <label>Transaction Date</label>
        <div className="info">
          {moment(instance.created_at).format('DD MMMM YYYY')}
        </div>
        <label>Amount</label>
        <div className="info">{instance.debit_amount}</div>
        <label>Finance Account name</label>
        <div className="info">{instance.finance_account_name}</div>
        <label>Finance Account Type</label>
        <div className="info">{instance.finance_account_type}</div>
      </div>
    </div>
  );
};
