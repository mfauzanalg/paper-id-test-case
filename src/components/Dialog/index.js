import React from 'react';
import './index.scss';

import Dialog from '@material-ui/core/Dialog';

import { CloseOutline } from 'react-ionicons';

const DialogComponent = ({ isOpen, setIsOpen, title, content }) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={isOpen}
    >
      <div className="dialog-container">
        <CloseOutline
          onClick={handleClose}
          className="close-icon"
          color="#405568"
        />
        <div className="title">{title}</div>
        <div className="dialog-content"></div>
        {content}
      </div>
    </Dialog>
  );
};

export default DialogComponent;
