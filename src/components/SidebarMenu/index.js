import React from 'react';
import './index.scss';
import { useHistory } from 'react-router-dom';

const SidebarMenu = ({ logo, title }) => {
  const history = useHistory();
  const onMenuClick = (route) => {
    history.push(`/${route.toLowerCase()}`);
  };

  return (
    <div className="sidebar-menu-component" onClick={() => onMenuClick(title)}>
      <img src={logo} alt="logo" />
      <div className="sidebar-menu-container">{title}</div>
    </div>
  );
};

export default SidebarMenu;
