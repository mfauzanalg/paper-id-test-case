/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './index.scss';

import Dialog from '@material-ui/core/Dialog';
import { CloseOutline } from 'react-ionicons';
import deleteIlustration from '../../assets/svgs/delete.svg';
import Button from '../Button';
import useAxios from '../../hooks/useAxios';
import { useSnackbar } from 'notistack';

const DeleteDialog = ({ isOpen, setIsOpen, name, instance, type, reload }) => {
  const { enqueueSnackbar } = useSnackbar();
  const url = `/${type}/${instance.id}`;

  const { response, loading, error, fetch } = useAxios({
    method: 'delete',
    url,
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  const onDelete = () => {
    fetch();
  };

  useEffect(() => {
    if (!loading && !error) {
      enqueueSnackbar('Success Delete', {
        variant: 'success',
      });
      reload();
      handleClose();
    }
  }, [loading]);

  return (
    <Dialog onClose={handleClose} open={isOpen}>
      <div className="dialog-delete-container">
        <CloseOutline
          onClick={handleClose}
          className="close-icon"
          color="#fff"
        />
        <div className="title">Delete {name}</div>
        <div className="subtitle">Are You Sure?</div>
        <img
          src={deleteIlustration}
          alt="delete-ilustration"
          className="svg"
        />
        <div className="button-container-delete">
          <div className="button">
            <Button
              title="Delete"
              color="empty"
              addClass="form-button delete"
              onClick={onDelete}
            />
          </div>
          <div className="button">
            <Button
              onClick={handleClose}
              title="Cancel"
              color="green"
              addClass="form-button"
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default DeleteDialog;
