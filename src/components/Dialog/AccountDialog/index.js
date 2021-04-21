/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import FormInput from '../../FormInput';
import Button from '../../Button';
import './index.scss';
import moment from 'moment';
import useAxios from '../../../hooks/useAxios';
import { useSnackbar } from 'notistack';

export const AccountDialog = ({
  instance,
  setInstance,
  setIsDialogOpen,
  reload,
}) => {
  const { enqueueSnackbar } = useSnackbar();

  const {
    response: responseCreate,
    loading: loadingCreate,
    error: errorCreate,
    fetch: fetchCreate,
  } = useAxios({
    method: 'post',
    url: '/finance-accounts',
    data: instance,
  });

  useEffect(() => {
    if (!loadingCreate && !errorCreate) {
      handleClose();
      reload[0]();
      reload[1]();
      enqueueSnackbar('Success Create New Account', {
        variant: 'success',
      });
    }
  }, [loadingCreate]);

  const onFormChange = (e, attribut) => {
    const newInstance = { ...instance };
    newInstance[attribut] = e.target.value;
    setInstance(newInstance);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  const handleOnClick = () => {
    fetchCreate();
    console.log(instance);
  };

  return (
    <div className="account-dialog-content">
      <FormInput
        label="Account Name"
        placeholder="e.g. cash, bank, etc"
        type="text"
        inputClass="dialog"
        value={instance['name']}
        onChange={(e) => onFormChange(e, 'name')}
      />
      <FormInput
        label="Type"
        placeholder="e.g. cash, bank, etc"
        type="text"
        inputClass="dialog"
        value={instance['type']}
        onChange={(e) => onFormChange(e, 'type')}
      />
      <FormInput
        label="Description"
        placeholder="Description"
        type="text"
        inputClass="dialog"
        value={instance['Description']}
        onChange={(e) => onFormChange(e, 'Description')}
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

export const accountDialogView = (instance) => {
  return (
    <div className="account-dialog-content-view">
      <div className="account">
        <label>Account Name</label>
        <div className="user-info">{instance.name}</div>
        <label>Description</label>
        <div className="user-info">{instance.Description}</div>
        <label>Type</label>
        <div className="user-info">{instance.type}</div>
        <label>Created At</label>
        <div className="user-info">
          {moment(instance.created_at).format('DD MMMM YYYY')}
        </div>
      </div>
    </div>
  );
};
