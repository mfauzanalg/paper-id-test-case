import React, { useState, useEffect } from 'react';
import './index.scss';
import user from '../../assets/svgs/users.svg';
import { CaretDownOutline } from 'react-ionicons';
import Button from '../Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = (e) => {
    setIsOpen(false);
  };

  const onClickNavbarContainer = () => {
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
    <div className="navbar-component">
      <div className="navbar-container" onMouseDown={onClickNavbarContainer}>
        <img className="user-icon" src={user} alt="user-logo" />
        <h5>Muhammad Fauzan Al-Ghifari</h5>
        <CaretDownOutline width="0.75rem" className="arrow-down" />
        {isOpen && (
          <div className="user">
            <label>User Name</label>
            <div className="user-info">mfauzanalg</div>
            <label>Name</label>
            <div className="user-info">Muhammad Fauzan Al-Ghifari</div>
            <label>Last Login</label>
            <div className="user-info">26 Maret 2000</div>
            <Button size="small" title="Keluar" color="green" width="100%" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
