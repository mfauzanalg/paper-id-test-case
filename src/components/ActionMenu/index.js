import React, { useState, useEffect } from 'react';
import './index.scss';
import { CaretDownOutline } from 'react-ionicons';
import { EyeOutline, PencilOutline, TrashOutline } from 'react-ionicons';

const ActionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = (e) => {
    setIsOpen(false);
  };

  const onClickAction = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="action-menu-component" onMouseDown={onClickAction}>
      Action
      <CaretDownOutline color="white" width="0.75rem" className="arrow-down" />
      {isOpen && (
        <div className="action-container">
          <div className="action-list">
            <div className="action">
              <EyeOutline className="icon" color="#405568" />
              View
            </div>
            <div className="action">
              <PencilOutline className="icon" color="#405568" />
              Edit
            </div>
            <div className="action">
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
