import React, { useState, useEffect, useRef, useContext } from 'react';
import './index.scss';
import user from '../../assets/svgs/users.svg';
import { CaretDownOutline } from 'react-ionicons';
import Button from '../Button';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const Navbar = () => {
  const node = useRef();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logOut } = useContext(UserContext);

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
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

  const onClick = () => {
    history.push('/');
    logOut();
  };

  return (
    <div className="navbar-component">
      <div
        className="navbar-container"
        ref={node}
        onClick={onClickNavbarContainer}
      >
        <img className="user-icon" src={user} alt="user-logo" />
        <h5>{currentUser.name}</h5>
        <CaretDownOutline width="0.75rem" className="arrow-down" />
        {isOpen && (
          <div className="user">
            <label>User Name</label>
            <div className="user-info">{currentUser.username}</div>
            <label>Name</label>
            <div className="user-info">{currentUser.name}</div>
            <label>Last Login</label>
            <div className="user-info">
              {currentUser.lastLogin.format('DD MMMM YYYY')}
            </div>
            <Button
              onClick={onClick}
              size="small"
              title="Keluar"
              color="red"
              width="100%"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
