import React from 'react';
import './index.scss';
import { useHistory, useLocation } from 'react-router-dom';

const SidebarMenu = ({ logo, title }) => {
  const history = useHistory();
  const location = useLocation();
  const activeClass = location.pathname.substring(1);
  let menuClass = 'sidebar-menu-container';
  if (activeClass === title.toLowerCase()) {
    menuClass += ' active';
  }

  const onMenuClick = (route) => {
    history.push(`/${route.toLowerCase()}`);
  };

  return (
    <div className="sidebar-menu-component" onClick={() => onMenuClick(title)}>
      <img src={logo} alt="logo" />
      <div className={menuClass}>{title}</div>
    </div>
  );
};

export default SidebarMenu;
