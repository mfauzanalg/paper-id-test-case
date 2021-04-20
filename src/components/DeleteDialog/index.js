import React from 'react';
import './index.scss';

import Dialog from '@material-ui/core/Dialog';
import { CloseOutline } from 'react-ionicons';
import deleteIlustration from '../../assets/svgs/delete.svg';
import Button from '../Button';

const DeleteDialog = ({ isOpen, setIsOpen, name }) => {
  const handleClose = () => {
    setIsOpen(false);
  };

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
            />
          </div>
          <div className="button">
            <Button title="Cancel" color="green" addClass="form-button" />
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default DeleteDialog;
