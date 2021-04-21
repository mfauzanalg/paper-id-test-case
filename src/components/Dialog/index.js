import React from 'react';
import './index.scss';

import Dialog from '@material-ui/core/Dialog';
import { CloseOutline } from 'react-ionicons';
import { AccountDialog } from './AccountDialog';
import { FinanceDialog } from './FinanceDialog';

const DialogComponent = ({
  isOpen,
  setIsOpen,
  content,
  selectedInstance,
  setSelectedInstance,
  setIsDialogOpen,
  reload,
  type,
  titleView,
}) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  let title;
  if (type === 'account') {
    if (selectedInstance?.created_at) {
      title = 'Edit Account';
    } else title = 'Create Account';
  } else {
    if (selectedInstance?.created_at) {
      title = 'Edit Finance Transaction';
    } else title = 'Create Finance Transaction';
  }

  const action = selectedInstance?.created_at ? 'edit' : 'create';

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
        <div className="title">{titleView ? titleView : title}</div>
        <div className="dialog-content"></div>
        {content ? (
          content
        ) : type === 'account' ? (
          <AccountDialog
            instance={selectedInstance}
            setInstance={setSelectedInstance}
            setIsDialogOpen={setIsDialogOpen}
            reload={reload}
            action={action}
          />
        ) : (
          <FinanceDialog
            instance={selectedInstance}
            setInstance={setSelectedInstance}
            setIsDialogOpen={setIsDialogOpen}
            reload={reload}
            action={action}
          />
        )}
      </div>
    </Dialog>
  );
};

export default DialogComponent;
