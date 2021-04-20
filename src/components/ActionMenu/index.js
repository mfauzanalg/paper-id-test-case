import React, { useState, useEffect, useRef } from 'react';
import './index.scss';
import { CaretDownOutline } from 'react-ionicons';
import { EyeOutline, PencilOutline, TrashOutline } from 'react-ionicons';

const ActionMenu = ({ action }) => {
  const node = useRef();
  const [isOpenAction, setIsOpenAction] = useState(false);

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsOpenAction(false);
  };

  const onClickAction = () => {
    setIsOpenAction(!isOpenAction);
  };

  useEffect(() => {
    if (isOpenAction) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpenAction]);

  return (
    <div className="action-menu-component" ref={node} onClick={onClickAction}>
      Action
      <CaretDownOutline color="white" width="0.75rem" className="arrow-down" />
      {isOpenAction && (
        <div className="action-container">
          <div className="action-list">
            <div className="action" onClick={() => action.onActionView()}>
              <EyeOutline className="icon" color="#405568" />
              View
            </div>
            <div className="action" onClick={() => action.onActionEdit()}>
              <PencilOutline className="icon" color="#405568" />
              Edit
            </div>
            <div className="action" onClick={() => action.onActionDelete()}>
              <TrashOutline className="icon" color="#405568" />
              Delete
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionMenu;
